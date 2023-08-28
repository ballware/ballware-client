/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { MetaLookupApi } from '@ballware/meta-interface';
import { map } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchApiError } from './error';

const selectListForLookupFunc = (serviceBaseUrl: string) => (
  token: string,
  lookupId: string
) => {
  const url = `${serviceBaseUrl}api/lookup/selectlistforlookup/${lookupId}`;

  return ajax<Array<Record<string, unknown>>>({ url, headers: { Authorization: `Bearer ${token}` }})    
    .pipe(map((response) => response.response))
    .pipe(catchApiError);
};

const selectByIdForLookupFunc = (serviceBaseUrl: string) => (
  token: string,
  lookupId: string
) => (id: string) => {
  const url = `${serviceBaseUrl}api/lookup/selectbyidforlookup/${lookupId}/${id}`;

  return ajax<Record<string, unknown>>({ url, headers: { Authorization: `Bearer ${token}` }})    
    .pipe(map((response) => response.response))
    .pipe(catchApiError);
};

const selectListForLookupIdentifierFunc = (serviceBaseUrl: string) => (
  token: string,
  identifier: string
) => {
  const url = `${serviceBaseUrl}api/lookup/selectlistforlookupidentifier/${identifier}`;

  return ajax<Array<Record<string, unknown>>>({ url, headers: { Authorization: `Bearer ${token}` }})    
    .pipe(map((response) => response.response))
    .pipe(catchApiError);
};

const selectByIdForLookupIdentifierFunc = (serviceBaseUrl: string) => (
  token: string,
  identifier: string
) => (id: string) => {
  const url = `${serviceBaseUrl}api/lookup/selectbyidforlookupidentifier/${identifier}/${id}`;

  return ajax<Record<string, unknown>>({ url, headers: { Authorization: `Bearer ${token}` }})    
    .pipe(map((response) => response.response))
    .pipe(catchApiError);
};

const selectListForLookupWithParamFunc = (serviceBaseUrl: string) => (
  token: string,
  lookupId: string,
  param: unknown
) => {
  const url = `${serviceBaseUrl}api/lookup/selectlistforlookupwithparam/${lookupId}/${param}`;

  return ajax<Array<Record<string, unknown>>>({ url, headers: { Authorization: `Bearer ${token}` }})    
    .pipe(map((response) => response.response))
    .pipe(catchApiError);
};

const selectByIdForLookupWithParamFunc = (serviceBaseUrl: string) => (
  token: string,
  lookupId: string,
  param: unknown
) => (id: string) => {
  const url = `${serviceBaseUrl}api/lookup/selectbyidforlookupwithparam/${lookupId}/${param}/${id}`;

  return ajax<Record<string, unknown>>({ url, headers: { Authorization: `Bearer ${token}` }})    
    .pipe(map((response) => response.response))
    .pipe(catchApiError);
};

const autoCompleteForLookupFunc = (serviceBaseUrl: string) => (
  token: string,
  lookupId: string
) => {
  const url = `${serviceBaseUrl}api/lookup/autocompleteforlookup/${lookupId}`;

  return ajax<Array<unknown>>({ url, headers: { Authorization: `Bearer ${token}` }})    
    .pipe(map((response) => response.response))
    .pipe(catchApiError);
};

const autoCompleteForLookupWithParamFunc = (serviceBaseUrl: string) => (
  token: string,
  lookupId: string,
  param: unknown
) => {
  const url = `${serviceBaseUrl}api/lookup/autocompleteforlookupwithparam/${lookupId}/${param}`;

  return ajax<Array<unknown>>({ url, headers: { Authorization: `Bearer ${token}` }})    
    .pipe(map((response) => response.response))
    .pipe(catchApiError);
};

/**
 * Create adapter for lookup fetch operations with ballware.meta.service
 * @param serviceBaseUrl Base URL to connect to ballware.meta.service
 * @returns Adapter object providing data operations
 */
export function createMetaBackendLookupApi(
  serviceBaseUrl: string
): MetaLookupApi {
  return {
    selectListForLookup: selectListForLookupFunc(serviceBaseUrl),
    selectByIdForLookup: selectByIdForLookupFunc(serviceBaseUrl),
    selectListForLookupIdentifier: selectListForLookupIdentifierFunc(
      serviceBaseUrl
    ),
    selectByIdForLookupIdentifier: selectByIdForLookupIdentifierFunc(
      serviceBaseUrl
    ),
    selectListForLookupWithParam: selectListForLookupWithParamFunc(
      serviceBaseUrl
    ),
    selectByIdForLookupWithParam: selectByIdForLookupWithParamFunc(
      serviceBaseUrl
    ),
    autoCompleteForLookup: autoCompleteForLookupFunc(serviceBaseUrl),
    autoCompleteForLookupWithParam: autoCompleteForLookupWithParamFunc(
      serviceBaseUrl
    ),
  } as MetaLookupApi;
}
