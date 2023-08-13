/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { useContext } from 'react';

import { DocumentationPopup } from './documentationpopup';
import { LookupContext } from '@ballware/react-contexts';
import { PageContext } from '@ballware/react-contexts';
import { RenderFactoryContext } from '@ballware/react-renderer';
import { Container } from './container';

export const Page = (): JSX.Element => {
  const { PageLayoutItem, PageToolbar } = useContext(RenderFactoryContext);
  const {
    layout,
    customParam,
    documentation,
    pageParam,
    resetDocumentation,
  } = useContext(PageContext);
  const { lookups, lookupsComplete } = useContext(LookupContext);

  if (resetDocumentation) {
    let key = 1;

    return (
      <div className="mw-100 container-fluid shadow bg-white rounded">
        {layout && lookups && lookupsComplete && customParam && PageToolbar && (
          <PageToolbar
            documentationIdentifier={layout.documentationEntity}
            title={layout.title}
            items={layout.toolbaritems}
          />
        )}
        {layout && documentation && (
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
      </div>
    );
  } else {
    return <React.Fragment />;
  }
};
