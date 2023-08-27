/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { useContext, useMemo } from 'react';

import { DocumentationPopup } from './documentationpopup';
import { LookupContext } from '@ballware/react-contexts';
import { PageContext } from '@ballware/react-contexts';
import { RenderFactoryContext } from '@ballware/react-renderer';
import { Container } from './container';
import { useObservableState } from 'observable-hooks';

export const Page = (): JSX.Element => {
  const { PageLayoutItem, PageToolbar } = useContext(RenderFactoryContext);
  const {
    layout$,
    customParam$,
    documentation$,
    pageParam$,
    resetDocumentation,
  } = useContext(PageContext);
  const { lookups$, lookupsComplete$ } = useContext(LookupContext);

  const lookups = useObservableState(lookups$, undefined);
  const lookupsComplete = useObservableState(lookupsComplete$, undefined);

  const layout = useObservableState(layout$, undefined);
  const customParam = useObservableState(customParam$, undefined);
  const documentation = useObservableState(documentation$, undefined);
  const pageParam = useObservableState(pageParam$, undefined);

  return useMemo(() => {

    console.log('Rehydrating page');

    let key = 1;
  
    return <div className="h-100 mw-100 container-fluid shadow bg-white rounded d-flex flex-column overflow-hidden">
        {layout && lookups && lookupsComplete && customParam && PageToolbar && (
          <PageToolbar
            documentationIdentifier={layout.documentationEntity}
            title={layout.title}
            items={layout.toolbaritems}
          />
        )}
        {(layout && documentation && resetDocumentation) && (
          <DocumentationPopup
            title={layout.title ?? ''}
            documentation={documentation}
            close={() => resetDocumentation()}
          />
        )}
        {layout &&
          lookups &&
          lookupsComplete &&
          pageParam &&
          customParam &&
          layout.items &&
          PageLayoutItem && (
            <Container>
              {layout.items &&
                layout.items.map(item => (
                  <PageLayoutItem
                    key={key++}
                    layoutItem={item}
                    colCount={1}
                    params={pageParam}
                  />
                ))}
            </Container>
          )}
      </div>;
  }
  , [PageLayoutItem, PageToolbar, resetDocumentation, customParam, documentation, layout, lookups, lookupsComplete, pageParam]);
};
