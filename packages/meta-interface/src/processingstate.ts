/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { Observable } from 'rxjs';

/**
 * Interface for processing state operations
 */
export interface MetaProcessingstateApi {
  /**
   * Fetch select list containing all possible states for business object
   *
   * @param token Access token required for authentication
   * @param entity Identifier of business object type
   * @returns Promise containing list of available processing states
   */
  selectListForEntity: (
    token: string,
    entity: string
  ) => Observable<Array<Record<string, unknown>>>;

  /**
   * Fetch select list containing all allowed states for business object ids
   *
   * @param token Access token required for authentication
   * @param entity Identifier of business object type
   * @param ids Collection of ids to check
   * @returns Promise containing list of allowed processing states
   */
  selectListAllowedForEntityAndIds: (
    token: string,
    entity: string,
    ids: Array<string>
  ) => Observable<Array<Record<string, unknown>>>;

  /**
   * Fetch single processing state by state number
   *
   * @param token Access token required for authentication
   * @param entity Identifier of business object type
   * @param state Unique state number
   * @returns Promise containing processing state data
   */
  selectByStateForEntity: (
    token: string,
    entity: string
  ) => (state: number | string) => Observable<Record<string, unknown>>;
}
