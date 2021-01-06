import { createContext } from 'react';
import { IdentityAuthApi, IdentityUserApi, IdentityRoleApi } from '@ballware/identity-interface';
import {
    MetaEntityApi,
    MetaTenantApi,
    MetaGenericEntityApi,
    MetaAttachmentApi,
    MetaStatisticApi,
    MetaLookupApi,
    MetaProcessingstateApi,
    MetaPickvalueApi,
    MetaDocumentApi,
    MetaDocumentationApi,
    MetaPageApi,
} from '@ballware/meta-interface';

export interface SettingsContextState {
    version?: string;
    identityAuthApiFactory?: () => IdentityAuthApi;
    identityUserApiFactory?: () => IdentityUserApi;
    identityRoleApiFactory?: () => IdentityRoleApi;
    metaEntityApiFactory?: () => MetaEntityApi;
    metaTenantApiFactory?: () => MetaTenantApi;
    metaAttachmentApiFactory?: () => MetaAttachmentApi;
    metaStatisticApiFactory?: () => MetaStatisticApi;
    metaLookupApiFactory?: () => MetaLookupApi;
    metaProcessingstateApiFactory?: () => MetaProcessingstateApi;
    metaPickvalueApiFactory?: () => MetaPickvalueApi;
    metaDocumentApiFactory?: () => MetaDocumentApi;
    metaDocumentationApiFactory?: () => MetaDocumentationApi;
    metaPageApiFactory?: () => MetaPageApi;
    metaGenericEntityApiFactory?: (baseUrl: string) => MetaGenericEntityApi;
}

export const SettingsContext = createContext({} as SettingsContextState);
