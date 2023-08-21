/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { useContext, useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { NotificationContext } from '@ballware/react-contexts';
import { useTranslation } from 'react-i18next';

export interface PrivateRouteProps {
  allowed: () => boolean;
  children?: JSX.Element
}

export const PrivateRoute = ({ allowed, children }: PrivateRouteProps) => {
  const { t } = useTranslation();
  const location = useLocation();
  const { showInfo } = useContext(NotificationContext);
  const [renderAllowed] = useState(allowed());

  useEffect(() => {
    if (t && showInfo) {
      if (!renderAllowed) {
        showInfo(t('rights.notifications.routenotallowed'));
      }
    }
  }, [t, showInfo, renderAllowed]);

  if (renderAllowed) {
    return children;
  } else {
    return <Navigate state={{ from: location }} to={{ pathname: '/login' }} />;
  }
};
