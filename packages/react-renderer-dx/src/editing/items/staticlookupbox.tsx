/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { useRef, useState, useEffect, useContext } from 'react';

import { EditItemProps } from './common';
import { FieldSet } from './fieldset';
import { EditItemsContext, EditorRef } from '@ballware/react-renderer';

import { SelectBox } from 'devextreme-react/select-box';
import Validator, {
  CustomRule,
  RequiredRule,
} from 'devextreme-react/validator';
import { compileGetter } from 'devextreme/utils';

export interface StaticLookupBoxProps extends EditItemProps {}

export const StaticLookupBox = ({ layoutItem }: StaticLookupBoxProps) => {
  const {
    readOnly,
    getValue,
    editorPreparing,
    editorInitialized,
    editorValidating,
    editorValueChanged,
    editorEntered,
  } = useContext(EditItemsContext);

  const [required, setRequired] = useState(layoutItem.required ?? false);
  const [readonly, setReadonly] = useState(
    !readOnly || readOnly() || layoutItem.readonly
  );
  const [prepared, setPrepared] = useState<boolean>();

  const valueNotificationRef = useRef(true);
  const editorRef = useRef<SelectBox>(null);

  useEffect(() => {
    if (layoutItem && layoutItem.dataMember && editorPreparing && readOnly) {
      editorPreparing(layoutItem.dataMember, layoutItem);
      setReadonly(!readOnly || readOnly() || layoutItem.readonly);
      setRequired(layoutItem.required ?? false);
      setPrepared(true);
    }
  }, [layoutItem, editorPreparing, readOnly]);

  if (
    prepared &&
    readOnly &&
    getValue &&
    editorInitialized &&
    editorValueChanged &&
    editorValidating &&
    editorEntered
  ) {
    const editor = {
      getOption: option => {
        switch (option) {
          case 'value':
            return editorRef.current?.instance.option('value');
          case 'required':
            return required;
          case 'readonly':
            return readonly;
        }
      },
      setOption: (option, newValue) => {
        switch (option) {
          case 'value':
            valueNotificationRef.current = false;
            editorRef.current?.instance.option('value', newValue);
            valueNotificationRef.current = true;
            break;
          case 'required':
            setRequired(newValue as boolean);
            break;
          case 'readonly':
            setReadonly(readOnly() || (newValue as boolean));
            break;
        }
      },
    } as EditorRef;

    const displayValueGetter = compileGetter('Text');
    const hintValueGetter = layoutItem.hintExpr ? compileGetter(layoutItem.hintExpr) : undefined;

    const Item = (item: Record<string, unknown>) => {
      const displayValue = displayValueGetter(item);
      const hintValue = hintValueGetter ? hintValueGetter(item) : undefined;

      if (displayValue && hintValue) {                
        return <React.Fragment>{displayValue}<br/><small>{hintValue}</small></React.Fragment>;  
      }      

      return <React.Fragment>{displayValue}</React.Fragment>;
    };

    return (
      <FieldSet layoutItem={layoutItem}>
        <SelectBox
          ref={editorRef}
          name={layoutItem.dataMember}
          items={layoutItem.items}
          displayExpr={item => displayValueGetter(item)}          
          searchExpr={hintValueGetter ? [(item: Record<string, unknown>) => displayValueGetter(item), (item: Record<string, unknown>) => hintValueGetter(item)] : [(item: Record<string, unknown>) => displayValueGetter(item)]}
          itemRender={Item}
          valueExpr={'Value'}
          defaultValue={getValue(layoutItem.dataMember)}
          readOnly={readonly}
          showClearButton
          searchEnabled
          onInitialized={() =>
            layoutItem.dataMember &&
            editorInitialized(layoutItem.dataMember, editor)
          }
          onValueChanged={e => {
            layoutItem.dataMember &&
              editorValueChanged(
                layoutItem.dataMember,
                e.value,
                valueNotificationRef.current
              );
          }}
          onFocusIn={() =>
            layoutItem.dataMember && editorEntered(layoutItem.dataMember)
          }
        >
          <Validator>
            {required && <RequiredRule />}
            {layoutItem.validations?.map(v => (
              <CustomRule
                key={v.identifier}
                validationCallback={(e: { value: any }) =>
                  !!(layoutItem.dataMember &&
                  editorValidating(layoutItem.dataMember, v.identifier, e.value))
                }
                message={v.message}
              />
            ))}
          </Validator>
        </SelectBox>
      </FieldSet>
    );
  } else {
    return <FieldSet layoutItem={layoutItem}></FieldSet>;
  }
};
