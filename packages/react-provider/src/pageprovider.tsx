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
  useCallback,
  useMemo,
  PropsWithChildren,
} from 'react';

import { useObservableState } from 'observable-hooks';

import {
  CompiledPageData,
  ScriptActions,
  EditUtil,
  ValueType,
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
import { useSearchParams } from 'react-router-dom';

import qs from 'qs';
import isEqual from 'lodash/isEqual';

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

  const [searchParams, setSearchParams] = useSearchParams();

  const [documentationEntity, setDocumentationEntity] = useState<
    string | undefined
  >();
  const [pageData, setPageData] = useState<CompiledPageData | undefined>();
  const [currentPageParam, setCurrentPageParam] = useState<Record<string, unknown> | undefined>();
  const [customParam, setCustomParam] = useState<Record<string, unknown> | undefined>();
  const [value, setValue] = useState({} as PageContextState);

  const { metaPageApiFactory, metaDocumentationApiFactory } = useContext(
    SettingsContext
  );
  const { showInfo, showError } = useContext(NotificationContext);
  const { token$ } = useContext(RightsContext);
  const { createLookups, lookups, lookupsComplete } = useContext(LookupContext);

  const token = useObservableState(token$, undefined);

  const loadDocumentation = useCallback(
    (entity: string) => setDocumentationEntity(entity),
    [setDocumentationEntity]
  );

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
    if (
      showError &&
      showInfo &&
      metaDocumentationApiFactory &&
      token &&
      documentationEntity
    ) {
      const api = metaDocumentationApiFactory();

      api
        .loadDocumentationForEntity(token, documentationEntity)
        .then(result => {
          if (result) {
            setValue(previousValue => {
              return {
                ...previousValue,
                documentation: result,
              } as PageContextState;
            });
          } else {
            setDocumentationEntity(undefined);
            showInfo('documentation.notifications.nodocumentation');
          }
        })
        .catch(reason => showError(reason));
    } else {
      setValue(previousValue => {
        return {
          ...previousValue,
          documentation: undefined,
        } as PageContextState;
      });
    }
  }, [
    showError,
    showInfo,
    metaDocumentationApiFactory,
    token,
    documentationEntity,
  ]);

  const resetDocumentation = useCallback(() => {
    setDocumentationEntity(undefined);
    setValue(previousValue => {
      return {
        ...previousValue,
        documentation: undefined,
      } as PageContextState;
    });
  }, []);

  const scriptActions = useMemo(() => {
    return {
      loadData: params => {
        setPageParam(params);
      },
    } as ScriptActions;
  }, []);

  useEffect(() => {
    setValue({
      loadDocumentation,
      resetDocumentation,
    } as PageContextState);
  }, [loadDocumentation, resetDocumentation]);

  useEffect(() => {
    if (showError && metaPageApiFactory && identifier && token) {
      const api = metaPageApiFactory();

      api
        .pageDataForIdentifier(token, identifier)
        .then(result => {
          setPageData(result);
        })
        .catch(reason => showError(reason));
    }
  }, [showError, metaPageApiFactory, identifier, token]);

  useEffect(() => {
    if (token && pageData && lookups && lookupsComplete) {
      if (pageData.compiledCustomScripts?.prepareCustomParam) {
        pageData.compiledCustomScripts.prepareCustomParam(
          lookups,
          createUtil(token),
          p => {
            setCustomParam(p);
          }
        );
      } else {
        setCustomParam({});
      }

      const paramsInitialized = (hidden: boolean) => {
        if (pageData.compiledCustomScripts?.paramsInitialized) {
          pageData.compiledCustomScripts?.paramsInitialized(
            hidden,
            lookups,
            createUtil(token),
            scriptActions,
            currentPageParam
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
            currentPageParam
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
            currentPageParam
          );
        }
      };

      const paramEditorEvent = (
        name: string,
        event: string,
        editUtil: EditUtil,
        param?: Record<string, unknown>
      ) => {
        if (pageData.compiledCustomScripts?.paramEditorEvent) {
          pageData.compiledCustomScripts?.paramEditorEvent(
            name,
            event,
            editUtil,
            lookups,
            createUtil(token),
            scriptActions,
            currentPageParam,
            param
          );
        }
      };

      setValue(previousValue => {
        return {
          ...previousValue,
          layout: pageData.layout,
          paramsInitialized,
          paramEditorInitialized,
          paramEditorValueChanged,
          paramEditorEvent,
        } as PageContextState;
      });
    }
  }, [token, pageData, lookups, lookupsComplete, scriptActions, currentPageParam]);

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
    if (pageData && customParam) {
      setValue(previousValue => {
        return {
          ...previousValue,
          pageData: pageData,
          customParam: customParam,
        } as PageContextState;
      });
    }
  }, [pageData, customParam]);

  useEffect(() => {
    if (pageData) {
      if (!pageData.layout?.toolbaritems) {
        setPageParam({});
      }
    }
  }, [pageData]);

  /*
  useEffect(() => {    
    setValue(previousValue => {
      return {
        ...previousValue,
        pageParam: pageParam,
      } as PageContextState;
    });

    if (search && pageParam) {
      const currentPageParam = qs.parse(search)?.page ?? {};
      const nextPageParam = qs.parse(qs.stringify({ page: pageParam }))?.page ?? {};

      if (!isEqual(currentPageParam, nextPageParam)) {
        push({ search: qs.stringify({ page: pageParam }) });
      }
    }

  }, [search, push, pageParam]);
  */

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};
