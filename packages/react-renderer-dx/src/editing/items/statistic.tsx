/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { useContext, useState, useEffect } from 'react';

import { EditItemProps } from './common';
import { EditItemsContext } from '@ballware/react-renderer';
import { Statistic, StatisticProps } from '../../layout/items/statistic';


export const StatisticEditItem = ({ layoutItem }: EditItemProps) => {
  const { editorPreparing } = useContext(EditItemsContext);
  const [prepared, setPrepared] = useState(false);

  useEffect(() => {
    if (editorPreparing && layoutItem && layoutItem.dataMember) {
      editorPreparing(layoutItem.dataMember, layoutItem);
      setPrepared(true);
    }
  }, [editorPreparing, layoutItem]);

  const statisticProps = layoutItem.itemoptions as StatisticProps;

  return (
    <React.Fragment>
      {prepared &&
        layoutItem &&
        layoutItem.dataMember &&
        statisticProps && (
          <Statistic
            height={layoutItem.height}
            identifier={statisticProps.identifier}
            params={statisticProps.params}
          />
        )}
    </React.Fragment>
  );
};
