/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { useCallback, useContext, useMemo } from 'react';

import {
  ProviderFactoryContext,
  TenantContext,
} from '@ballware/react-contexts';

import { PrivateRoute } from './privateroute';

import { RenderFactoryContext } from '@ballware/react-renderer';
import { Navigate, Route, Routes as ReactRoutes } from 'react-router-dom';
import { NavigationLayoutItem } from '@ballware/meta-interface';

export const Routes = () => {
  const { navigation, pages, hasRight } = useContext(TenantContext);
  const { Page } = useContext(RenderFactoryContext);
  const { LookupProvider, PageProvider } = useContext(ProviderFactoryContext);

  const pageFactory = useCallback((p: NavigationLayoutItem) => {
    return <PrivateRoute allowed={() => hasRight ? hasRight(`generic.page.${p.options.page ?? 'unknown'}`) : false}>
      {Page && <LookupProvider>
        <PageProvider identifier={p.options.page ?? 'unknown'}>
          <Page />
        </PageProvider>
      </LookupProvider>}
    </PrivateRoute>;
  }, [LookupProvider, PageProvider, Page, hasRight]);

  return useMemo(() => {
    let pageKey = 1;

    const renderedPages = [] as Array<JSX.Element>;

    if (navigation?.defaultUrl) {
      renderedPages.push(
        <Route
          key={pageKey++}
          path="/"
          element={<Navigate to={`/${navigation?.defaultUrl}`}/>}
        />
      );
    }

    if (pageFactory &&
      pages
    ) {
      renderedPages.push(
        ...pages.map(p => (
          <Route key={pageKey++} path={`/${p.options.url?.toLowerCase() ??
            'unknown'}/:action(view|edit)?/:id?`} Component={() => pageFactory(p)}/>))
      );
    }

    return <ReactRoutes>{renderedPages}</ReactRoutes>;
  }, [
    navigation,
    pages,
    pageFactory
  ]);
};
