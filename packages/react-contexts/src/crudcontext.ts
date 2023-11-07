/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { createContext } from 'react';
import {
  CrudItem,
  EntityCustomFunction,
} from '@ballware/meta-interface';

/**
 * Context for providing crud operations based parent meta entity context
 */
export interface CrudContextState {
  /**
   * Currently fetching items
   */
  isLoading?: boolean;

  /**
   * Fetched items from data provider
   */
  fetchedItems?: Array<CrudItem>;

  /**
   * Count of items to be fetched
   */
  fetchItemCount?: number;

  /**
   * Current item for crud operations
   */
  item?: CrudItem;

  /**
   * Viewing current item
   */
  viewing?: boolean;

  /**
   * Adding current item
   */
  adding?: boolean;

  /**
   * Editing current item
   */
  editing?: boolean;

  /**
   * Deleting current item
   */
  deleteing?: boolean;

  /**
   * Custom edit operation active
   */
  customEditing?: boolean;

  /**
   * Function for current custom edit operation
   */
  customEditFunction?: EntityCustomFunction;

  /**
   * Title displayed in custom edit operation
   */
  customEditTitle?: string;

  /**
   * Prepared edit param for custom edit operation
   */
  customEditParam?: unknown;

  /**
   * Edit layout for current edit operation
   */
  editLayout?: string;

  /**
   * Importing file
   */
  importing?: boolean;

  /**
   * Exporting items
   */
  exporting?: boolean;

  /**
   * Refresh after edit operation pending
   */
  refreshing?: boolean;

  /**
   * Fetch items
   */
  load?: () => void;

  /**
   * Count items to be fetched
   */
  count?: () => void;

  /**
   * Add new item
   * @param editLayout Edit layout to use for add operation
   */
  add?: (editLayout: string) => void;

  /**
   * View item
   * @param id Identifier of item
   * @param editLayout Edit layout to use for view operation
   */
  view?: (id: string, editLayout: string) => void;

  /**
   * Edit item
   * @param id Identifier of item
   * @param editLayout Edit layout to use for edit operation
   */
  edit?: (id: string, editLayout: string) => void;

  /**
   * Cancel/close edit operation
   */
  close?: () => void;

  /**
   * Request remove item
   * @param id Identifier of item
   */
  remove?: (id: string) => void;

  /**
   * Save changed/added item
   * @param item Edited item
   * @param customFunction Custom edit function
   */
  save?: (item: CrudItem, customFunction: EntityCustomFunction) => void;

  /**
   * Save changed/added multiple items
   * @param items Edited items
   * @param customFunction Custom edit function
   */
  saveBatch?: (items: CrudItem[], customFunction: EntityCustomFunction) => void;

  /**
   * Drop item
   * @param id Identifier of item to be dropped
   */
  drop?: (id: string) => void;

  /**
   * Execute custom edit operation
   * @param customFunction Selected custom function
   * @param items Selected items for edit operation (undefined if function type is 'add')
   */
  customEdit?: (
    customFunction: EntityCustomFunction,
    items?: Array<CrudItem>
  ) => void;

  /**
   * Export items
   * @param customFunction Selected export function
   * @param items Selected items for export
   * @returns Promise resolved with url to exported file
   */
  exportItems?: (
    customFunction: EntityCustomFunction,
    items?: Array<CrudItem>
  ) => Promise<string>;

  /**
   * Import items
   * @param customFunction Selected import function   
   */
   importItems?: (
    customFunction: EntityCustomFunction
  ) => void;

  /**
   * Import file containing items with selected import function
   * @param customFunction Selected import function 
   * @param file Uploaded file to import
   * @returns Promise resolved when import completed
   */
   importFile?: (
    customFunction: EntityCustomFunction,
    file: File
  ) => Promise<void>;
}

export const CrudContext = createContext({} as CrudContextState);
