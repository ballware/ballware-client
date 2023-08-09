/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { useContext } from 'react';

import {
  NotificationContext,
  NotificationDisplayContext,
} from '@ballware/react-contexts';
import { useTranslation } from 'react-i18next';
import { Toast } from 'devextreme-react';

export const Notification = () => {
  const { t } = useTranslation();
  const { hide } = useContext(NotificationContext);
  const { message } = useContext(NotificationDisplayContext);

  return (
    <React.Fragment>
      {t && hide && message && (
        <Toast
          visible
          message={t(message.text)}
          onHidden={() => hide()}
          type={message.type}
        />
      )}
    </React.Fragment>
  );
};
