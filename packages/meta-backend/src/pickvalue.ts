/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { MetaPickvalueApi } from '@ballware/meta-interface';
import { map } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchApiError } from './error';

const selectListForEntityAndField = (serviceBaseUrl: string) => (
  token: string,
  entity: string,
  field: string
) => {
  const url = `${serviceBaseUrl}api/pickvalue/selectlistforentityandfield/${entity}/${field}`;

  return ajax<Array<Record<string, unknown>>>({ url, headers: { Authorization: `Bearer ${token}` }})
    .pipe(map(response => response.response))
    .pipe(catchApiError);
};

const selectByValueForEntityAndField = (serviceBaseUrl: string) => (
  token: string,
  entity: string,
  field: string
) => (value: number | string) => {
  const url = `${serviceBaseUrl}api/pickvalue/selectbyvalueforentityandfield/${entity}/${field}/${value}`;

  return ajax<Record<string, unknown>>({ url, headers: { Authorization: `Bearer ${token}` }})
    .pipe(map(response => response.response))
    .pipe(catchApiError);
};

/**
 * Create adapter for pickvalue fetch operations with ballware.meta.service
 * @param serviceBaseUrl Base URL to connect to ballware.meta.service
 * @returns Adapter object providing data operations
 */
export function createMetaBackendPickvalueApi(
  serviceBaseUrl: string
): MetaPickvalueApi {
  return {
    selectListForEntityAndField: selectListForEntityAndField(serviceBaseUrl),
    selectByValueForEntityAndField: selectByValueForEntityAndField(
      serviceBaseUrl
    ),
  } as MetaPickvalueApi;
}
