/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  PropsWithChildren,
} from 'react';
import { CompiledTenant, NavigationLayoutItem } from '@ballware/meta-interface';
import {
  TenantContext,
  TenantContextState,
  RightsContext,
} from '@ballware/react-contexts';
import { useNotification, useTenantApi } from './hooks';

/**
 * Properties for tenant provider
 */
export interface TenantProviderProps {}

/**
 * Find pages in navigation tree
 * @param items navigation tree
 * @returns List of pages found in tree
 */
const findPages = (items: Array<NavigationLayoutItem>) => {
  const foundPages = [] as Array<NavigationLayoutItem>;

  items?.forEach(item => {
    if (item.type === 'page') {
      foundPages.push(item);
    } else if (item.items) {
      foundPages.push(...findPages(item.items));
    }
  });

  return foundPages;
};

/**
 * Provides tenant specific operations
 */
export const TenantProvider = ({
  children,
}: PropsWithChildren<TenantProviderProps>): JSX.Element => {
  const [tenant, setTenant] = useState<CompiledTenant>();
  const [pages, setPages] = useState<Array<NavigationLayoutItem>>();
  const [value, setValue] = useState({} as TenantContextState);

  const { session } = useContext(RightsContext);
  const { showError } = useNotification();

  const tenantApi = useTenantApi();

  const hasRight = useCallback(
    (right: string) => {
      if (tenant && session) {
        if (tenant.hasRight) {
          return tenant.hasRight(session, right);
        }
      }

      return false;
    },
    [tenant, session]
  );

  useEffect(() => {
    if (
      showError &&
      tenantApi &&
      session &&
      session.tenant
    ) {
      tenantApi
        .fetchMetadataForTenant(session.tenant as string)
        .then(result => setTenant(result))
        .catch(reason => showError(reason));
    } else {
      setTenant(undefined);
      setPages(undefined);
    }
  }, [showError, tenantApi, session]);

  useEffect(() => {
    if (tenant && session) {
      if (tenant.navigation?.items) {
        setPages(findPages(tenant.navigation.items));
      } else {
        setPages([]);
      }
    }
  }, [tenant, session]);

  useEffect(() => {
    setValue({
      name: tenant?.name,
      navigation: tenant?.navigation,
      templates: tenant?.templates ?? [],
      pages,
      hasRight,
    } as TenantContextState);
  }, [tenant, pages, hasRight]);

  return (
    <TenantContext.Provider value={value}>{children}</TenantContext.Provider>
  );
};
