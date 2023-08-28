/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { MetaProcessingstateApi } from '@ballware/meta-interface';
import { map } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchApiError } from './error';

const selectListForEntity = (serviceBaseUrl: string) => (
  token: string,
  entity: string
) => {
  const url = `${serviceBaseUrl}api/processingstate/selectlistforentity/${entity}`;

  return ajax<Array<Record<string, unknown>>>({ url, headers: { Authorization: `Bearer ${token}` }})
    .pipe(map(response => response.response))
    .pipe(catchApiError);
};

const selectListAllowedForEntityAndIds = (serviceBaseUrl: string) => (
  token: string,
  entity: string,
  ids: Array<string>
) => {
  const url = `${serviceBaseUrl}api/processingstate/selectlistallowedsuccessorsforentities/${entity}?${ids
    .map(i => `id=${i}`)
    .join('&')}`;

  return ajax<Array<Record<string, unknown>>>({ url, headers: { Authorization: `Bearer ${token}` }})
    .pipe(map(response => response.response))
    .pipe(catchApiError);
};

const selectByStateForEntity = (serviceBaseUrl: string) => (
  token: string,
  entity: string
) => (state: number | string) => {
  const url = `${serviceBaseUrl}api/processingstate/selectbystateforentity/${entity}/${state}`;

  return ajax<Record<string, unknown>>({ url, headers: { Authorization: `Bearer ${token}` }})
    .pipe(map(response => response.response))
    .pipe(catchApiError);
};

/**
 * Create adapter for processing state fetch operations with ballware.meta.service
 * @param serviceBaseUrl Base URL to connect to ballware.meta.service
 * @returns Adapter object providing data operations
 */
export function createMetaBackendProcessingstateApi(
  serviceBaseUrl: string
): MetaProcessingstateApi {
  return {
    selectListForEntity: selectListForEntity(serviceBaseUrl),
    selectListAllowedForEntityAndIds: selectListAllowedForEntityAndIds(
      serviceBaseUrl
    ),
    selectByStateForEntity: selectByStateForEntity(serviceBaseUrl),
  } as MetaProcessingstateApi;
}
