/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { Observable } from 'rxjs';

/**
 * Select list entry of available document list for printing
 */
export interface DocumentSelectEntry {
  /**
   * Unique identifier of document
   */
  Id: string;

  /**
   * Display name of document
   */
  Name: string;
}

/**
 * Interface for document printing operations
 */
export interface MetaDocumentApi {
  /**
   * Fetch available print documents for business object type
   *
   * @param token Access token required for authentication
   * @param entity Identifier for business object type
   * @returns Promise containing available print documents for entity
   */
  selectListPrintDocumentsForEntity: (
    token: string,
    entity: string
  ) => Observable<Array<DocumentSelectEntry>>;

  /**
   * Generate viewer url for document
   *
   * @param token Access token required for authentication
   * @param search Query expression for generating document
   * @returns Promise containing url for rendering document
   */
  viewerUrl: (token: string, search: string) => Observable<string>;
}
