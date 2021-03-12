/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { Rights } from './rights';

/**
 * Navigation tree item
 */
export interface NavigationLayoutItem {
  /**
   * Type of navigation item
   */
  type: 'page' | 'group' | 'section';

  /**
   * Options
   */
  options: {
    /**
     * Page identifier if item type is 'page'
     */
    page?: string;

    /**
     * Optional url for external page not part of application
     */
    url?: string;

    /**
     * Caption for navigation item type 'page' and 'group'
     */
    caption?: string;
  };

  /**
   * Collection of child items (only for 'group' and 'section')
   */
  items?: Array<NavigationLayoutItem>;
}

/**
 * Navigation layout for single tenant
 */
export interface NavigationLayout {
  /**
   * Headline for tenant application
   */
  title: string;

  /**
   * Default page activated on tenant entered
   */
  defaultUrl?: string;

  /**
   * Collection of layout items
   */
  items: Array<NavigationLayoutItem>;
}

/**
 * Metadata for tenant
 */
export interface CompiledTenant {
  /**
   * Unique identifier of tenant
   */
  id: string;

  /**
   * Display name of tenant
   */
  name: string;

  /**
   * Navigation metadata for tenant
   */
  navigation?: NavigationLayout;

  /**
   * Custom script for access rights check of pages
   * @param rights Assigned user rights
   * @param page Page identifier
   * @returns true if access allowed, false if access denied
   */
  pageVisible: (rights: Rights, page: string) => boolean;
}

/**
 * Interface for tenant data operations
 */
export interface MetaTenantApi {
  /**
   * Fetch metadatan for tenant
   * @param token Access token required for authentication
   * @param tenant Identifier of tenant
   * @returns Promise containing compiled tenant metadata
   */
  metadataForTenant: (token: string, tenant: string) => Promise<CompiledTenant>;
}
