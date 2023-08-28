/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import {
  MetaGenericEntityApi,
  CrudItem,
  QueryParams,
} from '@ballware/meta-interface';
import { additionalParamsToUrl } from './util';
import { map } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchApiError } from './error';

const queryFunc = (baseUrl: string) => (
  token: string,
  query: string,
  params?: QueryParams
) => {
  const queryParams = params ? additionalParamsToUrl(params) : undefined;

  const url = queryParams
    ? `${baseUrl}/query?identifier=${encodeURIComponent(query)}${queryParams}`
    : `${baseUrl}/all?identifier=${encodeURIComponent(query)}`;

  return ajax<Array<CrudItem>>({ url, headers: { Authorization: `Bearer ${token}` }})    
    .pipe(map((response) => response.response))
    .pipe(catchApiError);
};

const countFunc = (baseUrl: string) => (
  token: string,
  query: string,
  params?: QueryParams
) => {
  const queryParams = params ? additionalParamsToUrl(params) : undefined;

  const url = queryParams
    ? `${baseUrl}/count?identifier=${encodeURIComponent(query)}${queryParams}`
    : `${baseUrl}/count?identifier=${encodeURIComponent(query)}`;

  return ajax<{ count: number }>({ url, headers: { Authorization: `Bearer ${token}` }})    
    .pipe(map((response) => response.response?.count))
    .pipe(catchApiError);
};

const byIdFunc = (baseUrl: string) => (
  token: string,
  functionIdentifier: string,
  id: string
) => {
  const url = `${baseUrl}/byId?identifier=${encodeURIComponent(functionIdentifier)}&id=${encodeURIComponent(id)}`;

  return ajax<CrudItem>({ url, headers: { Authorization: `Bearer ${token}` }})    
    .pipe(map((response) => response.response))
    .pipe(catchApiError);
};

const newFunc = (baseUrl: string) => (
  token: string,
  functionIdentifier: string,
  params?: QueryParams
) => {
  const queryParams = params ? additionalParamsToUrl(params) : undefined;

  const url = queryParams
    ? `${baseUrl}/newquery?identifier=${encodeURIComponent(functionIdentifier)}${queryParams}`
    : `${baseUrl}/new?identifier=${encodeURIComponent(functionIdentifier)}`;

  return ajax<CrudItem>({ url, headers: { Authorization: `Bearer ${token}` }})    
    .pipe(map((response) => response.response))
    .pipe(catchApiError);  
};

const saveFunc = (baseUrl: string) => (
  token: string,
  functionIdentifier: string,
  item: object
) => {
  const url = `${baseUrl}/save?identifier=${encodeURIComponent(functionIdentifier)}`;

  return ajax<void>({ 
      url, 
      method: 'POST',
      headers: { 
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })    
    .pipe(map((response) => response.response))
    .pipe(catchApiError);  
};

const saveBatchFunc = (baseUrl: string) => (
  token: string,
  functionIdentifier: string,
  items: object[]
) => {
  const url = `${baseUrl}/savebatch?identifier=${encodeURIComponent(functionIdentifier)}`;

  return ajax<void>({ 
      url, 
      method: 'POST',
      headers: { 
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(items)
    })    
    .pipe(map((response) => response.response))
    .pipe(catchApiError);  
};

const removeFunc = (baseUrl: string) => (
  token: string,
  id: string
) => {
  const url = `${baseUrl}/remove/${id}`;
  
  return ajax<void>({ 
      url, 
      method: 'DELETE',
      headers: { 
        Authorization: `Bearer ${token}`
      }
    })    
    .pipe(map((response) => response.response))
    .pipe(catchApiError);  
};

const importFunc = (baseUrl: string) => (
  token: string,
  functionIdentifier: string,
  file: File
) => {
  const url = `${baseUrl}/import?identifier=${encodeURIComponent(functionIdentifier)}`;

  const formData = new FormData();

  formData.append('files[]', file);

  return ajax<void>({ 
      url, 
      method: 'POST',
      headers: { 
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      body: formData
    })    
    .pipe(map((response) => response.response))
    .pipe(catchApiError);  
};

const exportFunc = (baseUrl: string) => (
  token: string,
  functionIdentifier: string,
  ids: string[]
) => {
  const url = `${baseUrl}/exporturl?identifier=${encodeURIComponent(functionIdentifier)}`;

  return ajax<string>({ 
      url, 
      method: 'POST',
      headers: { 
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `${ids.map(u => `id=${encodeURIComponent(u)}`).join('&')}`
    })    
    .pipe(map((response) => `${baseUrl}/download?id=${encodeURIComponent(response.response)}`))
    .pipe(catchApiError);  
};


/**
 * Create adapter for generic entity data operations with ballware.meta.service
 * @param serviceBaseUrl Base URL to connect to ballware.meta.service
 * @returns Adapter object providing data operations
 */
export function createMetaBackendGenericEntityApi(
  entityBaseUrl: string
): MetaGenericEntityApi {
  return {
    query: queryFunc(entityBaseUrl),
    count: countFunc(entityBaseUrl),
    byId: byIdFunc(entityBaseUrl),
    new: newFunc(entityBaseUrl),
    save: saveFunc(entityBaseUrl),
    saveBatch: saveBatchFunc(entityBaseUrl),
    drop: removeFunc(entityBaseUrl),
    exportItems: exportFunc(entityBaseUrl),
    importItems: importFunc(entityBaseUrl)
  } as MetaGenericEntityApi;
}
