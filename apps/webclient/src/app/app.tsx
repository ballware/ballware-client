import React, { Suspense, useContext, useEffect, useMemo } from 'react';
import { Router, Route } from 'react-router-dom';
import { LoadIndicator } from 'devextreme-react/load-indicator';

import { history } from './history';

import { I18nextProvider } from 'react-i18next';
import i18n from './locate/i18n';

import { SettingsContext, ProviderFactoryContext } from '@ballware/react-contexts';

import { RenderFactoryContext } from '@ballware/react-renderer';

import { DocumentViewer } from '../components/print/documentviewer';

import { AuthorizationCodeRightsProvider } from '@ballware/react-provider';


const App = () => {

  const { Application, PrivateRoute, Routes } = useContext(RenderFactoryContext);

  useEffect(() => {    
    i18n.changeLanguage(navigator.language);
  }, []);

  return (<Suspense fallback="Loading"><I18nextProvider i18n={i18n}>
      {(Application && PrivateRoute && Routes) && <Application>
        <PrivateRoute path="/print" component={DocumentViewer} allowed={() => true} />
        <Routes/>
      </Application>}
    </I18nextProvider>
  </Suspense>);
}

export interface AppComponentProps {
  authority: string;
  client_id: string;
  client_secret?: string;
  application_uri: string;
  scope: string;
  account_management_uri?: string;
}

export const AppComponent = ({ authority, client_id, client_secret, application_uri, scope, account_management_uri }: AppComponentProps) => {
      
    const { version } = useContext(SettingsContext);
    const { NotificationProvider, TenantProvider } = useContext(ProviderFactoryContext);
    const { Context, Notification } = useContext(RenderFactoryContext);
  
    useEffect(() => {
        if (version) {
            console.log(`Version ${version}`);
        }
    }, [version]);
    
    const MemorizedApp = useMemo(() => () => <App/>, []);

    if (NotificationProvider && TenantProvider && Context && Notification) {
      return <Router history={history}>
        <Context>
          <NotificationProvider>
            <AuthorizationCodeRightsProvider 
              authority={authority} 
              client={client_id} 
              secret={client_secret}
              redirect_uri={`${application_uri}/signin-oidc`}
              post_logout_redirect_uri={application_uri} 
              response_type={'code'}
              scope={scope}
              account_management_uri={account_management_uri}>
              <TenantProvider>
                <Route path={"/"} component={MemorizedApp} />
                <Notification />
              </TenantProvider>
            </AuthorizationCodeRightsProvider>
          </NotificationProvider>
        </Context>
      </Router>
    } else {
      return <LoadIndicator/>;
    }
  }