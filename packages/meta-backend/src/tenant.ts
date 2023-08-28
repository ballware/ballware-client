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
} from '@ballware/meta-interface';
import JSON5 from 'json5';
import { map } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchApiError } from './error';

interface Tenant {
  Id: string;
  Name: string;
  Navigation?: string;
  RightsCheckScript?: string;
}

const compileTenant = (tenant: Tenant): CompiledTenant => {
  const compiledTenant = {
    id: tenant.Id,
    name: tenant.Name,
    navigation: tenant.Navigation
      ? (JSON5.parse(tenant.Navigation) as NavigationLayout)
      : ({} as NavigationLayout),
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
) => {
  const url = `${serviceBaseUrl}api/tenant/metadatafortenant/${tenant}`;

  return ajax<Tenant>({ url, headers: { Authorization: `Bearer ${token}` }})
    .pipe(map(response => compileTenant(response.response)))
    .pipe(catchApiError);
};

const allowedTenantFunc = (serviceBaseUrl: string) => (
  token: string
) => {
  const url = `${serviceBaseUrl}api/tenant/allowed`;

  return ajax<{ Id: string, Name: string}[]>({ url, headers: { Authorization: `Bearer ${token}` }})
    .pipe(map(response => response.response))
    .pipe(catchApiError);
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
