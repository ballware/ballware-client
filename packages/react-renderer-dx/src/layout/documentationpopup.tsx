/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { HtmlEditor } from '../components/htmleditor';
import { useMedia } from 'react-media';
import { GLOBAL_MEDIA_QUERIES } from '../util/mediaquery';

export interface DocumentationPopupProps {
  title: string;
  documentation: string;
  close: () => void;
}

export const DocumentationPopup = ({
  title,
  documentation,
  close,
}: DocumentationPopupProps) => {
  const { t } = useTranslation();

  const onClose = () => {
    close();
  };

  const fullScreen = useMedia({ queries: GLOBAL_MEDIA_QUERIES }).small;

  return (
    <Dialog
      open
      onClose={onClose}
      fullScreen={fullScreen}
      fullWidth
      maxWidth={'lg'}
    >
      {t && (
        <DialogTitle id="form-dialog-title">
          {t('documentation.popuptitle', { entity: title })}
        </DialogTitle>
      )}
      <DialogContent>
        <HtmlEditor readOnly defaultValue={documentation} />
      </DialogContent>
      <DialogActions>
        {t && (
          <Button onClick={onClose}>
            {t('documentation.actions.close')}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};
