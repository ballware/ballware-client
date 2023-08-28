/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { MetaDocumentApi, DocumentSelectEntry } from '@ballware/meta-interface';
import { map, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchApiError } from './error';

const selectListPrintDocumentsForEntity = (metaServiceBaseUrl: string) => (
  token: string,
  entity: string
) => {
  const url = `${metaServiceBaseUrl}api/document/selectlistdocumentsforentity/${entity}`;

  return ajax<Array<DocumentSelectEntry>>({ url, headers: { Authorization: `Bearer ${token}` }})    
    .pipe(map((response) => response.response))
    .pipe(catchApiError);
};

const viewerUrl = (documentServiceBaseUrl: string) => (
  token: string,
  search: string
) => {
  const url = `${documentServiceBaseUrl}viewer?token=${encodeURIComponent(
    token
  )}&${search}`;

  return of(url);
};

/**
 * Create adapter for document data operations with ballware.meta.service
 * @param serviceBaseUrl Base URL to connect to ballware.meta.service
 * @returns Adapter object providing data operations
 */
export function createMetaBackendDocumentApi(
  metaServiceBaseUrl: string,
  documentServiceBaseUrl: string
): MetaDocumentApi {
  return {
    selectListPrintDocumentsForEntity: selectListPrintDocumentsForEntity(
      metaServiceBaseUrl
    ),
    viewerUrl: viewerUrl(documentServiceBaseUrl),
  } as MetaDocumentApi;
}
