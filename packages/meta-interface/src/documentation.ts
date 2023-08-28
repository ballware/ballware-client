/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { Observable } from 'rxjs';

/**
 * Interface for documentation viewer operations
 */
export interface MetaDocumentationApi {
  /**
   * Fetch documentation for business object type
   *
   * @param token Access token required for authentication
   * @param entity Requested business object type
   * @returns Promise containing rich text for rendering documentation
   */
  loadDocumentationForEntity: (
    token: string,
    entity: string
  ) => Observable<unknown>;
}
