/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { createContext } from 'react';
import {
  NavigationLayout,
  NavigationLayoutItem,
} from '@ballware/meta-interface';

/**
 * Context for providing tenant metadata
 */
export interface TenantContextState {
  /**
   * Unique name of tenant
   */
  name?: string;

  /**
   * Navigation layout metadata for tenant
   */
  navigation?: NavigationLayout;

  /**
   * List of pages for tenant
   */
  pages?: Array<NavigationLayoutItem>;

  /**
   * Check if access to page is allowed for current user
   * @param page Unique identifier of page
   * @returns true if access is allowed
   */
  pageAllowed?: (page: string) => boolean;
}

export const TenantContext = createContext({} as TenantContextState);
