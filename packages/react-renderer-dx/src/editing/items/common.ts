/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { EditLayoutItemOptions } from '@ballware/meta-interface';
import { EditorRef } from '@ballware/react-renderer';

export interface EditItemProps {
  layoutItem: EditLayoutItemOptions;
}

export interface EditComponentWithOptions {
  /**
    * Gets the value of a single property.
    */
  option<TPropertyName extends string, TValue = unknown>(optionName: TPropertyName): TValue;
  /**
    * Updates the value of a single property.
    */
  option<TPropertyName extends string, TValue = unknown>(optionName: TPropertyName, optionValue: TValue): void;
}

export const componentToEditorRef = (component: EditComponentWithOptions) => {
  return {
    getOption: option => component.option(option),
    setOption: (option, value) => component.option(option, value),
  } as EditorRef;
};
