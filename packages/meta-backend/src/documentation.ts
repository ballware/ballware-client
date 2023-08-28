/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { MetaDocumentationApi } from '@ballware/meta-interface';
import { map } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchApiError } from './error';

const loadDocumentationForEntity = (metaServiceBaseUrl: string) => (
  token: string,
  entity: string
) => {
  const url = `${metaServiceBaseUrl}api/documentation/documentationforentity/${entity}`;

  return ajax<Array<Record<string, unknown>>>({ url, headers: { Authorization: `Bearer ${token}` }})    
    .pipe(map((response) => response.response))
    .pipe(catchApiError);
};

/**
 * Create adapter for documentation data operations with ballware.meta.service
 * @param serviceBaseUrl Base URL to connect to ballware.meta.service
 * @returns Adapter object providing data operations
 */
export function createMetaBackendDocumentationApi(
  metaServiceBaseUrl: string
): MetaDocumentationApi {
  return {
    loadDocumentationForEntity: loadDocumentationForEntity(metaServiceBaseUrl),
  } as MetaDocumentationApi;
}
