import React, { useContext } from 'react';
import { Button, DialogTitle, Dialog, DialogContent, DialogContentText, DialogActions } from '@mui/material';

import { SettingsContext } from '@ballware/react-contexts';

export interface InfoDialogProps {
  onClose: () => void;
}

const InfoDialog = ({ onClose }: InfoDialogProps) => {

  const { version } = useContext(SettingsContext);

  const handleClose = () => {
    onClose();
  };

  const versionString = `Version ${version} Copyright ${new Date().getFullYear()} - Frank Ballmeyer`;

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open>
      <DialogTitle id="simple-dialog-title">Über die Applikation</DialogTitle>
      <DialogContent>
        <DialogContentText>{versionString}</DialogContentText>
        <DialogContentText><span>Mit freundlicher Unterstützung von Digitalfunk OWL</span><span className="digitalfunkowl" /></DialogContentText>
      </DialogContent>      
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Schließen
        </Button>    
      </DialogActions>
    </Dialog>
  );
}

export default InfoDialog;