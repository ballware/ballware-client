/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { EditLayoutItemOptions } from '@ballware/meta-interface';
import { EditorRef } from '@ballware/react-renderer';
import Component from 'devextreme/core/component';

export interface EditItemProps {
  layoutItem: EditLayoutItemOptions;
}

export const componentToEditorRef = (component: Component) => {
  return {
    getOption: option => component.option(option),
    setOption: (option, value) => component.option(option, value),
  } as EditorRef;
};
