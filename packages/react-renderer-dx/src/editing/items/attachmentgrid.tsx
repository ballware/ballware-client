/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { useContext, useEffect, useState } from 'react';
import {
  EditContext,
} from '@ballware/react-contexts';
import { EditItemProps } from './common';

import { FieldSet } from './fieldset';

import { AttachmentGrid as DxAttachmentGrid } from '../../components/attachmentgrid';
import { useAttachments, useNotification } from '@ballware/react-provider';
import { EditItemsContext } from '@ballware/react-renderer';
import { CrudItem } from '@ballware/meta-interface';

export interface AttachmentGridProps extends EditItemProps {}

export const AttachmentGrid = ({ layoutItem }: AttachmentGridProps) => {
  const { item } = useContext(EditContext);
  const { fetch, upload, open, drop } = useAttachments((item as CrudItem)?.Id);
  const { showInfo, showWarning, showError } = useNotification();
  const { readOnly, editorPreparing } = useContext(EditItemsContext);
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
              fetchFunc={() => fetch()}
              openFunc={fileName => open(fileName)}
              uploadFunc={file => upload(file)}
              deleteFunc={fileName => drop(fileName)}
              showInfo={showInfo}
              showWarning={showWarning}
              showError={showError}
            />
          </FieldSet>
        )}
    </React.Fragment>
  );
};
