/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { MetaAttachmentApi } from '@ballware/meta-interface';
import { map, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchApiError } from './error';

const attachmentFetchFunc = (serviceBaseUrl: string) => (
  token: string,
  owner: string
) => {
  const url = `${serviceBaseUrl}api/file/all/${owner}`;

  return ajax<Array<Record<string, unknown>>>({ url, headers: { Authorization: `Bearer ${token}` }})    
    .pipe(map((response) => response.response))
    .pipe(catchApiError);
};

const attachmentUploadFunc = (serviceBaseUrl: string) => (
  token: string,
  owner: string,
  file: File
) => {
  const url = `${serviceBaseUrl}api/file/upload/${owner}`;

  const formData = new FormData();

  formData.append('files[]', file);

  return ajax<void>({ 
    url, 
    method: 'POST', 
    headers: { 
      Authorization: `Bearer ${token}`, 
      'Content-Type': 'multipart/form-data' 
    }, 
    body: formData })    
    .pipe(map((response) => response.response))
    .pipe(catchApiError);
};

const attachmentOpenFunc = (serviceBaseUrl: string) => (
  _token: string,
  owner: string,
  fileName: string
) => {
  const url = `${serviceBaseUrl}api/file/byname/${owner}?file=${encodeURIComponent(
    fileName
  )}`;

  return of(url);
};

const attachmentDeleteFunc = (serviceBaseUrl: string) => (
  token: string,
  owner: string,
  fileName: string
) => {
  const url = `${serviceBaseUrl}api/file/byname/${owner}?file=${encodeURIComponent(
    fileName
  )}`;

  return ajax<void>({ 
    url, 
    method: 'DELETE', 
    headers: { 
      Authorization: `Bearer ${token}` 
    }})    
    .pipe(map((response) => response.response))
    .pipe(catchApiError);
};

/**
 * Create adapter for attachment data operations with ballware.meta.service
 * @param serviceBaseUrl Base URL to connect to ballware.meta.service
 * @returns Adapter object providing data operations
 */
export function createMetaBackendAttachmentApi(
  serviceBaseUrl: string
): MetaAttachmentApi {
  return {
    queryByOwner: attachmentFetchFunc(serviceBaseUrl),
    upload: attachmentUploadFunc(serviceBaseUrl),
    open: attachmentOpenFunc(serviceBaseUrl),
    remove: attachmentDeleteFunc(serviceBaseUrl),
  } as MetaAttachmentApi;
}
