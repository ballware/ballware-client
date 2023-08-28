/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { Observable } from 'rxjs';

/**
 * Functions for accessing role information from identity provider
 */
export interface IdentityRoleApi {
  /**
   * Returning a list of available roles in identity system
   *
   * @param token - access token required for authentication
   * @returns Promise resolving list of available roles with id and display text
   */
  selectListFunc: (token: string) => Observable<Array<Record<string, unknown>>>;

  /**
   * Returns a single existing role by identifier from identity system
   *
   * @param token - access token required for authentication
   * @returns Promise resoling single element with id and display text for requested identifier
   */
  selectByIdFunc: (
    token: string,
    identifier: string
  ) => Observable<Record<string, unknown>>;
}
