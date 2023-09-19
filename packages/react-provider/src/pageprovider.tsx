/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  PropsWithChildren,
} from 'react';
import {
  CompiledPageData,
  ScriptActions,
  EditUtil,
  ValueType,
} from '@ballware/meta-interface';
import {
  PageContext,
  PageContextState,
  LookupContext,
  Lookups,
} from '@ballware/react-contexts';
import { useHistory, useLocation } from 'react-router-dom';

import qs from 'qs';
import isEqual from 'lodash/isEqual';
import get from 'lodash/get';
import set from 'lodash/set';
import { useDocumentationApi, useNotification, usePageApi, useRequestLookups, useScriptUtil } from './hooks';
import { extractLookupsFromPageMetadata } from './shared/lookups';

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

  const { search } = useLocation();
  const { push } = useHistory();

  const [documentationEntity, setDocumentationEntity] = useState<
    string | undefined
  >();
  const [pageData, setPageData] = useState<CompiledPageData | undefined>();
  const [currentPageParam, setCurrentPageParam] = useState<Record<string, unknown> | undefined>();
  const [customParam, setCustomParam] = useState<unknown | undefined>();
  const [value, setValue] = useState({} as PageContextState);

  const [lookups, setLookups] = useState<Lookups | undefined>();

  const { showInfo, showError } = useNotification();

  const requestLookups = useRequestLookups();

  const pageApi = usePageApi();
  const documentationApi = useDocumentationApi();
  const scriptUtil = useScriptUtil();

  const loadDocumentation = useCallback(
    (entity: string) => setDocumentationEntity(entity),
    [setDocumentationEntity]
  );

  const setPageParam = useCallback((nextPageParam: Record<string, unknown>) => {
    const globalRouterState = qs.parse(search, {ignoreQueryPrefix: true});
    
    if (!isEqual(currentPageParam, nextPageParam)) {
      set(globalRouterState, 'page', nextPageParam);

      push({ search: qs.stringify(globalRouterState) });
    }

    if (!isEqual(currentPageParam, nextPageParam)) {
      setCurrentPageParam(nextPageParam);      
    }
  }, [search, push]);

  useEffect(() => {

    if (search && !currentPageParam) {
      const globalRouterState = qs.parse(search, {ignoreQueryPrefix: true});
      setCurrentPageParam(get(globalRouterState, 'page', {} as Record<string, unknown>) as Record<string, unknown>);
    }

  }, [currentPageParam, search]);

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
      documentationApi &&
      documentationEntity
    ) {
      documentationApi
        .fetchDocumentationForEntity(documentationEntity)
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
    documentationApi,
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
    if (showError && pageApi && identifier && requestLookups) {      
      pageApi
        .fetchPageDataForIdentifier(identifier)
        .then(result => {
          setPageData(result);
          setLookups(requestLookups(extractLookupsFromPageMetadata(result)));
        })
        .catch(reason => showError(reason));
    }
  }, [showError, pageApi, identifier, requestLookups]);

  useEffect(() => {
    if (scriptUtil && pageData && lookups) {
      if (pageData.compiledCustomScripts?.prepareCustomParam) {
        pageData.compiledCustomScripts.prepareCustomParam(
          lookups,
          scriptUtil,
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
            scriptUtil,
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
            scriptUtil,
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
            scriptUtil,
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
            scriptUtil,
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
  }, [scriptUtil, pageData, lookups, scriptActions, currentPageParam]);

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

  return <LookupContext.Provider value={useMemo(() => ({ lookups }), [lookups])}>
    <PageContext.Provider value={value}>{children}</PageContext.Provider>
  </LookupContext.Provider>;
};
