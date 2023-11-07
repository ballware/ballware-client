/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { PageToolbarItem } from '@ballware/meta-interface';
import { ToolbarItemRef } from '@ballware/react-renderer';

export interface ToolbarItemProps {
  toolbarItem: PageToolbarItem;
}

export interface ToolbarComponentWithOptions {
  /**
    * Gets the value of a single property.
    */
  option<TPropertyName extends string, TValue = unknown>(optionName: TPropertyName): TValue;
  /**
    * Updates the value of a single property.
    */
  option<TPropertyName extends string, TValue = unknown>(optionName: TPropertyName, optionValue: TValue): void;
}

export const componentToToolbarItemRef = (component: ToolbarComponentWithOptions) => {
  return {
    getOption: option => component.option(option),
    setOption: (option, value) => component.option(option, value),
  } as ToolbarItemRef;
};
