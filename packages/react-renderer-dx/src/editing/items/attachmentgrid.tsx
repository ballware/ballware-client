/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { useContext, useEffect, useState } from 'react';
import {
  AttachmentContext,
  NotificationContext,
} from '@ballware/react-contexts';
import { EditItemProps } from './common';

import { FieldSet } from './fieldset';

import { AttachmentGrid as DxAttachmentGrid } from '../../components/attachmentgrid';
import { EditItemsContext } from '@ballware/react-renderer';

export const AttachmentGrid = ({ layoutItem }: EditItemProps) => {
  const { fetch, upload, open, drop } = useContext(AttachmentContext);
  const { showInfo, showWarning, showError } = useContext(NotificationContext);
  const { readOnly, getValue, editorPreparing } = useContext(EditItemsContext);
  const [prepared, setPrepared] = useState<boolean>();

  useEffect(() => {
    if (layoutItem && layoutItem.dataMember && editorPreparing) {
      editorPreparing(layoutItem.dataMember, layoutItem);
      setPrepared(true);
    }
  }, [layoutItem, editorPreparing]);

  return (
    <React.Fragment>
      {layoutItem &&
        readOnly &&
        getValue &&
        showInfo &&
        showError &&
        showWarning &&
        prepared &&
        fetch &&
        upload &&
        open &&
        drop && (
          <FieldSet layoutItem={layoutItem}>
            <DxAttachmentGrid
              readonly={readOnly()}
              fetchFunc={() => fetch(getValue('Id'))}
              openFunc={fileName => open(getValue('Id'), fileName)}
              uploadFunc={file => upload(getValue('Id'), file)}
              deleteFunc={fileName => drop(getValue('Id'), fileName)}
              showInfo={showInfo}
              showWarning={showWarning}
              showError={showError}
            />
          </FieldSet>
        )}
    </React.Fragment>
  );
};
