import React from 'react';

import './App.css';

import { SettingsProvider, ProviderFactory } from '@ballware/react-provider';

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

 import { AppComponent } from './app/app';
import { DxRenderFactoryProvider } from '@ballware/react-renderer-dx';

declare var window :any;

function App() {

  const applicationBaseUrl: string = window.ENV.REACT_APP_BASEURL;
  const identityBaseUrl: string = window.ENV.REACT_APP_IDENTITYURL;
  const metaBaseUrl: string = window.ENV.REACT_APP_METAURL;
  const documentBaseUrl: string = window.ENV.REACT_APP_DOCUMENTURL;
  const identityClientId: string = window.ENV.REACT_APP_CLIENTID;
  const identityClientSecret: string = window.ENV.REACT_APP_CLIENTSECRET;
  const identityScopes: string = window.ENV.REACT_APP_IDENTITYSCOPES;
  const managementUri: string = window.ENV.REACT_APP_ACCOUNTURL;
  const googlekey: string = window.ENV.REACT_APP_GOOGLEKEY;

  return (<SettingsProvider 
      appversion={process.env.REACT_APP_VERSION}
      googlekey={googlekey}      
      identityUserApi={createKeycloakBackendUserApi(identityBaseUrl)}
      identityRoleApi={createKeycloakBackendRoleApi(identityBaseUrl)}
      metaEntityApi={createMetaBackendEntityApi(metaBaseUrl)}
      metaTenantApi={createMetaBackendTenantApi(metaBaseUrl)}
      metaAttachmentApi={createMetaBackendAttachmentApi(metaBaseUrl)}
      metaStatisticApi={createMetaBackendStatisticApi(metaBaseUrl)}
      metaLookupApi={createMetaBackendLookupApi(metaBaseUrl)}
      metaProcessingstateApi={createMetaBackendProcessingstateApi(metaBaseUrl)}
      metaPickvalueApi={createMetaBackendPickvalueApi(metaBaseUrl)}
      metaDocumentApi={createMetaBackendDocumentApi(metaBaseUrl, documentBaseUrl)}
      metaDocumentationApi={createMetaBackendDocumentationApi(metaBaseUrl)}
      metaPageApi={createMetaBackendPageApi(metaBaseUrl)}
      metaGenericEntityApiFactory={(entityBaseUrl) => createMetaBackendGenericEntityApi(entityBaseUrl?.replaceAll('{meta}', metaBaseUrl).replaceAll('{identity}', identityBaseUrl))}>
      <ProviderFactory>
        <DxRenderFactoryProvider>
          <AppComponent authority={identityBaseUrl} scope={identityScopes} application_uri={applicationBaseUrl} client_id={identityClientId} client_secret={identityClientSecret} account_management_uri={managementUri} />        
        </DxRenderFactoryProvider>
      </ProviderFactory>
      {googlekey && <script type="text/javascript" src={`https://maps.googleapis.com/maps/api/js?key=${googlekey}`}></script>}
    </SettingsProvider>
  );
}

export default App;
