/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { useState, useContext, useEffect } from 'react';

import {
  GridLayoutColumn,
  CrudItem,
  ValueType,
  EditLayout,
} from '@ballware/meta-interface';
import { EditContext } from '@ballware/react-contexts';
import ValidationGroup from 'devextreme-react/validation-group';
import ValidationSummary from 'devextreme-react/validation-summary';
import { Container } from '../layout/container';
import { RenderFactoryContext } from '@ballware/react-renderer';
import { useTranslation } from 'react-i18next';
import { Button, Popup } from 'devextreme-react';
import { Position, ToolbarItem } from 'devextreme-react/popup';
import { useMetaEditLayout } from '@ballware/react-provider';

export interface DetailEditPopupProps {
  readonly: boolean;
  applyChanges: (e: { value: CrudItem | ValueType }) => void;
  column: GridLayoutColumn;
}

export const DetailEditPopup = ({
  readonly,
  column,
  applyChanges,
}: DetailEditPopupProps) => {
  const { t } = useTranslation();

  const [open, setOpen] = useState<boolean>(false);
  const [editLayout, setEditLayout] = useState<EditLayout>();

  const { item } = useContext(EditContext);
  const { EditLayoutItem } = useContext(RenderFactoryContext);

  const { getEditLayout } = useMetaEditLayout();

  const validationGroupRef = React.useRef<ValidationGroup>(null);

  useEffect(() => {
    if (getEditLayout && column) {
      setEditLayout(getEditLayout(column.popuplayout ?? 'primary'));
    }
  }, [getEditLayout, column]);

  const onApply = () => {
    setOpen(false);
    applyChanges({ value: item });
  };

  let key = 1;

  return (
    <React.Fragment>
      {t && editLayout && EditLayoutItem && (
        <React.Fragment>
          <Button
            stylingMode='text'
            style={{ width: '100%', height: '100%' }}
            onClick={() => {
              setOpen(true);
            }}
            text={t('editing.actions.open')}
          />
          <Popup visible={open}
            title={column.caption}
            >
            <Position            
              at="center"
              my="center"
              of={window}
            />
            {t && !readonly && (
              <ToolbarItem widget='dxButton' toolbar='bottom' location='after' options={{
                type: 'primary',
                text: t('editing.actions.apply'),
                onClick: onApply
              }} />
            )}
            {t && !readonly && (
              <ToolbarItem widget='dxButton' toolbar='bottom' location='after' options={{
                text: t('editing.actions.cancel'),
                onClick: () => setOpen(false)
              }} />
            )}
            {t && readonly && (
              <ToolbarItem widget='dxButton' toolbar='bottom' location='after' options={{
                text: t('editing.actions.close'),
                onClick: () => setOpen(false)
              }} />
            )}
            <ValidationGroup
                ref={validationGroupRef}
                onInitialized={e => e.component?.validate()}
              >
                <Container>
                  {editLayout.items?.map(item => (
                    <EditLayoutItem
                      key={key++}
                      colCount={editLayout.colCount}
                      layoutItem={item}
                    />
                  ))}
                </Container>
                <div className="dx-fieldset">
                  <ValidationSummary />
                </div>
            </ValidationGroup>
          </Popup>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
