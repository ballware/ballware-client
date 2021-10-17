/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { useContext } from 'react';

import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/lab/Alert';
import {
  NotificationContext,
  NotificationDisplayContext,
} from '@ballware/react-contexts';
import { useTranslation } from 'react-i18next';

export const Notification = () => {
  const { t } = useTranslation();
  const { hide } = useContext(NotificationContext);
  const { message } = useContext(NotificationDisplayContext);

  return (
    <React.Fragment>
      {t && hide && message && (
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open
          autoHideDuration={4000}
          onClose={() => hide()}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            severity={message.type}
            onClose={() => hide()}
          >
            {t(message.text)}
          </MuiAlert>
        </Snackbar>
      )}
    </React.Fragment>
  );
};
