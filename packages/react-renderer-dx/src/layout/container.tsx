/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

export interface ContainerProps {
  height?: string;
  children?: JSX.Element | Array<JSX.Element>;
}

export const Container = ({
  height,
  children,
}: ContainerProps) => {
  
  const grid = (
    <div style={height ? { height: height } : { height: undefined }} className={`${height ? '' : 'flex-fill overflow-hidden '}row row-cols-xs-1 row-cols-lg-12}`}>   
      {children}
    </div>   
  );

  return grid;
};
