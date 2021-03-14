/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

/**
 * Generic data container type containing parameter values for data queries
 */
export type QueryParams = Record<
  string,
  string | number | boolean | Array<string | number | boolean>
>;
