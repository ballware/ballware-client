/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { createContext } from 'react';
import {
  IdentityUserApi,
  IdentityRoleApi,
} from '@ballware/identity-interface';
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
  version: string;

  /**
   * API key for usage with google services
   */
  googlekey: string;

  /**
   * Data adapter for user list data access
   */
  identityUserApi: IdentityUserApi;

  /**
   * Data adapter for role list data access
   */
  identityRoleApi: IdentityRoleApi;

  /**
   * Data adapter for entity metadata access
   */
  metaEntityApi: MetaEntityApi;

  /**
   * Data adapter for tenant data access
   */
  metaTenantApi: MetaTenantApi;

  /**
   * Data adapter for tenant data access
   */
  metaAttachmentApi: MetaAttachmentApi;

  /**
   * Data adapter for statistic data access
   */
  metaStatisticApi: MetaStatisticApi;

  /**
   * Data adapter for lookup data access
   */
  metaLookupApi: MetaLookupApi;

  /**
   * Data adapter for processing state data access
   */
  metaProcessingstateApi: MetaProcessingstateApi;

  /**
   * Data adapter for pick values data access
   */
  metaPickvalueApi: MetaPickvalueApi;

  /**
   * Data adapter for print document data access
   */
  metaDocumentApi: MetaDocumentApi;

  /**
   * Data adapter for documentation data access
   */
  metaDocumentationApi: MetaDocumentationApi;

  /**
   * Data adapter for page data access
   */
  metaPageApi: MetaPageApi;

  /**
   * Data adapter for generic entity crud operations
   */
  metaGenericEntityApiFactory: (baseUrl: string) => MetaGenericEntityApi;
}

export const SettingsContext = createContext({} as SettingsContextState);
