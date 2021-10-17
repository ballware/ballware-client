/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { useContext } from 'react';

import { useTheme } from '@mui/material/styles';
import { ToolbarItemsContext } from '@ballware/react-renderer';
import { ToolbarItemProps, useDefaultToolbarItemStyles } from './common';
import { Button } from 'devextreme-react';

export const ButtonToolbarItem = ({ toolbarItem }: ToolbarItemProps) => {

  const theme = useTheme();

  const buttonStyle = useDefaultToolbarItemStyles(theme);

  const { name, width, caption } = toolbarItem;

  const { paramEditorInitialized, paramEditorEvent } = useContext(
    ToolbarItemsContext
  );

  return (
    <React.Fragment>
      {paramEditorInitialized && paramEditorEvent && (
        <Button
          style={buttonStyle}
          width={width ?? 'auto'}
          text={caption}
          onClick={() => {
            paramEditorEvent(name, 'click', undefined);
          }}
        />
      )}
    </React.Fragment>
  );
};
