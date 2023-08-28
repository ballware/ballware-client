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
  useMemo,
  PropsWithChildren,
} from 'react';

import { BehaviorSubject, Observable, combineLatest, map, of, switchMap } from 'rxjs';

import { useObservable, useObservableState } from 'observable-hooks';

import {
  ScriptActions,
  EditUtil,
  ValueType,
  CompiledPageData
} from '@ballware/meta-interface';
import {
  PageContext,
  PageContextState,
  RightsContext,
  SettingsContext,
  NotificationContext,
  LookupContext,
  LookupRequest,
} from '@ballware/react-contexts';
import { createUtil } from './scriptutil';
import { catchApiError } from './error';
/*
import { useSearchParams } from 'react-router-dom';

import qs from 'qs';
import isEqual from 'lodash/isEqual';
*/
/**
 * Properties for page provider
 */
export interface PageProviderProps {
  /**
   * Identifier of page to use
   */
  identifier: string;
}

/**
 * Provides screen page functionality based on page metadata
 */
export const PageProvider = ({
  identifier,
  children,
}: PropsWithChildren<PageProviderProps>): JSX.Element => {
  
  //const [searchParams, setSearchParams] = useSearchParams();

  //const [pageData$, ] = useState(new BehaviorSubject<CompiledPageData | undefined>(undefined));

  const { metaPageApiFactory, metaDocumentationApiFactory } = useContext(
    SettingsContext
  );

  const { showInfo, showError } = useContext(NotificationContext);
  const { token$ } = useContext(RightsContext);
  const { createLookups, lookups$ } = useContext(LookupContext);

  const token = useObservableState(token$, undefined);
  
  const [pageData$, ] = useState(new BehaviorSubject<CompiledPageData | undefined>(undefined));
  
  useEffect(() => {
    if (identifier && token && showError) {
      metaPageApiFactory().pageDataForIdentifier(token, identifier)
        .subscribe(p => pageData$.next(p));
    }
  }, [identifier, metaPageApiFactory, showError, token, pageData$]);

  const [mutatedPageParam$, ] = useState(new BehaviorSubject<Record<string, unknown> | undefined>(undefined));

  const pageParam$ = useObservable(() => combineLatest([pageData$, mutatedPageParam$]).pipe(map(([pageData, mutatedPageParam]) => {
    return (pageData && !pageData?.layout?.toolbaritems?.length) ? {} : mutatedPageParam;
  })));
 
  const customParam$ = useObservable(() => combineLatest([pageData$, lookups$, token$])
    .pipe(switchMap(([pageData, lookups, token]) => {    
      if (lookups && token && pageData) {      
          return new Observable<Record<string, unknown>>((subscriber) => {
            if (pageData.compiledCustomScripts?.prepareCustomParam) {
              pageData.compiledCustomScripts.prepareCustomParam(
                lookups,
                createUtil(token),
                p => {
                  subscriber.next(p);
                }
              );
            } else {
              subscriber.next({});
            }
          });
      } else {
        return of(undefined);
      }
    })));

  const [documentation$, ] = useState(new BehaviorSubject<string | undefined>(undefined));


  

  
  
  const [value, setNewValue] = useState<PageContextState>({
    pageParam$,
    layout$: pageData$.pipe(map((page) => page?.layout)),
    customParam$,
    documentation$
  } as PageContextState);

  const lookups = useObservableState(lookups$, undefined);
  const pageData = useObservableState(pageData$, undefined);
  const pageParam = useObservableState(pageParam$, undefined);

  const scriptActions = useMemo(() => {
    return {
      loadData: params => {
        mutatedPageParam$.next(params);
      },
    } as ScriptActions;
  }, [mutatedPageParam$]);
  
  useEffect(() => {
    if (createLookups && pageData) {
      const lookupRequests = pageData.lookups?.map(l => {
        if (l.type === 1) {
          if (l.hasParam) {
            return {
              type: 'autocompletewithparam',
              identifier: l.identifier,
              lookupId: l.id,
            } as LookupRequest;
          } else {
            return {
              type: 'autocomplete',
              identifier: l.identifier,
              lookupId: l.id,
            } as LookupRequest;
          }
        } else {
          if (l.hasParam) {
            return {
              type: 'lookupwithparam',
              identifier: l.identifier,
              lookupId: l.id,
              valueMember: l.valueMember,
              displayMember: l.displayMember,
            } as LookupRequest;
          } else {
            return {
              type: 'lookup',
              identifier: l.identifier,
              lookupId: l.id,
              valueMember: l.valueMember,
              displayMember: l.displayMember,
            } as LookupRequest;
          }
        }
      });

      createLookups(lookupRequests);
    }
  }, [createLookups, pageData]);

  useEffect(() => {
    if (token && pageData && lookups && metaDocumentationApiFactory && showError && showInfo) {

      const loadDocumentation = (identifier: string) => {
        const api = metaDocumentationApiFactory();

        api
          .loadDocumentationForEntity(token, identifier)
          .pipe(s => catchApiError(s, showError))
          .subscribe(result => {
            if (result) {
              documentation$.next(result as string);            
            } else {
              showInfo('documentation.notifications.nodocumentation');
            }
          });
      }

      const resetDocumentation = () => {
        documentation$.next(undefined);
      }

      const paramsInitialized = (hidden: boolean) => {
        if (pageData.compiledCustomScripts?.paramsInitialized) {
          pageData.compiledCustomScripts?.paramsInitialized(
            hidden,
            lookups,
            createUtil(token),
            scriptActions,
            pageParam
          );
        }
      };

      const paramEditorInitialized = (name: string, editUtil: EditUtil) => {
        if (pageData.compiledCustomScripts?.paramEditorInitialized) {
          pageData.compiledCustomScripts?.paramEditorInitialized(
            name,
            editUtil,
            lookups,
            createUtil(token),
            scriptActions,
            pageParam
          );
        }
      };

      const paramEditorValueChanged = (
        name: string,
        value: ValueType,
        editUtil: EditUtil
      ) => {
        if (pageData.compiledCustomScripts?.paramEditorValueChanged) {
          pageData.compiledCustomScripts?.paramEditorValueChanged(
            name,
            value,
            editUtil,
            lookups,
            createUtil(token),
            scriptActions,
            pageParam
          );
        }
      };

      const paramEditorEvent = (
        name: string,
        event: string,
        editUtil: EditUtil,
        param?: ValueType
      ) => {
        if (pageData.compiledCustomScripts?.paramEditorEvent) {
          pageData.compiledCustomScripts?.paramEditorEvent(
            name,
            event,
            editUtil,
            lookups,
            createUtil(token),
            scriptActions,
            pageParam,
            param as Record<string, unknown>
          );
        }
      };
      
      setNewValue((prev) => ({
        ...prev,
        loadDocumentation,
        resetDocumentation,
        paramsInitialized,
        paramEditorInitialized,
        paramEditorValueChanged,
        paramEditorEvent
      }));  
    }
  }, [
    showError,
    showInfo,
    metaPageApiFactory,
    metaDocumentationApiFactory,
    scriptActions,
    token,
    lookups,
    pageData,
    pageParam,
    customParam$,
    documentation$
  ]);

/*
  
  const setPageParam = useCallback((nextPageParam: Record<string, unknown>) => {
    
    //const currentRouterPageParam = get(globalRouterState, 'page', {} as Record<string, unknown>);
    
    if (!isEqual(currentPageParam, nextPageParam)) {
      searchParams.set('page', qs.stringify(nextPageParam));
      
      setSearchParams(searchParams);
    }

    if (!isEqual(currentPageParam, nextPageParam)) {
      setCurrentPageParam(nextPageParam);      
    }
  }, [searchParams, setSearchParams, currentPageParam]);

  useEffect(() => {

    if (searchParams && !currentPageParam) {
      const nextPageParam = qs.parse(searchParams.get('page') ?? '');

      setCurrentPageParam(nextPageParam as Record<string, unknown>);
    }

  }, [currentPageParam, searchParams]);

  useEffect(() => {
    setValue(previousValue => {
      return {
        ...previousValue,
        pageParam: currentPageParam,
      } as PageContextState;
    });
  }, [currentPageParam]);

  
  useEffect(() => {
    if (pageData) {
      if (!pageData.layout?.toolbaritems) {
        setPageParam({});
      }
    }
  }, [pageData]);
*/
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};
