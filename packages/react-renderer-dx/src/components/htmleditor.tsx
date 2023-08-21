/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { useMemo } from 'react';

import {
  HtmlEditor as DxHtmlEditor,
  Toolbar,
  Item,
} from 'devextreme-react/html-editor';
import Validator, { RequiredRule } from 'devextreme-react/validator';

export const HtmlEditor = ({
  readOnly,
  required,
  defaultValue,
  width,
  height,
  onChange,
}: {
  readOnly?: boolean;
  required?: boolean;
  defaultValue?: string;
  width?: string;
  height?: string;
  onChange?: (value: string) => void;
}) => {
  const MemorizedEditor = useMemo(
    () => (
      <DxHtmlEditor
        valueType={'html'}
        defaultValue={defaultValue}
        height={height}
        width={width}
        readOnly={readOnly}
        onValueChanged={e => onChange && onChange(e.value)}
      >
        {!readOnly && (
          <Toolbar multiline={false}>
            <Item name="undo" />
            <Item name="redo" />
            <Item name="separator" />
            <Item name="header" acceptedValues={[false, 1, 2, 3, 4, 5]} />
            <Item name="separator" />
            <Item name="bold" />
            <Item name="italic" />
            <Item name="strike" />
            <Item name="underline" />
            <Item name="separator" />
            <Item name="alignLeft" />
            <Item name="alignCenter" />
            <Item name="alignRight" />
            <Item name="alignJustify" />
            <Item name="separator" />
            <Item name="orderedList" />
            <Item name="bulletList" />
            <Item name="separator" />
            <Item name="color" />
            <Item name="background" />
            <Item name="separator" />
            <Item name="clear" />
          </Toolbar>
        )}
        <Validator>{required && <RequiredRule />}</Validator>
      </DxHtmlEditor>
    ),
    [readOnly, width, height, defaultValue, required, onChange]
  );

  return MemorizedEditor;
};
