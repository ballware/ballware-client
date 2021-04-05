/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { QueryParams } from '@ballware/meta-interface';

/**
 * Convert param object to additional url parameter
 * @param params Object containing url parameter
 * @returns Url encoded string containing parameter
 */
export function additionalParamsToUrl(params: QueryParams) {
  let result = '';

  if (params) {
    Object.keys(params).forEach(k => {
      const val = params[k];

      if (val instanceof Array) {
        val.forEach(
          v => (result += `&${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
        );
      } else {
        result += `&${encodeURIComponent(k)}=${encodeURIComponent(val)}`;
      }
    });
  }

  return result;
}
