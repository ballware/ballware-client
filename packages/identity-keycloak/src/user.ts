/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { IdentityUserApi } from '@ballware/identity-interface';
import axios from 'axios';

const selectListFunc = (serviceBaseUrl: string) => (
  token: string
): Promise<Array<Record<string, unknown>>> => {
  const url = `${serviceBaseUrl}ballware-user-api/selectlist`;

  return axios
    .get<Array<Record<string, unknown>>>(url, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(response => response.data);
};

const selectByIdFunc = (serviceBaseUrl: string) => (
  token: string,
  identifier: string
): Promise<Record<string, unknown>> => {
  const url = `${serviceBaseUrl}ballware-user-api/selectbyid/${identifier}`;

  return axios
    .get<Record<string, unknown>>(url, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(response => response.data);
};

const switchTenantFunc = (serviceBaseUrl: string) => (
  token: string,
  tenant: string
): Promise<void> => {
  const url = `${serviceBaseUrl}ballware-user-api/tenant?tenant=${tenant}`;

  return axios
    .post(url, undefined, {
      headers: { Authorization: `Bearer ${token}` },
    });
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
