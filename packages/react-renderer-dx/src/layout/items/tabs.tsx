/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { useContext, useEffect, useMemo, useState } from 'react';
import {
  PageLayoutItem,
  QueryParams,
  TabItemOptions,
} from '@ballware/meta-interface';
import { Container } from '../container';
import { TabPanel, Item as TabItem } from 'devextreme-react/tab-panel';
import { LoadIndicator } from 'devextreme-react/load-indicator';
import { RenderFactoryContext } from '@ballware/react-renderer';
import { MetaContext, ProviderFactoryContext } from '@ballware/react-contexts';

const TabCountIndicator = ({ query, params }: { query: string, params?: QueryParams}) => {

  const [itemCount, setItemCount] = useState<number>();

  const { count } = useContext(MetaContext);  
  
  useEffect(() => {
    if (count) {
      count(query, params).then(result => {
        setItemCount(result);
      });
    }
  }, [count, params]);

  if (itemCount) {
    return <React.Fragment>{`(${itemCount})`}</React.Fragment>
  } else {
    return <LoadIndicator height={12} width={12} />;
  }
}

const TabHeader = ({ options, params }: { options: TabItemOptions, params?: QueryParams}) => {

  const { LookupProvider, MetaProvider } = useContext(ProviderFactoryContext);

  if (!options?.entity) {
    return <span className="dx-tab-text">{options?.caption}</span>;
  } else {
    return (<React.Fragment>{(LookupProvider && MetaProvider) && <LookupProvider><MetaProvider entity={options?.entity} readOnly headParams={params as Record<string, unknown>} initialCustomParam={{}}><span className="dx-tab-text">{options?.caption}&nbsp;<TabCountIndicator query={options.query ?? 'primary'} params={params}/></span></MetaProvider></LookupProvider>}</React.Fragment>);
  }
}

export interface LayoutTabProps {
  layoutItem: PageLayoutItem;
  params?: QueryParams;
}

export const LayoutTabs = ({ layoutItem, params }: LayoutTabProps) => {
  const { PageLayoutItem } = useContext(RenderFactoryContext);

  let tabscount = 1;
  let key = 1;

  const tabItems = useMemo(
    () =>
      layoutItem.items?.map(tab => {
        const tabOptions = tab.options?.itemoptions as TabItemOptions;
       
        return (<TabItem
          key={`tab-${tabscount++}`}
          tabRender={() => <TabHeader options={tabOptions}/>}          >
          <Container height={layoutItem.options?.height}>
            {PageLayoutItem &&
              tab.items &&
              tab.items.map(item => (
                <PageLayoutItem
                  key={key++}
                  colCount={tab.colCount}
                  layoutItem={item}
                  params={params}
                />
              ))}
          </Container>
        </TabItem>
        );        
      }),
    [PageLayoutItem, layoutItem, key, params, tabscount]
  );

  return (
    <TabPanel
      height={layoutItem.options?.height}
      deferRendering={true}
      showNavButtons
      swipeEnabled={false}
    >
      {tabItems}
    </TabPanel>
  );
};
