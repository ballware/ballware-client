/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { Observable } from 'rxjs';

/**
 * Interface for owner specific attachments operations
 */
export interface MetaAttachmentApi {
  /**
   * Query list of attachments by owner
   *
   * @param token - Access token required for authentication
   * @param owner - Identifier for owner
   * @returns Promise with list of attachment metadata belonging to owner
   */
  queryByOwner: (
    token: string,
    owner: string
  ) => Observable<Array<Record<string, unknown>>>;

  /**
   * Upload new attachment
   *
   * @param token - Access token required for authentication
   * @param owner - Identifier for owner
   * @param file - Uploaded file
   * @returns Promise resolved when upload finished
   */
  upload: (token: string, owner: string, file: File) => Observable<void>;

  /**
   * Fetch file url for display/download
   *
   * @param token - Access token required for authentication
   * @param owner - Identifier for owner
   * @param fileName - File name from metadata
   * @returns Promise with URL for download of file
   */
  open: (token: string, owner: string, fileName: string) => Observable<string>;

  /**
   * Remove existing attachment
   *
   * @param token - Access token required for authentication
   * @param owner - Identifier for owner
   * @param fileName - File name from metadata
   * @returns Promise resolved when remove operation finished
   */
  remove: (token: string, owner: string, fileName: string) => Observable<void>;
}
