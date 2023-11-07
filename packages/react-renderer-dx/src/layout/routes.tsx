/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { PropsWithChildren, useContext, useMemo } from 'react';
import { Switch, Redirect } from 'react-router-dom';

import {
  ProviderFactoryContext,
  RightsContext,
  TenantContext,
} from '@ballware/react-contexts';

import { PrivateRoute } from './privateroute';

import { RenderFactoryContext } from '@ballware/react-renderer';

export interface RoutesProps {}

export const Routes = ({ children }: PropsWithChildren<RoutesProps>) => {
  const { session } = useContext(RightsContext);
  const { navigation, pages, hasRight } = useContext(TenantContext);
  const { Page } = useContext(RenderFactoryContext);
  const { PageProvider } = useContext(ProviderFactoryContext);

  return useMemo(() => {
    let pageKey = 1;

    const renderedPages = [children] as Array<JSX.Element>;

    if (navigation?.defaultUrl) {
      renderedPages.push(
        <Redirect
          key={pageKey++}
          exact
          path="/"
          to={`/${navigation?.defaultUrl}`}
        />
      );
    }

    if (
      PageProvider &&
      session &&
      pages &&
      hasRight &&
      Page
    ) {
      renderedPages.push(
        ...pages.map(p => (
          <PrivateRoute
            key={pageKey++}
            path={`/${p.options.url?.toLowerCase() ??
              'unknown'}/:action(view|edit)?/:id?`}
            allowed={() => hasRight(`generic.page.${p.options.page ?? 'unknown'}`)}
            render={() => (
              <PageProvider identifier={p.options.page ?? 'unknown'}>
                <Page />
              </PageProvider>
            )}
          />
        ))
      );
    }

    return (
      <Switch>
        {renderedPages}
      </Switch>
    );
  }, [
    navigation,
    pages,
    hasRight,
    session,
    PageProvider,
    Page,
    children,
  ]);
};
