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
import { DropDownButton } from 'devextreme-react';

export const DropDownButtonToolbarItem = ({
  toolbarItem,
}: ToolbarItemProps) => {

  const theme = useTheme();
  const style = useDefaultToolbarItemStyles(theme);

  const { name, width, options, caption } = toolbarItem;

  const { paramEditorInitialized, paramEditorEvent } = useContext(
    ToolbarItemsContext
  );

  return (
    <React.Fragment>
      {paramEditorInitialized && paramEditorEvent && (
        <DropDownButton
          style={style}
          width={width ?? '180px'}
          text={caption}
          dataSource={options.items as any[]}
          keyExpr={'id'}
          displayExpr={'text'}
          splitButton
          onButtonClick={() => {
            paramEditorEvent(name, 'click', undefined);
          }}
          onItemClick={e => {
            paramEditorEvent(name, 'click', e.itemData.id);
          }}
          onInitialized={(e: any) => {
            paramEditorInitialized(
              name,
              componentToToolbarItemRef(e.component)
            );
          }}
        />
      )}
    </React.Fragment>
  );
};
