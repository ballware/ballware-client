/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { useContext } from 'react';

import { CrudContext } from '@ballware/react-contexts';
import { DeletePopupProps } from '@ballware/react-renderer';
import { useTranslation } from 'react-i18next';
import { Popup, Position, ToolbarItem } from 'devextreme-react/popup';
import { useMediaQuery, GLOBAL_MEDIA_QUERIES } from '../util/mediaquery';

export const DeletePopup = ({ title, message, id }: DeletePopupProps) => {
  
  const fullScreen = useMediaQuery(GLOBAL_MEDIA_QUERIES.small);

  const { t } = useTranslation();

  const { drop, close } = useContext(CrudContext);

  return (
    <React.Fragment>
      {t && drop && close && (
        <Popup visible
          title={title}
          fullScreen={fullScreen}
          width="auto"          
          minWidth="500px"
          height="auto"
          >
          <Position            
            at="center"
            my="center"
            of={window}
          />
          <ToolbarItem widget='dxButton' toolbar='bottom' location='after' options={{
            type: 'danger',
            text: t('editing.actions.remove'),
            onClick: () => drop(id)
          }} />
          <ToolbarItem widget='dxButton' toolbar='bottom' location='after' options={{
            type: 'default',
            text: t('editing.actions.cancel'),
            onClick: () => close()
          }} />
          <p className="text-center">{message}</p>
        </Popup>
      )}
    </React.Fragment>
  );
};
