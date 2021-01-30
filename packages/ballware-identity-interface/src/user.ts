/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

/**
 * Functions for accessing user information from identity provider
 */
export interface IdentityUserApi {
  /**
   * Returning a list of available users in identity system
   * 
   * @param token - access token required for authentication
   * @returns Promise resolving list of available user with id and display text
   */
  selectListFunc: (token: string) => Promise<Array<Record<string, unknown>>>;

  /**
   * Returns a single existing user by identifier from identity system
   * 
   * @param token - access token required for authentication
   * @returns Promise resoling single element with id and display text for requested identifier
   */  
  selectByIdFunc: (token: string, identifier: string) => Promise<Record<string, unknown>>;
}
