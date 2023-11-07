/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { useCallback, useContext } from 'react';

import Iframe from 'react-iframe';
import { CrudContext } from '@ballware/react-contexts';
import { useTranslation } from 'react-i18next';
import { IframePopupProps } from '@ballware/react-renderer';
import { useMediaQuery, GLOBAL_MEDIA_QUERIES } from '../util/mediaquery';
import { Popup } from 'devextreme-react';
import { Position, ToolbarItem } from 'devextreme-react/popup';

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

  const fullScreen = useMediaQuery(GLOBAL_MEDIA_QUERIES.small) || fullscreen;

  return (
    <Popup visible
      title={title}
      fullScreen={fullScreen}
      >
      <Position            
        at="center"
        my="center"
        of={window}
      />      
      <ToolbarItem widget='dxButton' toolbar='bottom' location='after' options={{
        text: t('editing.actions.close'),
        onClick: () => cancelClicked()
      }} />
      <Iframe
          allowFullScreen
          scrolling={'no'}
          frameBorder={0}
          styles={{ border: 0 }}
          width={'100%'}
          height={'100%'}
          url={url}
        />
    </Popup>
  );
};
