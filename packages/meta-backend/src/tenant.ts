/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import {
  MetaTenantApi,
  CompiledTenant,
  NavigationLayout,
  Template,
} from '@ballware/meta-interface';
import * as JSON5 from 'json5';
import axios from 'axios';

interface Tenant {
  Id: string;
  Name: string;
  Navigation?: string;
  Templates?: string;
  RightsCheckScript?: string;
}

const compileTenant = (tenant: Tenant): CompiledTenant => {
  const compiledTenant = {
    id: tenant.Id,
    name: tenant.Name,
    navigation: tenant.Navigation
      ? (JSON5.parse(tenant.Navigation) as NavigationLayout)
      : ({} as NavigationLayout),
    templates: tenant.Templates 
      ? (JSON5.parse(tenant.Templates) as Array<{ identifier: string, definition: string }>).map(t => ({
            identifier: t.identifier,
            definition: JSON5.parse(t.definition)
          } as Template))        
      : ([]),
  } as CompiledTenant;

  if (tenant.RightsCheckScript) {
    const compiledArgs = ['userinfo', 'right'];
    const compiledFn = Function.apply(
      Function,
      compiledArgs.concat(tenant.RightsCheckScript)
    );

    compiledTenant.hasRight = compiledFn
      ? (userinfo, right) => compiledFn.apply(compiledFn, [userinfo, right])
      : () => true;
  }

  return compiledTenant;
};

const metadataFunc = (serviceBaseUrl: string) => (
  token: string,
  tenant: string
): Promise<CompiledTenant> => {
  const url = `${serviceBaseUrl}api/tenant/metadatafortenant/${tenant}`;

  return axios
    .get<Tenant>(url, { headers: { Authorization: `Bearer ${token}` } })
    .then(response => compileTenant(response.data));
};

const allowedTenantFunc = (serviceBaseUrl: string) => (token: string): Promise<{ Id: string, Name: string}[]> => {
  const url = `${serviceBaseUrl}api/tenant/allowed`;

  return axios
    .get<{ Id: string, Name: string}[]>(url, { headers: { Authorization: `Bearer ${token}` } })
    .then(response => response.data);
}

/**
 * Create adapter for tenant fetch operations with ballware.meta.service
 * @param serviceBaseUrl Base URL to connect to ballware.meta.service
 * @returns Adapter object providing data operations
 */
export function createMetaBackendTenantApi(
  serviceBaseUrl: string
): MetaTenantApi {
  return {
    metadataForTenant: metadataFunc(serviceBaseUrl),
    allowed: allowedTenantFunc(serviceBaseUrl)
  } as MetaTenantApi;
}
