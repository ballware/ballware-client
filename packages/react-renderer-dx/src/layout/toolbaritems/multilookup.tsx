/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { useContext, useMemo } from 'react';

import {
  LookupContext,
  LookupDescriptor,
  LookupStoreDescriptor,
} from '@ballware/react-contexts';
import { ToolbarItemsContext } from '@ballware/react-renderer';
import {
  componentToToolbarItemRef,
  ToolbarItemProps,
} from './common';
import { createLookupDataSource } from '../../util/datasource';
import { TagBox } from 'devextreme-react';
import { useObservableState } from 'observable-hooks';

export const MultiLookupToolbarItem = ({ toolbarItem }: ToolbarItemProps) => {

  const { name, caption, defaultValue, lookup, width } = toolbarItem;

  const { lookups$ } = useContext(LookupContext);
  const { paramEditorInitialized, paramEditorValueChanged } = useContext(
    ToolbarItemsContext
  );

  const lookups = useObservableState(lookups$, undefined);

  const mylookup =
    lookups && lookup ? (lookups[lookup] as LookupDescriptor) : undefined;

  const dataSource = useMemo(
    () =>
      mylookup
        ? createLookupDataSource(
            (mylookup.store as LookupStoreDescriptor).listFunc,
            (mylookup.store as LookupStoreDescriptor).byIdFunc
          )
        : undefined,
    [mylookup]
  );

  return (
    <React.Fragment>
      {paramEditorInitialized && paramEditorValueChanged && mylookup && (
        <TagBox
          dataSource={dataSource}
          noDataText={caption}
          width={width ?? '400px'}
          searchEnabled
          showClearButton
          showSelectionControls
          showDropDownButton
          multiline={false}
          maxDisplayedTags={3}
          displayExpr={mylookup.displayMember}
          valueExpr={mylookup.valueMember}
          defaultValue={defaultValue as any[]}
          onInitialized={(e: any) => {
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
