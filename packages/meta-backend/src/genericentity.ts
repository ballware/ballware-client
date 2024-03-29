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
import axios from 'axios';

const queryFunc = (baseUrl: string) => (
  token: string,
  query: string,
  params?: QueryParams
): Promise<Array<CrudItem>> => {
  const queryParams = params ? additionalParamsToUrl(params) : undefined;

  const url = queryParams
    ? `${baseUrl}/query?identifier=${encodeURIComponent(query)}${queryParams}`
    : `${baseUrl}/all?identifier=${encodeURIComponent(query)}`;

  return axios
    .get(url, { headers: { Authorization: `Bearer ${token}` } })
    .then(response => response.data);
};

const countFunc = (baseUrl: string) => (
  token: string,
  query: string,
  params?: QueryParams
): Promise<number> => {
  const queryParams = params ? additionalParamsToUrl(params) : undefined;

  const url = queryParams
    ? `${baseUrl}/count?identifier=${encodeURIComponent(query)}${queryParams}`
    : `${baseUrl}/count?identifier=${encodeURIComponent(query)}`;

  return axios
    .get<{ count: number }>(url, { headers: { Authorization: `Bearer ${token}` } })
    .then(response => response.data?.count);
};

const byIdFunc = (baseUrl: string) => (
  token: string,
  functionIdentifier: string,
  id: string
): Promise<CrudItem> => {
  const url = `${baseUrl}/byId?identifier=${encodeURIComponent(functionIdentifier)}&id=${encodeURIComponent(id)}`;

  return axios
    .get(url, { headers: { Authorization: `Bearer ${token}` } })
    .then(response => response.data);
};

const newFunc = (baseUrl: string) => (
  token: string,
  functionIdentifier: string,
  params?: QueryParams
): Promise<CrudItem> => {
  const queryParams = params ? additionalParamsToUrl(params) : undefined;

  const url = queryParams
    ? `${baseUrl}/newquery?identifier=${encodeURIComponent(functionIdentifier)}${queryParams}`
    : `${baseUrl}/new?identifier=${encodeURIComponent(functionIdentifier)}`;

  return axios
    .get(url, { headers: { Authorization: `Bearer ${token}` } })
    .then(response => response.data);
};

const saveFunc = (baseUrl: string) => (
  token: string,
  functionIdentifier: string,
  item: object
): Promise<void> => {
  const url = `${baseUrl}/save?identifier=${encodeURIComponent(functionIdentifier)}`;

  return axios.post(url, JSON.stringify(item), {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

const saveBatchFunc = (baseUrl: string) => (
  token: string,
  functionIdentifier: string,
  items: object[]
): Promise<void> => {
  const url = `${baseUrl}/savebatch?identifier=${encodeURIComponent(functionIdentifier)}`;

  return axios.post(url, JSON.stringify(items), {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

const removeFunc = (baseUrl: string) => (
  token: string,
  id: string
): Promise<void> => {
  const url = `${baseUrl}/remove/${id}`;
    
  return new Promise((resolve, reject) => {
    axios.delete(url, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => resolve())
      .catch((reason) => {
        // Reject reason in body
        reject(reason.response?.data ?? reason); 
      });
  });  
};

const importFunc = (baseUrl: string) => (
  token: string,
  functionIdentifier: string,
  file: File
): Promise<void> => {
  const url = `${baseUrl}/import?identifier=${encodeURIComponent(functionIdentifier)}`;

  const formData = new FormData();

  formData.append('files[]', file);

  return axios.post(url, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });
};

const exportFunc = (baseUrl: string) => (
  token: string,
  functionIdentifier: string,
  ids: string[]
): Promise<string> => {
  const url = `${baseUrl}/exporturl?identifier=${encodeURIComponent(functionIdentifier)}`;

  return axios.post<string>(url, `${ids.map(u => `id=${encodeURIComponent(u)}`).join('&')}`, {
    headers: {      
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,      
    },     
  }).then(response => `${baseUrl}/download?id=${encodeURIComponent(response.data)}`);
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
