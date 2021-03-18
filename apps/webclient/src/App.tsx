import React from 'react';

import './App.css';

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

 import { AppComponent } from './app/app';
import { DxRenderFactoryProvider } from '@ballware/react-renderer-dx';

declare var window :any;

function App() {

  const applicationBaseUrl: string = window.ENV.REACT_APP_BASEURL ?? 'https://localhost:3000';
  const identityBaseUrl: string = window.ENV.REACT_APP_IDENTITYURL ?? 'https://identity.ballware.de/';
  const metaBaseUrl: string = window.ENV.REACT_APP_METAURL ?? 'https://meta.ballware.de/';
  const documentBaseUrl: string = window.ENV.REACT_APP_DOCUMENTURL ?? 'https://documents.ballware.de/';
  const identityClientId: string = window.ENV.REACT_APP_CLIENTID ?? 'incidentreport';
  const identityClientSecret: string = window.ENV.REACT_APP_CLIENTSECRET ?? 'trustme';
  const identityScopes: string = window.ENV.REACT_APP_IDENTITYSCOPES ?? 'openid offline_access incidentreportUserInfo incidentreportApi identityApi documentApi metaApi';
  const managementUri: string = window.ENV.REACT_APP_ACCOUNTURL ?? 'https://identity.ballware.de/Manage/Index'
  const googlekey: string = window.ENV.REACT_APP_GOOGLEKEY ?? 'AIzaSyBtLddtyZa4860nhMtItQfXf_x2c2_OmVc';

  return (<SettingsProvider 
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
          <AppComponent authority={identityBaseUrl} scope={identityScopes} application_uri={applicationBaseUrl} client_id={identityClientId} client_secret={identityClientSecret} account_management_uri={managementUri} />        
        </DxRenderFactoryProvider>
      </ProviderFactory>
    </SettingsProvider>
  );
}

export default App;
