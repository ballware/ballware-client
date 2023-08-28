/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { IdentityRoleApi } from '@ballware/identity-interface';
import { map } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchApiError } from './error';

const selectListFunc = (serviceBaseUrl: string) => (
  token: string
) => {
  const url = `${serviceBaseUrl}ballware-role-api/selectlist`;

  return ajax<Array<Record<string, unknown>>>({ url, headers: { Authorization: `Bearer ${token}` }})
    .pipe(map(r => r.response))
    .pipe(catchApiError);
};

const selectByIdFunc = (serviceBaseUrl: string) => (
  token: string,
  identifier: string
) => {
  const url = `${serviceBaseUrl}ballware-role-api/selectbyid/${identifier}`;

  return ajax<Record<string, unknown>>({ url, headers: { Authorization: `Bearer ${token}` }})
    .pipe(map(r => r.response))
    .pipe(catchApiError);
};

/**
 * Create API adapter for ballware.identity.server role list access
 * @param serviceBaseUrl Base url for ballware.identity.server to use
 */
export function createKeycloakBackendRoleApi(
  serviceBaseUrl: string
): IdentityRoleApi {
  return {
    selectListFunc: selectListFunc(serviceBaseUrl),
    selectByIdFunc: selectByIdFunc(serviceBaseUrl),
  } as IdentityRoleApi;
}
