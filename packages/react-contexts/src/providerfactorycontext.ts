/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { createContext, PropsWithChildren } from 'react';
import { CrudItem, ValueType, EditLayout, EntityCustomFunction } from '@ballware/meta-interface';

import { EditModes } from './editcontext';

/**
 * Context for instantiating context provider
 */
export interface ProviderFactoryContextState {
  /**
   * Instantiate page provider
   */
  PageProvider?: (
    props: PropsWithChildren<{ identifier: string }>
  ) => JSX.Element;

  /**
   * Instantiate generic entity metadata provider
   */
  MetaProvider?: (
    props: PropsWithChildren<{
      entity: string;
      readOnly: boolean;
      headParams: Record<string, unknown>;
      initialCustomParam: Record<string, unknown>;
    }>
  ) => JSX.Element;

  /**
   * Instanticate crud provider
   */
  CrudProvider?: (
    props: PropsWithChildren<{
      query: string | undefined;
      initialFetchParams: Record<string, unknown> | undefined;
      identifier: string | undefined;
    }>
  ) => JSX.Element;

  /**
   * Instantiate tenant provider
   */
  TenantProvider?: (props: PropsWithChildren<{}>) => JSX.Element;

  /**
   * Instantiate item edit provider
   */
  EditProvider?: (
    props: PropsWithChildren<{
      mode: EditModes;
      editLayout: EditLayout | undefined;
      item: CrudItem | Array<CrudItem> | ValueType;
      editFunction: EntityCustomFunction | undefined;
    }>
  ) => JSX.Element;

  /**
   * Instantiate statistic provider
   */
  StatisticProvider?: (
    props: PropsWithChildren<{
      identifier: string;
      params: Record<string, unknown> | undefined;
    }>
  ) => JSX.Element;
}

export const ProviderFactoryContext = createContext<
  ProviderFactoryContextState
>({} as ProviderFactoryContextState);
