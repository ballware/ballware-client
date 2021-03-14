/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { createContext } from 'react';
import { QueryParams, StatisticLayout } from '@ballware/meta-interface';

/**
 * Context for providing statistic item metadata and data
 */
export interface StatisticContextState {
  /**
   * Unique identifier of statistic item
   */
  identifier?: string;

  /**
   * Display name of statistic item
   */
  name?: string;

  /***
   * Additional query params from containing element (page for example)
   */
  params?: QueryParams;

  /**
   * Layout for displaying statistic item
   */
  layout?: StatisticLayout;

  /**
   * Fetched data for statistic
   */
  data?: Array<Record<string, unknown>>;

  /**
   * Customize display text for argument axis labels
   * @param value Argument value
   * @returns Modified display text, if applicable
   */
  argumentAxisCustomizeText?: (value: unknown) => string | undefined;
}

export const StatisticContext = createContext({} as StatisticContextState);
