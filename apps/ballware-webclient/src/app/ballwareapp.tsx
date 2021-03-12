import React, { Suspense, useContext, useEffect, useMemo, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import Iframe from 'react-iframe';

import { I18nextProvider } from 'react-i18next';
import i18n from './locate/i18n';


import { MappedSessionWithUserRights, SessionWithUserInfo } from '@ballware/identity-interface';
import { Rights } from '@ballware/meta-interface';
import { SettingsContext, ProviderFactoryContext, RightsContext } from '@ballware/react-contexts';
import { RenderFactoryContext } from '@ballware/react-renderer';
import { AuthorizationCodeRightsProvider } from '@ballware/react-provider';

function mapSession<T extends MappedSessionWithUserRights>(sessionWithUserInfo: SessionWithUserInfo, userinfo: Record<string, unknown>) {
    return {
      ...sessionWithUserInfo,
      rights: {
        BenutzerId: sessionWithUserInfo.identifier,
        Email: sessionWithUserInfo.email,
        PersonId: userinfo.person,
        TenantId: userinfo.tenant,
        Claims: userinfo.right,
      } as Rights
    } as T;
}

export interface BallwareAppProps {
    authority: string;
    client_id: string;
    client_secret?: string;
    application_uri: string;
    scope: string;
    account_management_uri?: string;
}

export const BallwareApp = ({ authority, client_id, client_secret, application_uri, scope, account_management_uri }: BallwareAppProps) => {
    const { version, googlekey } = useContext(SettingsContext);
    const { NotificationProvider, TenantProvider } = useContext(ProviderFactoryContext);
    const { Context, Notification } = useContext(RenderFactoryContext);

    const { Application, PrivateRoute, Routes } = useContext(RenderFactoryContext);
  
    useEffect(() => {    
        i18n.changeLanguage(navigator.language);
      }, []);

    useEffect(() => {
        if (version) {
            console.log(`Version ${version}`);
        }
    }, [version]);
    
    const MemorizedDocumentViewer = useMemo(() => () => {

        const [url, setUrl] = useState(undefined as string);

        const { metaDocumentApiFactory } = useContext(SettingsContext)
        const { token } = useContext(RightsContext);
        const { location } = useHistory();

        useEffect(() => {
            if (metaDocumentApiFactory && token && location) {
            const api = metaDocumentApiFactory(); 

            api.viewerUrl(token, location.search).then(result => {
                setUrl(result);
            });
            }
        }, [metaDocumentApiFactory, token, location]);

        return <div style={{ height: '100%' }}>{url && <Iframe allowFullScreen scrolling={'no'} frameBorder={0} styles={{ border: 0 }} width={'100%'} height={'100%'} url={url} />}</div>;
    }, []);

    const MemorizedApp = useMemo(() => () => <Suspense fallback="Loading"><I18nextProvider i18n={i18n}>
        {(Application && PrivateRoute && Routes) && <Application>
            <PrivateRoute path="/print" component={MemorizedDocumentViewer} allowed={() => true} />
            <Routes/>
            </Application>
        }
        </I18nextProvider>
    </Suspense>, []);

    if (NotificationProvider && TenantProvider && Context && Notification && Application && PrivateRoute && Routes) {
      return <Context>
          <NotificationProvider>
            <AuthorizationCodeRightsProvider 
              authority={authority} 
              client={client_id} 
              secret={client_secret}
              redirect_uri={`${application_uri}/signin-oidc`}
              post_logout_redirect_uri={application_uri} 
              response_type={'code'}
              scope={scope}
              account_management_uri={account_management_uri}
              userinfoMapper={mapSession}>
              <TenantProvider>
                {googlekey && <script type="text/javascript" src={`https://maps.googleapis.com/maps/api/js?key=${googlekey}`}/>}
                <Route path={"/"} component={MemorizedApp} />
                <Notification />
              </TenantProvider>
            </AuthorizationCodeRightsProvider>
          </NotificationProvider>
        </Context>      
    } else {
      return <React.Fragment></React.Fragment>;
    }
}

