/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import { ToolbarItemsContext } from '@ballware/react-renderer';
import {
  componentToToolbarItemRef,
  ToolbarItemProps,
  useDefaultToolbarItemStyles,
} from './common';
import { SelectBox } from 'devextreme-react';

export const StaticLookupToolbarItem = ({ toolbarItem }: ToolbarItemProps) => {

  const theme = useTheme();
  const style = useDefaultToolbarItemStyles(theme);

  const { name, caption, defaultValue, width, options } = toolbarItem;

  const { paramEditorInitialized, paramEditorValueChanged } = useContext(
    ToolbarItemsContext
  );

  return (
    <React.Fragment>
      {paramEditorInitialized && paramEditorValueChanged && (
        <SelectBox
          style={style}
          items={options.items as []}
          noDataText={caption}
          width={width ?? '400px'}
          searchEnabled
          showClearButton
          showDropDownButton
          displayExpr={(options.displayExpr as string) ?? 'text'}
          valueExpr={(options.valueExpr as string) ?? 'value'}
          defaultValue={defaultValue}
          onInitialized={(e: any) => {
            paramEditorInitialized(
              name,
              componentToToolbarItemRef(e.component)
            );
          }}
          onValueChanged={(e) => {
            if (paramEditorValueChanged) paramEditorValueChanged(name, e.value);
          }}
        />
      )}
    </React.Fragment>
  );
};
