/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { useState, useEffect } from 'react';
import { Redirect, Route, RouteProps, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useNotification } from '@ballware/react-provider';

export interface PrivateRouteProps extends RouteProps {
  allowed: () => boolean;
}

export const PrivateRoute = ({ allowed, ...rest }: PrivateRouteProps) => {
  const { t } = useTranslation();
  const { location } = useHistory();
  const { showInfo } = useNotification();
  const [renderAllowed] = useState(allowed());

  useEffect(() => {
    if (t && showInfo) {
      if (!renderAllowed) {
        showInfo(t('rights.notifications.routenotallowed'));
      }
    }
  }, [t, showInfo, renderAllowed]);

  if (renderAllowed) {
    return <Route {...rest} />;
  } else {
    return <Redirect to={{ pathname: '/login', state: { from: location } }} />;
  }
};
