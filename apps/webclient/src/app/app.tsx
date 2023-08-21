import './app.module.scss';

import { SettingsProvider, ProviderFactory, AuthorizationCodeRightsProvider } from '@ballware/react-provider';

import { createKeycloakBackendUserApi, createKeycloakBackendRoleApi } from '@ballware/identity-keycloak';
import { createMetaBackendEntityApi, 
  createMetaBackendTenantApi, 
  createMetaBackendGenericEntityApi,   
  createMetaBackendAttachmentApi, 
  createMetaBackendLookupApi,
  createMetaBackendProcessingstateApi,
  createMetaBackendPickvalueApi,
  createMetaBackendStatisticApi,
  createMetaBackendDocumentApi,
  createMetaBackendDocumentationApi,
  createMetaBackendPageApi
} from '@ballware/meta-backend';

import { DxRenderFactoryProvider } from '@ballware/react-renderer-dx';
import { ProviderFactoryContext, SettingsContext } from '@ballware/react-contexts';
import { useContext, useEffect, useMemo } from 'react';
import { RenderFactoryContext } from '@ballware/react-renderer';
import { BrowserRouter, Route, Routes as ReactRoutes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { DocumentViewer } from '../components/print/documentviewer';
import i18n from './locate/i18n';
import React from 'react';

declare const window: {
  ENV: {
    VITE_APP_VERSION: string,
    VITE_APP_BASEURL: string,
    VITE_APP_IDENTITYURL: string,
    VITE_APP_METAURL: string,
    VITE_APP_DOCUMENTURL: string,
    VITE_APP_CLIENTID: string,
    VITE_APP_CLIENTSECRET: string,
    VITE_APP_IDENTITYSCOPES: string,
    VITE_APP_ACCOUNTURL: string,
    VITE_APP_GOOGLEKEY: string
  }
};

const AppHost = () => {
  const { version } = useContext(SettingsContext);
  const { NotificationProvider, TenantProvider } = useContext(ProviderFactoryContext);
  const { Context, Notification, Application, PrivateRoute, Routes } = useContext(RenderFactoryContext);

  const application_uri = window.ENV.VITE_APP_BASEURL;
  const authority = window.ENV.VITE_APP_IDENTITYURL;
  const client_id = window.ENV.VITE_APP_CLIENTID;
  const client_secret = window.ENV.VITE_APP_CLIENTSECRET;
  const scope = window.ENV.VITE_APP_IDENTITYSCOPES;
  const account_management_uri = window.ENV.VITE_APP_ACCOUNTURL;

  useEffect(() => {
    if (version) {
        console.log(`Version ${version}`);
    }

    i18n.changeLanguage(navigator.language);
  }, [version]);

  return useMemo(() => {
    console.log('Rehydrating Application');

    return (<React.Fragment>
      {(Context && Notification && PrivateRoute && Application && Routes) &&
        <BrowserRouter>
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
                  <I18nextProvider i18n={i18n}>
                    <Application>  
                      <ReactRoutes>                    
                        <Route path="/print" element={<PrivateRoute allowed={() => true}><DocumentViewer/></PrivateRoute>}/>
                        <Route path="*" element={<Routes/>}/>
                      </ReactRoutes>              
                    </Application>
                  </I18nextProvider>              
                  <Notification />
                </TenantProvider>
              </AuthorizationCodeRightsProvider>
            </NotificationProvider>
          </Context>
        </BrowserRouter>}
      </React.Fragment>);
  }, [Application, Context, Notification, NotificationProvider, PrivateRoute, Routes, TenantProvider]);
}

export function App() {
  const identityBaseUrl: string = window.ENV.VITE_APP_IDENTITYURL;
  const metaBaseUrl: string = window.ENV.VITE_APP_METAURL;
  const documentBaseUrl: string = window.ENV.VITE_APP_DOCUMENTURL;
  const googlekey: string = window.ENV.VITE_APP_GOOGLEKEY;

  return (<SettingsProvider 
      appversion={window.ENV.VITE_APP_VERSION}
      googlekey={googlekey}      
      identityUserApiFactory={() => createKeycloakBackendUserApi(identityBaseUrl)}
      identityRoleApiFactory={() => createKeycloakBackendRoleApi(identityBaseUrl)}
      metaEntityApiFactory={() => createMetaBackendEntityApi(metaBaseUrl)}
      metaTenantApiFactory={() => createMetaBackendTenantApi(metaBaseUrl)}
      metaAttachmentApiFactory={() => createMetaBackendAttachmentApi(metaBaseUrl)}
      metaStatisticApiFactory={() => createMetaBackendStatisticApi(metaBaseUrl)}
      metaLookupApiFactory={() => createMetaBackendLookupApi(metaBaseUrl)}
      metaProcessingstateApiFactory={() => createMetaBackendProcessingstateApi(metaBaseUrl)}
      metaPickvalueApiFactory={() => createMetaBackendPickvalueApi(metaBaseUrl)}
      metaDocumentApiFactory={() => createMetaBackendDocumentApi(metaBaseUrl, documentBaseUrl)}
      metaDocumentationApiFactory={() => createMetaBackendDocumentationApi(metaBaseUrl)}
      metaPageApiFactory={() => createMetaBackendPageApi(metaBaseUrl)}
      metaGenericEntityApiFactory={(entityBaseUrl) => createMetaBackendGenericEntityApi(entityBaseUrl?.replaceAll('{meta}', metaBaseUrl).replaceAll('{identity}', identityBaseUrl))}>
      <ProviderFactory>
        <DxRenderFactoryProvider>
          <AppHost/>
        </DxRenderFactoryProvider>
      </ProviderFactory>
      {googlekey && <script type="text/javascript" src={`https://maps.googleapis.com/maps/api/js?key=${googlekey}`}></script>}
    </SettingsProvider>
  );
}

export default App;
