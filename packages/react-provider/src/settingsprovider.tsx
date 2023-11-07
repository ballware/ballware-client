/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { PropsWithChildren, useState } from 'react';
import {
  IdentityUserApi,
  IdentityRoleApi,
} from '@ballware/identity-interface';
import {
  MetaEntityApi,
  MetaTenantApi,
  MetaAttachmentApi,
  MetaStatisticApi,
  MetaLookupApi,
  MetaProcessingstateApi,
  MetaPickvalueApi,
  MetaDocumentApi,
  MetaDocumentationApi,
  MetaPageApi,
  MetaGenericEntityApi,
} from '@ballware/meta-interface';
import {
  SettingsContext,
  SettingsContextState,
} from '@ballware/react-contexts';

/**
 * Properties for settings provider
 */
export interface SettingsProviderProps {
  /**
   * Current app version for display
   */
  appversion: string;

  /**
   * Google API key used by maps implementation
   */
  googlekey: string;

  /**
   * Data access to user list
   */
  identityUserApi: IdentityUserApi;

  /**
   * Data access to role list
   */
  identityRoleApi: IdentityRoleApi;

  /**
   * Data access generic entity metadata
   */
  metaEntityApi: MetaEntityApi;

  /**
   * Data access tenant metadata
   */
  metaTenantApi: MetaTenantApi;

  /**
   * Data access attachments
   */
  metaAttachmentApi: MetaAttachmentApi;

  /**
   * Data access statistic metadata and data
   */
  metaStatisticApi: MetaStatisticApi;

  /**
   * Data access lookup data
   */
  metaLookupApi: MetaLookupApi;

  /**
   * Data access processing state functionality
   */
  metaProcessingstateApi: MetaProcessingstateApi;

  /**
   * Data access pickvalue data
   */
  metaPickvalueApi: MetaPickvalueApi;

  /**
   * Data access print document lists
   */
  metaDocumentApi: MetaDocumentApi;

  /**
   * Data access documentation
   */
  metaDocumentationApi: MetaDocumentationApi;

  /**
   * Data access page metadata
   */
  metaPageApi: MetaPageApi;

  /**
   * Factory to access generic entity crud operations
   */
  metaGenericEntityApiFactory: (baseUrl: string) => MetaGenericEntityApi;
}

/**
 * Provides environment dependent settings and data access
 */
export const SettingsProvider = ({
  appversion,
  googlekey,
  identityUserApi,
  identityRoleApi,
  metaEntityApi,
  metaTenantApi,
  metaAttachmentApi,
  metaStatisticApi,
  metaLookupApi,
  metaProcessingstateApi,
  metaPickvalueApi,
  metaDocumentApi,
  metaDocumentationApi,
  metaPageApi,
  metaGenericEntityApiFactory,
  children,
}: PropsWithChildren<SettingsProviderProps>): JSX.Element => {
  const [value] = useState({
    version: appversion,
    googlekey,
    identityUserApi,
    identityRoleApi,
    metaEntityApi,
    metaTenantApi,
    metaAttachmentApi,
    metaStatisticApi,
    metaLookupApi,
    metaProcessingstateApi,
    metaPickvalueApi,
    metaDocumentApi,
    metaDocumentationApi,
    metaPageApi,
    metaGenericEntityApiFactory,
  } as SettingsContextState);

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};
