/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { useContext } from 'react';

import { CrudContext } from '@ballware/react-contexts';
import { ImportPopupProps } from '@ballware/react-renderer';
import { useTranslation } from 'react-i18next';
import { FileUploader, Popup } from 'devextreme-react';
import { useMediaQuery, GLOBAL_MEDIA_QUERIES } from '../util/mediaquery';
import { Position, ToolbarItem } from 'devextreme-react/popup';
 
 export const ImportPopup = ({ importFunction }: ImportPopupProps) => {
   
   const fullScreen = useMediaQuery(GLOBAL_MEDIA_QUERIES.small);
 
   const { t } = useTranslation();
 
   const { importFile, close } = useContext(CrudContext);
 
   return (
     <React.Fragment>
       {t && importFile && close && (
        <Popup visible
          title={t('editing.import.popuptitle')}
          fullScreen={fullScreen}
          >
          <Position            
            at="center"
            my="center"
            of={window}
          />
          <ToolbarItem widget='dxButton' toolbar='bottom' location='after' options={{
            text: t('editing.actions.close'),
            onClick: () => close()
          }} />
          <div className="dx-fieldset">
            <div className="dx-fieldset-header">
              {t('editing.import.popupmessage')}
            </div>
            <FileUploader                
                multiple={false}
                accept={'*'}
                uploadMode={'instantly'}
                uploadFile={(file) => importFile(importFunction, file)}
                onUploaded={() => close()}
            />
          </div>
        </Popup>
       )}
     </React.Fragment>
   );
 };
 