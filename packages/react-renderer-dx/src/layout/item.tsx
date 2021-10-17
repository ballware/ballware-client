/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import { Grid } from '@mui/material';

export interface ItemProps {
  colCount?: number;
  colSpan?: number;
  children: JSX.Element | Array<JSX.Element>;
}

export const Item = ({ colSpan, colCount, children }: ItemProps) => {
  const xsWidth = 12;
  const lgWidth = (((colSpan ?? 1) / (colCount ?? 1)) * 12) as
    | boolean
    | 'auto'
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12;

  return (
    <Grid item xs={xsWidth} lg={lgWidth}>
      {children}
    </Grid>
  );
};
