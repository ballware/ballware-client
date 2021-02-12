/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { createContext } from 'react';
import { ResourceOwnerAuthApi, IdentityUserApi, IdentityRoleApi } from '@ballware/identity-interface';
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

/**
 * Context for providing environment dependend application functionality
 */
export interface SettingsContextState {
    /**
     * Current version of application
     */
    version?: string;

    /**
     * API key for usage with google services
     */
    googlekey?: string;

    /**
     * Factory for creating data adapter for user authentication
     */
    identityAuthApiFactory?: () => ResourceOwnerAuthApi;
    
    /**
     * Factory for creating data adapter for user list data access
     */
    identityUserApiFactory?: () => IdentityUserApi;

    /**
     * Factory for creating data adapter for role list data access
     */
    identityRoleApiFactory?: () => IdentityRoleApi;

    /**
     * Factory for creating data adapter for entity metadata access
     */
    metaEntityApiFactory?: () => MetaEntityApi;

    /**
     * Factory for creating data adapter for tenant data access
     */
    metaTenantApiFactory?: () => MetaTenantApi;

    /**
     * Factory for creating data adapter for tenant data access
     */
    metaAttachmentApiFactory?: () => MetaAttachmentApi;

    /**
     * Factory for creating data adapter for statistic data access
     */
    metaStatisticApiFactory?: () => MetaStatisticApi;

    /**
     * Factory for creating data adapter for lookup data access
     */
    metaLookupApiFactory?: () => MetaLookupApi;

    /**
     * Factory for creating data adapter for processing state data access
     */
    metaProcessingstateApiFactory?: () => MetaProcessingstateApi;

    /**
     * Factory for creating data adapter for pick values data access
     */
    metaPickvalueApiFactory?: () => MetaPickvalueApi;

    /**
     * Factory for creating data adapter for print document data access
     */
    metaDocumentApiFactory?: () => MetaDocumentApi;

    /**
     * Factory for creating data adapter for documentation data access
     */
    metaDocumentationApiFactory?: () => MetaDocumentationApi;

    /**
     * Factory for creating data adapter for page data access
     */
    metaPageApiFactory?: () => MetaPageApi;

    /**
     * Factory for creating data adapter for generic entity crud operations
     */
    metaGenericEntityApiFactory?: (baseUrl: string) => MetaGenericEntityApi;
}

export const SettingsContext = createContext({} as SettingsContextState);
