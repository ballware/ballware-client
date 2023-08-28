/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { IdentityUserApi } from '@ballware/identity-interface';
import { map } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchApiError } from './error';

const selectListFunc = (serviceBaseUrl: string) => (
  token: string
) => {
  const url = `${serviceBaseUrl}ballware-user-api/selectlist`;

  return ajax<Array<Record<string, unknown>>>({ url, headers: { Authorization: `Bearer ${token}` }})
    .pipe(map(r => r.response))
    .pipe(catchApiError);
};

const selectByIdFunc = (serviceBaseUrl: string) => (
  token: string,
  identifier: string
) => {
  const url = `${serviceBaseUrl}ballware-user-api/selectbyid/${identifier}`;

  return ajax<Record<string, unknown>>({ url, headers: { Authorization: `Bearer ${token}` }})
    .pipe(map(r => r.response))
    .pipe(catchApiError);
};

const switchTenantFunc = (serviceBaseUrl: string) => (
  token: string,
  tenant: string
) => {
  const url = `${serviceBaseUrl}ballware-user-api/tenant?tenant=${tenant}`;

  return ajax<void>({ 
      url, 
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: undefined
    })
    .pipe(map(r => r.response))
    .pipe(catchApiError);
};
 
/**
 * Create API adapter for ballware.identity.server user list access
 * @param serviceBaseUrl Base url for ballware.identity.server to use
 */
export function createKeycloakBackendUserApi(
  serviceBaseUrl: string
): IdentityUserApi {
  return {
    selectListFunc: selectListFunc(serviceBaseUrl),
    selectByIdFunc: selectByIdFunc(serviceBaseUrl),
    switchTenantFunc: switchTenantFunc(serviceBaseUrl)
  } as IdentityUserApi;
}
