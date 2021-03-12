/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { createContext } from 'react';

/**
 * Context for attachment files functionality
 */
export interface AttachmentContextState {
  /**
   * Fetch available attachments by owner id
   * @param id Owner id of attachments
   * @returns Promise resolving available attachment metadata
   */
  fetch?: (id: string) => Promise<Array<Record<string, unknown>>>;

  /**
   * Upload new attachment
   * @param id Owner id
   * @param file Attachment file
   * @returns Promise resolving when upload has completed
   */
  upload?: (id: string, file: File) => Promise<void>;

  /**
   * Request download url for attachment
   * @param id Owner id
   * @param fileName Attachment file name from metadata
   * @returns Promise resolving Url for download attachment file
   */
  open?: (id: string, fileName: string) => Promise<string>;

  /**
   * Drop existing attachment
   * @param id Owner id
   * @param fileName Attachment file name from metadata
   * @returns Promise resolving when drop has completed
   */
  drop?: (id: string, fileName: string) => Promise<void>;
}

export const AttachmentContext = createContext({} as AttachmentContextState);
