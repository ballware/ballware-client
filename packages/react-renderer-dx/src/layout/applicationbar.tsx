/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { PropsWithChildren } from 'react';

import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

export interface ApplicationBarProps {
  title?: string;
  onMenuToggle?: () => void;
}

export const ApplicationBar = ({
  title,
  onMenuToggle,
  children,
}: PropsWithChildren<ApplicationBarProps>) => {
  
  const theme = useTheme();
  
  return (
    <AppBar position="fixed" sx={{ 
        zIndex: theme.zIndex.drawer + 1
      }}>
      <Toolbar>
        {onMenuToggle && (          
          <IconButton
            color="inherit"
            edge="start"
            onClick={onMenuToggle}
            sx={{ 
              display: { sm: 'none', xs: 'block' },
              marginRight: theme.spacing(2),
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
        {title && (
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
        )}
        {children}
      </Toolbar>
    </AppBar>
  );
};
