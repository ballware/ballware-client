/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { useContext } from 'react';
import { Container } from '../../layout/container';
import { TabPanel, Item as TabItem } from 'devextreme-react/tab-panel';

import { RenderFactoryContext } from '@ballware/react-renderer';

import { EditLayoutItem } from '@ballware/meta-interface';

export interface TabsProps {
  layoutItem: EditLayoutItem;
}

export const Tabs = ({ layoutItem }: TabsProps) => {
  const { EditLayoutItem } = useContext(RenderFactoryContext);

  if (EditLayoutItem) {
    let tabscount = 1;

    const tabItems = layoutItem.items?.map(tab => {
      let key = 1;

      return (
        <TabItem key={`tab-${tabscount++}`} title={tab.options?.caption}>
          <Container height={layoutItem.options?.height}>
            {tab.items &&
              tab.items.map(item => (
                <EditLayoutItem
                  key={key++}
                  colCount={tab.colCount}
                  layoutItem={item}
                />
              ))}
          </Container>
        </TabItem>
      );
    });

    return (
      <TabPanel
        className='pt-3'
        height={layoutItem.options?.height}
        deferRendering={false}
        scrollingEnabled
        showNavButtons
        swipeEnabled={false}
      >
        {tabItems}
      </TabPanel>
    );
  } else {
    return <React.Fragment></React.Fragment>;
  }
};
