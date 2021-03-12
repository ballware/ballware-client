/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { createContext } from 'react';
import {
  EditUtil,
  ValueType,
  PageLayout,
  QueryParams,
} from '@ballware/meta-interface';

/**
 * Context for page layout functionality
 */
export interface PageContextState {
  /**
   * Current provided page layout
   */
  layout?: PageLayout;

  /**
   * Page param provided by param editors or url
   */
  pageParam?: QueryParams;

  /**
   * Custom param provided by custom page scripts
   */
  customParam?: Record<string, unknown>;

  /**
   * Documentation text provided for display
   */
  documentation?: string | undefined;

  /**
   * Load documentation for documentation identifier
   */
  loadDocumentation?: (identifier: string) => void;

  /**
   * Hide documentation for display
   */
  resetDocumentation?: () => void;

  /**
   * All parameter editors initialized
   * @param hidden True if parameter editor display is hidden because of media limitations
   */
  paramsInitialized?: (hidden: boolean) => void;

  /**
   * Parameter editor for identifier is inizialized (and displayed)
   * @param identifier Identifier of parameter editor
   * @param editUtil Adaptor for access to parameter editor instances
   */
  paramEditorInitialized?: (identifier: string, editUtil: EditUtil) => void;

  /**
   * Parameter editor value changed
   * @param identifier Identifier of parameter editor
   * @param value Current value of parameter editor
   * @param editUtil Adapter for access to parameter editor instances
   */
  paramEditorValueChanged?: (
    name: string,
    value: ValueType,
    editUtil: EditUtil
  ) => void;

  /**
   * Parameter editor event triggered
   * @param identifier Identifier of parameter editor
   * @param event Specific identifier of event
   * @param editUtil Adapter for access to parameter editor instances
   * @param param Optional event specific parameter
   */
  paramEditorEvent?: (
    name: string,
    event: string,
    editUtil: EditUtil,
    param?: ValueType
  ) => void;
}

export const PageContext = createContext({} as PageContextState);
