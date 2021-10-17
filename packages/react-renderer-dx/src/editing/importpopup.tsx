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
 import { ImportPopupProps } from '@ballware/react-renderer';
 import { useTranslation } from 'react-i18next';
import { FileUploader } from 'devextreme-react';
 
 export const ImportPopup = ({ importFunction }: ImportPopupProps) => {
   const theme = useTheme();
   const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
 
   const { t } = useTranslation();
 
   const { importFile, close } = useContext(CrudContext);
 
   return (
     <React.Fragment>
       {t && importFile && close && (
         <Dialog
           open
           onClose={(_event, reason) => { if (reason !== 'backdropClick') close() }}
           fullScreen={fullScreen}
           maxWidth={'lg'}
           fullWidth
         >
           <DialogTitle id="form-dialog-title">{t('editing.import.popuptitle')}</DialogTitle>
           <DialogContent>
             <DialogContentText>{t('editing.import.popupmessage')}</DialogContentText>
             <FileUploader                
                multiple={false}
                accept={'*'}
                uploadMode={'instantly'}
                uploadFile={(file) => importFile(importFunction, file)}
                onUploaded={() => close()}
            />
           </DialogContent>
           <DialogActions>             
             <Button onClick={() => close()}>
               {t('editing.actions.close')}
             </Button>
           </DialogActions>
         </Dialog>
       )}
     </React.Fragment>
   );
 };
 