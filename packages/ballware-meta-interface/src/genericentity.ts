/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

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
    params?: Record<string, unknown>
  ) => Promise<Array<CrudItem>>;

  /**
   * Fetch single business object by id
   *
   * @param token Access token required for authentication
   * @param id Id of business object
   * @returns Promise containing instance of business object
   */
  byId: (token: string, id: string) => Promise<CrudItem>;

  /**
   * Fetch prepared new instance of business object
   *
   * @param token Access token required for authentication
   * @param params Parameter values for initialization of business object
   * @returns Promise containing new generated instance of business object
   */
  new: (token: string, params?: Record<string, unknown>) => Promise<CrudItem>;

  /**
   * Save modified instance of business object
   *
   * @param token Access token required for authentication
   * @param item Modified instance of business object
   * @returns Promise resolved when save operation has finished
   */
  save: (token: string, item: CrudItem) => Promise<void>;

  /**
   * Save multiple modified instances of business object
   *
   * @param token Access token required for authentication
   * @param items Modified instances of business object
   * @returns Promise resolved when save operation has finished
   */
  saveBatch: (token: string, items: CrudItem[]) => Promise<void>;

  /**
   * Drop existing instance of business object
   *
   * @param token Access token required for authentication
   * @param id Identifier of business object instance to drop
   * @returns Promise resolved when drop operation has finished
   */
  drop: (token: string, id: string) => Promise<void>;
}
