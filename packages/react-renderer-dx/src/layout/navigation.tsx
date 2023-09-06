/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import { NavigationList } from './navigationlist';

export interface NavigationProps {  
  onPageSelected?: (url: string) => void;
}

export const Navigation = ({  
  onPageSelected
}: NavigationProps) => {

  return (    
    <NavigationList onPageSelected={onPageSelected} />    
  );
};
