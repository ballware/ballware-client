/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

/**
 * Possible value types for business object properties
 */
export type ValueType =
  | undefined
  | Record<string, unknown>
  | string
  | number
  | boolean
  | Date
  | Array<string | number | Record<string, unknown>>
  | { lat: number; lng: number };

/**
 * Interface for generic business object types
 */
export interface CrudItem extends Record<string, ValueType> {
  /**
   * Unique identifier of object
   */
  Id: string;

  /**
   * Identifier of creating user
   */
  CreatorId?: string;

  /**
   * Timestamp of creation time
   */
  CreateStamp?: Date;

  /**
   * Identifier of last updating user
   */
  LastChangerId?: string;

  /**
   * Timestamp of last update
   */
  LastChangeStamp?: Date;
}
