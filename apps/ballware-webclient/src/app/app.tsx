import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import styles from './app.module.scss';

import { SettingsProvider, ProviderFactory } from '@ballware/react-provider';

import { createIdentityBackendUserApi, createIdentityBackendRoleApi } from '@ballware/identity-backend';
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
import { BallwareApp } from './ballwareapp';

declare var window :any;

export function App() {

  const applicationBaseUrl: string = window.ENV.REACT_APP_BASEURL;
  const identityBaseUrl: string = window.ENV.REACT_APP_IDENTITYURL;
  const metaBaseUrl: string = window.ENV.REACT_APP_METAURL;
  const documentBaseUrl: string = window.ENV.REACT_APP_DOCUMENTURL;
  const identityClientId: string = window.ENV.REACT_APP_CLIENTID;
  const identityClientSecret: string = window.ENV.REACT_APP_CLIENTSECRET;
  const identityScopes: string = window.ENV.REACT_APP_IDENTITYSCOPES;
  const managementUri: string = window.ENV.REACT_APP_ACCOUNTURL;
  const googlekey: string = window.ENV.REACT_APP_GOOGLEKEY;

  return (
    <div className={styles.app}>
      <SettingsProvider 
        appversion={process.env.REACT_APP_VERSION}
        googlekey={googlekey}      
        identityUserApiFactory={() => createIdentityBackendUserApi(identityBaseUrl)}
        identityRoleApiFactory={() => createIdentityBackendRoleApi(identityBaseUrl)}
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
        metaGenericEntityApiFactory={(entityBaseUrl) => createMetaBackendGenericEntityApi(entityBaseUrl)}>
        <ProviderFactory>
          <DxRenderFactoryProvider>
            <Router history={createBrowserHistory({  
              getUserConfirmation: (message, callback) => callback(window.confirm(message))
            })}>
              <BallwareApp authority={identityBaseUrl} scope={identityScopes} application_uri={applicationBaseUrl} client_id={identityClientId} client_secret={identityClientSecret} account_management_uri={managementUri} />        
            </Router>
          </DxRenderFactoryProvider>
        </ProviderFactory>
      </SettingsProvider>
    </div>
  );
}

export default App;
