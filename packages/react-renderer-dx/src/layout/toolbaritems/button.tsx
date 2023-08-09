/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { useContext } from 'react';

import { ToolbarItemsContext } from '@ballware/react-renderer';
import { ToolbarItemProps } from './common';
import { Button } from 'devextreme-react';

export const ButtonToolbarItem = ({ toolbarItem }: ToolbarItemProps) => {

  const { name, width, caption } = toolbarItem;

  const { paramEditorInitialized, paramEditorEvent } = useContext(
    ToolbarItemsContext
  );

  return (
    <React.Fragment>
      {paramEditorInitialized && paramEditorEvent && (
        <Button
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
