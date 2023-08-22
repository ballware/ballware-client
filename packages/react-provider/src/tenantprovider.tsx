/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import {
  useState,
  useEffect,
  useContext,
  PropsWithChildren,
} from 'react';

import { map, BehaviorSubject } from 'rxjs';

import { useObservableState } from 'observable-hooks';

import { CompiledTenant, NavigationLayout, NavigationLayoutItem } from '@ballware/meta-interface';
import {
  TenantContext,
  TenantContextState,
  RightsContext,
  SettingsContext,
  NotificationContext,
} from '@ballware/react-contexts';

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
}: PropsWithChildren<{}>): JSX.Element => {
  
  const [tenantData$, ] = useState(new BehaviorSubject<CompiledTenant|undefined>(undefined));
  
  const { metaTenantApiFactory } = useContext(SettingsContext);
  const { session$, token$, tenant$ } = useContext(RightsContext);
  const { showError } = useContext(NotificationContext);

  const [value, setValue] = useState<TenantContextState>({    
    name$: tenantData$.pipe(map((tenantData) => tenantData?.name)),
    navigation$: tenantData$.pipe(map((tenantData) => tenantData?.navigation)),
    pages$: tenantData$.pipe(map((tenantData) => (tenantData?.navigation?.items && findPages(tenantData?.navigation?.items))))
  });

  
  const session = useObservableState(session$, undefined);
  const token = useObservableState(token$, undefined);
  const tenant = useObservableState(tenant$, undefined);

  useEffect(() => {
    if (
      showError &&
      token &&
      session &&
      session.tenant
    ) {
      const api = metaTenantApiFactory();
  
      api
        .metadataForTenant(token, session.tenant as string)
        .then(tenant => {
          tenantData$.next(tenant);
          
          setValue((prev) => ({
            ...prev,
            hasRight: (right) => tenant.hasRight(session, right)
          }));
        })
        .catch(reason => showError(reason));
    }  
  }, [metaTenantApiFactory, showError, token, session, tenant, tenantData$]);

  return (
    <TenantContext.Provider value={value}>{children}</TenantContext.Provider>
  );
};
