/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { useCallback, useContext } from 'react';

import {
  useTheme,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';

import Iframe from 'react-iframe';
import { CrudContext } from '@ballware/react-contexts';
import { useTranslation } from 'react-i18next';
import { IframePopupProps } from '@ballware/react-renderer';

export const ExternalLinkEditPopup = (props: IframePopupProps) => {
  const { title, url } = props;

  const { t } = useTranslation();
  const { close } = useContext(CrudContext);

  const fullscreen = true;

  const cancelClicked = useCallback(() => {
    if (close) {
      close();
    }
  }, [close]);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm')) || fullscreen;

  return (
    <Dialog
      open
      onClose={(_event, reason) => { if (reason !== 'backdropClick') cancelClicked() }}
      fullScreen={fullScreen}
      maxWidth={'lg'}
      fullWidth
    >
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <Iframe
          allowFullScreen
          scrolling={'no'}
          frameBorder={0}
          styles={{ border: 0 }}
          width={'100%'}
          height={'100%'}
          url={url}
        />
      </DialogContent>
      <DialogActions>
        {t && (
          <Button onClick={cancelClicked}>
            {t('editing.actions.close')}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};
