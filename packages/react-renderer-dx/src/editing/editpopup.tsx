/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { useCallback, useContext } from 'react';

import ScrollView from 'devextreme-react/scroll-view';

import { EditForm, EditFormRef } from './editform';
import { EditModes, CrudContext, EditContext } from '@ballware/react-contexts';
import { useTranslation } from 'react-i18next';
import { useMedia } from 'react-media';
import { GLOBAL_MEDIA_QUERIES } from '../util/mediaquery';
import { Popup } from 'devextreme-react';
import { Position, ToolbarItem } from 'devextreme-react/popup';

export interface EditPopupProps {
  title: string;
}

export const EditPopup = (props: EditPopupProps) => {
  const { title } = props;

  const { t } = useTranslation();

  const { close } = useContext(CrudContext);
  const { mode, editLayout, editFunction } = useContext(EditContext);

  const formRef = React.useRef<EditFormRef>(null);

  const saveClicked = useCallback(() => {
    if (formRef.current && formRef.current.validate()) {
      formRef.current.submit();
    }
  }, [formRef]);

  const cancelClicked = useCallback((reason : "backdropClick" | "escapeKeyDown") => {
    if (close && reason !== 'backdropClick') {
      close();
    }
  }, [close]);

  const fullScreen = useMedia({ queries: GLOBAL_MEDIA_QUERIES }).small  || editLayout?.fullscreen;

  return (
    <React.Fragment>
      {editLayout && (     
        <Popup visible
          title={title}
          fullScreen={fullScreen}
          width="auto"    
          height="auto"
          maxHeight="90vh"
          maxWidth="90vw"
          >
          <Position            
            at="center"
            my="center"
            of={window}
          />
          {t && mode !== EditModes.VIEW && (
            <ToolbarItem widget='dxButton' toolbar='bottom' location='after' options={{
              type: 'primary',
              text: t('editing.actions.apply'),
              onClick: saveClicked
            }} />
          )}
          {t && mode !== EditModes.VIEW && (
            <ToolbarItem widget='dxButton' toolbar='bottom' location='after' options={{
              text: t('editing.actions.cancel'),
              onClick: () => cancelClicked("escapeKeyDown")
            }} />
          )}
          {t && mode === EditModes.VIEW && (
            <ToolbarItem widget='dxButton' toolbar='bottom' location='after' options={{
              text: t('editing.actions.close'),
              onClick: () => cancelClicked("escapeKeyDown")
            }} />
          )}
          <ScrollView>
              <EditForm
                ref={formRef}
                editFunction={editFunction}
                editLayout={editLayout}
              />
          </ScrollView>
        </Popup>
      )}
    </React.Fragment>
  );
};
