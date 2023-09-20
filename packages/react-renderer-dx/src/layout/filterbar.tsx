/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { useMemo, useEffect, useContext, useState } from 'react';

import { PageToolbarItem } from '@ballware/meta-interface';
import { PageContext } from '@ballware/react-contexts';
import { usePageParams } from '@ballware/react-provider';
import {
  RenderFactoryContext,
  ToolbarItemsProvider,
} from '@ballware/react-renderer';
import { useTranslation } from 'react-i18next';
import { useMediaQuery, GLOBAL_MEDIA_QUERIES } from '../util/mediaquery';
import { Button, Template, Toolbar } from 'devextreme-react';
import { dxToolbarItem } from 'devextreme/ui/toolbar';

export interface FilterBarProps {
  documentationIdentifier?: string;
  title?: string;
  items?: Array<PageToolbarItem>;
}

export const FilterBar = ({
  documentationIdentifier,
  title,
  items,
}: FilterBarProps) => {
  const { t } = useTranslation();

  const largeOrMediumScreen = useMediaQuery(GLOBAL_MEDIA_QUERIES.medium) || useMediaQuery(GLOBAL_MEDIA_QUERIES.large);
  
  const [initialized, setInitialized] = useState(false);

  const { PageToolbarItem } = useContext(RenderFactoryContext);
  const { loadDocumentation } = useContext(PageContext);
  const { paramsInitialized } = usePageParams();

  const toolbarItems = useMemo(() => {
    const itemList = [] as dxToolbarItem[];

    if (title) {
      itemList.push({
        location: 'before',
        text: title,
        locateInMenu: 'never',
      });  
    }
    
    items?.forEach(item => {
      itemList.push({
        location: 'after',
        template: 'toolbaritem',
        locateInMenu: 'auto',
        options: {
          item
        }
      });
    })

    if (documentationIdentifier) {
      itemList.push({
        location: 'after',
        template: 'documentation',
        locateInMenu: 'never'
      });
    }

    return itemList;
  }, [PageToolbarItem, items, documentationIdentifier, loadDocumentation, title]);

  useEffect(() => {
    if (!initialized && paramsInitialized) {
      paramsInitialized(!largeOrMediumScreen);

      setInitialized(true);
    }
  }, [initialized, paramsInitialized, largeOrMediumScreen]);

  return (
    <React.Fragment>
      {t && toolbarItems && (
        <ToolbarItemsProvider>
          <Toolbar items={toolbarItems}>            
            {loadDocumentation && documentationIdentifier && 
              <Template name="documentation" render={() => <Button icon="bi bi-question-circle" onClick={() => loadDocumentation(documentationIdentifier)} />} />
            }
            {PageToolbarItem && <Template name="toolbaritem" render={(item: dxToolbarItem) => <PageToolbarItem item={item.options.item}/>}/>}
          </Toolbar>
        </ToolbarItemsProvider>
      )}
    </React.Fragment>
  );
};
