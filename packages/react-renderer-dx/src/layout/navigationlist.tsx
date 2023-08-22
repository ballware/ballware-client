/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { useCallback, useContext, useMemo } from 'react';

import { useObservableState } from 'observable-hooks';

import { NavigationLayoutItem } from '@ballware/meta-interface';
import { TenantContext } from '@ballware/react-contexts';
import { TreeView } from 'devextreme-react';
import { ItemClickEvent } from 'devextreme/ui/tree_view';

export interface NavigationListProps {
  onPageSelected?: (url: string) => void;
}

export const NavigationList = ({ onPageSelected }: NavigationListProps) => {
  const { hasRight, navigation$ } = useContext(TenantContext);

  const navigation = useObservableState(navigation$, undefined);

  interface TreeItem {
    text?: string;
    url?: string;
    items: TreeItem[]
  }

  const itemList = useMemo(() => {
    let items = [] as TreeItem[];

    if (navigation && hasRight && navigation.items) {
      const transformSubItems = (items: NavigationLayoutItem[]): TreeItem[] => {
          const result = [] as TreeItem[];

          items?.forEach(item => {
            switch (item.type) {
              case 'group':{
                  const groupItem = {} as TreeItem;

                  groupItem.text = item.options?.caption;
                  groupItem.items = transformSubItems(item.items ?? []);

                  if (groupItem.items && groupItem.items.length > 0) {
                    result.push(groupItem);
                  }
                }                
                break;
              case 'section':                
                result.push(...transformSubItems(item.items ?? []));                
                break;
              case 'page':
                {
                  let pageVisible = true;

                  try {
                    pageVisible = (item.options.page && item.options.url)
                        ? hasRight(`generic.page.${item.options.page ?? 'unknown'}`)
                        : false;
                  } catch (exception) {
                    console.error(
                      'Exception in user code: Tenant custom script pageVisible ' +
                        exception
                    );
                    pageVisible = false;
                  }

                  if (pageVisible) { 
                    result.push({
                      text: item.options?.caption,
                      url: item.options?.url
                    } as TreeItem);
                  }
                }
                break;
            }
          });

        return result;
      };

      items = transformSubItems(navigation.items);
    }

    return items;
  }, [navigation, hasRight]);

  const onItemClick = useCallback((e: ItemClickEvent) => {
    if (onPageSelected) {
      const layoutItem = e.itemData as TreeItem;

      if (layoutItem.url) {
        onPageSelected(layoutItem.url);
      } else {
        if (e.itemData?.expanded) {
          e.component.collapseItem(e.itemData);
        } else {
          e.component.expandItem(e.itemData);
        }
      }
    }
  }, [onPageSelected]);

  return <TreeView 
    className="w-100"
    noDataText={undefined}
    items={itemList} 
    onItemClick={onItemClick}
    />;
};
