/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { PageToolbarItem } from '@ballware/meta-interface';
import { ToolbarItemRef } from '@ballware/react-renderer';
import { Theme } from '@mui/material/styles';
import { Component } from 'devextreme/core/component';

export interface ToolbarItemProps {
  toolbarItem: PageToolbarItem;
}

export const useDefaultToolbarItemStyles = (theme: Theme) => {
  
  return {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  };
};

export const componentToToolbarItemRef = (component: Component) => {
  return {
    getOption: option => component.option(option),
    setOption: (option, value) => component.option(option, value),
  } as ToolbarItemRef;
};
