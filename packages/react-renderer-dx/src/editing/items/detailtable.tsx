/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { useRef, useState, useEffect, useContext } from 'react';

import { EditItemProps } from './common';
import { FieldSet } from './fieldset';
import {
  DetailTable as DetailTableContainer,
  DetailTableRef,
} from '../../datacontainers/table/detailtable';
import { EditItemsContext, EditorRef } from '@ballware/react-renderer';

export interface DetailTableProps extends EditItemProps {}

export const DetailTable = ({ layoutItem }: DetailTableProps) => {
  const {
    readOnly,
    getValue,
    editorPreparing,
    editorInitialized,
    editorValueChanged,
  } = useContext(EditItemsContext);

  const [readonly, setReadonly] = useState(
    !readOnly || readOnly() || layoutItem.readonly
  );
  const [prepared, setPrepared] = useState<boolean>();

  const valueNotificationRef = useRef(true);
  const editorRef = useRef<DetailTableRef>(null);

  useEffect(() => {
    if (layoutItem && layoutItem.dataMember && editorPreparing && readOnly) {
      editorPreparing(layoutItem.dataMember, layoutItem);
      setReadonly(!readOnly || readOnly() || layoutItem.readonly);
      setPrepared(true);
    }
  }, [layoutItem, editorPreparing, readOnly]);

  if (
    prepared &&
    layoutItem &&
    layoutItem.dataMember &&
    readOnly &&
    getValue &&
    editorInitialized &&
    editorValueChanged
  ) {
    const editor = {
      getOption: option => {
        switch (option) {
          case 'value':
            return editorRef.current?.getValue();
          case 'readonly':
            return readonly;
        }

        return undefined;
      },
      setOption: (option, newValue) => {
        switch (option) {
          case 'value':
            valueNotificationRef.current = false;
            editorRef.current?.setValue(newValue as Record<string, unknown>[]);
            valueNotificationRef.current = true;
            break;
          case 'readonly':
            setReadonly(readOnly() || (newValue as boolean));
            break;
        }
      },
    } as EditorRef;

    editorInitialized(layoutItem.dataMember, editor);

    return (
      <FieldSet layoutItem={layoutItem}>
        <DetailTableContainer
          ref={editorRef}
          readonly={readonly ?? false}
          defaultValue={getValue(layoutItem.dataMember)}
          setValue={value => {
            layoutItem.dataMember &&
              editorValueChanged(
                layoutItem.dataMember,
                value,
                valueNotificationRef.current
              );
          }}
          layoutItem={layoutItem}
        />
      </FieldSet>
    );
  } else {
    return <FieldSet layoutItem={layoutItem}></FieldSet>;
  }
};
