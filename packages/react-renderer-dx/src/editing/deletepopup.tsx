/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { useContext } from 'react';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  useTheme,
  useMediaQuery,
  DialogContentText,
} from '@mui/material';
import { CrudContext } from '@ballware/react-contexts';
import { DeletePopupProps } from '@ballware/react-renderer';
import { useTranslation } from 'react-i18next';

export const DeletePopup = ({ title, message, id }: DeletePopupProps) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const { t } = useTranslation();

  const { drop, close } = useContext(CrudContext);

  return (
    <React.Fragment>
      {t && drop && close && (
        <Dialog
          open
          onClose={(_event, reason) => { if (reason !== 'backdropClick') close() }}
          fullScreen={fullScreen}
          maxWidth={'lg'}
          fullWidth
        >
          <DialogTitle id="form-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText>{message}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => drop(id)} color="primary">
              {t('editing.actions.remove')}
            </Button>
            <Button onClick={() => close()}>
              {t('editing.actions.cancel')}
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </React.Fragment>
  );
};
