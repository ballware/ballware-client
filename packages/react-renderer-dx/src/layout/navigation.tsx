/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { PropsWithChildren } from 'react';

import { IconButton, Divider } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/system';

import { NavigationList } from './navigationlist';
/*
const useStyles = makeStyles(theme => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));
*/
export interface NavigationProps {
  onMenuToggle?: () => void;
}

export const Navigation = ({
  onMenuToggle,
  children,
}: PropsWithChildren<NavigationProps>) => {
  const theme = useTheme();

  const StyledDiv = styled('div')({ ...theme.mixins.toolbar, display: 'flex', alignItems: 'center', padding: theme.spacing(0, 1), justifyContent: 'flex-end' });

  return (
    <React.Fragment>
      <StyledDiv>
        {onMenuToggle && (
          <IconButton onClick={onMenuToggle}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        )}
      </StyledDiv>
      <Divider />
      <NavigationList />
      {children && (
        <React.Fragment>
          <Divider />
          {children}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
