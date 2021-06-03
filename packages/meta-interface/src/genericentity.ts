/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { QueryParams } from './common';
import { CrudItem } from './cruditem';

/**
 * Interface for generic business object crud operations
 */
export interface MetaGenericEntityApi {
  /**
   * Query list of business objects by search params
   *
   * @param token Access token required for authentication
   * @param query Identifier of list query
   * @param params Parameter values for query
   * @returns Promise containing list of resulting business objects
   */
  query: (
    token: string,
    query: string,
    params?: QueryParams
  ) => Promise<Array<CrudItem>>;

  /**
   * Query count of business objects by search params
   *
   * @param token Access token required for authentication
   * @param query Identifier of list query
   * @param params Parameter values for query
   * @returns Promise containing count of resulting business objects
   */
   count: (
    token: string,
    query: string,
    params?: QueryParams
  ) => Promise<number>;

  /**
   * Fetch single business object by id
   *
   * @param token Access token required for authentication
   * @param functionIdentifier Identifier of edit function
   * @param id Id of business object
   * @returns Promise containing instance of business object
   */
  byId: (token: string, functionIdentifier: string, id: string) => Promise<CrudItem>;

  /**
   * Fetch prepared new instance of business object
   *
   * @param token Access token required for authentication
   * @param functionIdentifier Identifier of edit function
   * @param params Parameter values for initialization of business object
   * @returns Promise containing new generated instance of business object
   */
  new: (token: string, functionIdentifier: string, params?: QueryParams) => Promise<CrudItem>;

  /**
   * Save modified instance of business object
   *
   * @param token Access token required for authentication
   * @param functionIdentifier Identifier of edit function
   * @param item Modified instance of business object
   * @returns Promise resolved when save operation has finished
   */
  save: (token: string, functionIdentifier: string, item: CrudItem) => Promise<void>;

  /**
   * Save multiple modified instances of business object
   *
   * @param token Access token required for authentication
   * @param functionIdentifier Identifier of edit function
   * @param items Modified instances of business object
   * @returns Promise resolved when save operation has finished
   */
  saveBatch: (token: string, functionIdentifier: string, items: CrudItem[]) => Promise<void>;

  /**
   * Drop existing instance of business object
   *
   * @param token Access token required for authentication
   * @param id Identifier of business object instance to drop
   * @returns Promise resolved when drop operation has finished
   */
  drop: (token: string, id: string) => Promise<void>;

  /**
   * Import business objects from uploaded file
   * 
   * @param token Access token required for authentication
   * @param functionIdentifier Identifier of import function
   * @param file Uploaded file containing objects to import
   * @returns Promise resolved when drop operation has finished
   */
  importItems: (token: string, functionIdentifier: string, file: File) => Promise<void>;

  /**
   * Export business objects to download file
   * 
   * @param token Access token required for authentication
   * @param functionIdentifier Identifier of import function
   * @param ids Selected object ids to export
   * @returns Promise resolved when download is ready, containing download url 
   */
  exportItems: (token: string, functionIdentifier: string, ids: string[]) => Promise<string>;
}
