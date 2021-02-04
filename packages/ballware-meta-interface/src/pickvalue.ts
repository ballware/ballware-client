/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

/**
 * Interface for pickvalue operations
 */
export interface MetaPickvalueApi {
  /**
   * Fetch select list for business object property possible values
   *
   * @param token Access token required for authentication
   * @param entity Business object identifier
   * @param field Business object property
   * @returns Promise containing collection of possible property values
   */
  selectListForEntityAndField: (
    token: string,
    entity: string,
    field: string
  ) => Promise<Array<Record<string, unknown>>>;

  /**
   * Fetch single select list element for business object property
   *
   * @param token Access token required for authentication
   * @param entity Business object identifier
   * @param field Business object property
   * @param value Value requesting select list element
   * @returns Promise containing single property value
   */
  selectByValueForEntityAndField: (
    token: string,
    entity: string,
    field: string
  ) => (value: number | string) => Promise<Record<string, unknown>>;
}
