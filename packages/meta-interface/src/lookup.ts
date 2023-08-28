/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { Observable } from 'rxjs';

/**
 * Interface for fetching lookups
 */
export interface MetaLookupApi {
  /**
   * Fetch list by lookup
   *
   * @param token Access token required for authentication
   * @param lookup Identifier of lookup definition
   * @returns Promise containing result list of lookup query
   */
  selectListForLookup: (
    token: string,
    lookup: string
  ) => Observable<Array<Record<string, unknown>>>;

  /**
   * Fetch single element by lookup and id
   *
   * @param token Access token required for authentication
   * @param lookup Id of lookup definition
   * @param id Id of lookup element
   * @returns Promise containing lookup element
   */
  selectByIdForLookup: (
    token: string,
    lookup: string
  ) => (id: string) => Observable<Record<string, unknown>>;

  /**
   * Fetch list by lookup identifier
   *
   * @param token Access token required for authentication
   * @param identifier Unique identifier of lookup definition
   * @returns Promise containing result list of lookup query
   */
  selectListForLookupIdentifier: (
    token: string,
    identifier: string
  ) => Observable<Array<Record<string, unknown>>>;

  /**
   * Fetch single element by lookup identifier and id
   *
   * @param token Access token required for authentication
   * @param identifier Unique identifier of lookup definition
   * @param id Id of lookup element
   * @returns Promise containing lookup element
   */
  selectByIdForLookupIdentifier: (
    token: string,
    identifier: string
  ) => (id: string) => Observable<Record<string, unknown>>;

  /**
   * Fetch list by lookup with param
   *
   * @param token Access token required for authentication
   * @param lookup Identifier of lookup definition
   * @param param Additional query param for lookup
   * @returns Promise containing result list of lookup query
   */
  selectListForLookupWithParam: (
    token: string,
    lookup: string,
    param: unknown
  ) => Observable<Array<Record<string, unknown>>>;

  /**
   * Fetch single element by lookup with param and id
   *
   * @param token Access token required for authentication
   * @param lookup Id of lookup definition
   * @param param Additional query param for lookup
   * @param id Id of lookup element
   * @returns Promise containing lookup element
   */
  selectByIdForLookupWithParam: (
    token: string,
    lookup: string,
    param: unknown
  ) => (id: string) => Observable<Record<string, unknown>>;

  /**
   * Fetch list of proposals for lookup
   *
   * @param token Access token required for authentication
   * @param lookup Id of lookup definition
   * @returns Promise containing proposals
   */
  autoCompleteForLookup: (
    token: string,
    lookup: string
  ) => Observable<Array<unknown>>;

  /**
   * Fetch list of proposals for lookup with param
   *
   * @param token Access token required for authentication
   * @param lookup Id of lookup definition
   * @param param Additional query param for lookup
   * @returns Promise containing proposals
   */
  autoCompleteForLookupWithParam: (
    token: string,
    lookup: string,
    param: unknown
  ) => Observable<Array<unknown>>;
}
