/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { useContext } from 'react';
import { ToolbarItemsContext } from '@ballware/react-renderer';
import {
  componentToToolbarItemRef,
  ToolbarItemProps
} from './common';
import { DateBox } from 'devextreme-react';
import { useTranslation } from 'react-i18next';

export const DatetimeToolbarItem = ({ toolbarItem }: ToolbarItemProps) => {
  
  const { name, caption, defaultValue, width } = toolbarItem;

  const { t } = useTranslation();

  const { paramEditorInitialized, paramEditorValueChanged } = useContext(
    ToolbarItemsContext
  );

  return (
    <React.Fragment>
      {t && paramEditorInitialized && paramEditorValueChanged && (
        <DateBox
          hint={caption}
          width={width ?? '220px'}
          type={'datetime'}
          displayFormat={`'${caption}': ${t('format.datetime')}`}
          defaultValue={defaultValue}
          onInitialized={e => {
            e.component &&
              paramEditorInitialized(
                name,
                componentToToolbarItemRef(e.component)
              );
          }}
          onValueChanged={e => {
            if (paramEditorValueChanged) paramEditorValueChanged(name, e.value);
          }}
        />
      )}
    </React.Fragment>
  );
};
