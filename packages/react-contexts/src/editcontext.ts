/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { createContext } from 'react';
import { CrudItem, ValueType, EditLayout } from '@ballware/meta-interface';

/**
 * Default edit modes for items
 */
export enum EditModes {
  /**
   * View item in detail view (readonly)
   */
  VIEW = 'VIEW',

  /**
   * Edit item in detail view
   */
  EDIT = 'EDIT',

  /**
   * Edit new created item in detail view
   */
  CREATE = 'CREATE',
}

/**
 * Context for functionality to edit a specific item
 */
export interface EditContextState {
  /**
   * Current editing mode
   */
  mode?: EditModes;

  /**
   * Edit layout for rendering form
   */
  editLayout?: EditLayout;

  /**
   * Edited item
   */
  item?: CrudItem | Array<CrudItem> | ValueType;

  /**
   * Function identifier when editing with custom function
   */
  functionIdentifier?: string;

  /**
   * Replacing edited item
   */
  setItem?: (item: CrudItem | ValueType) => void;
}

export const EditContext = createContext({} as EditContextState);
