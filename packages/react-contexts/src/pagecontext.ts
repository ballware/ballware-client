/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { createContext } from 'react';
import {
  PageLayout,
  QueryParams,
  CompiledPageCustomScripts,
  ScriptActions,
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
   * Custom scripts attached to page
   */
  customScripts?: CompiledPageCustomScripts;

  scriptActions?: ScriptActions;

  /**
   * Load documentation for documentation identifier
   */
  loadDocumentation?: (identifier: string) => void;

  /**
   * Hide documentation for display
   */
  resetDocumentation?: () => void;

  
}

export const PageContext = createContext({} as PageContextState);
