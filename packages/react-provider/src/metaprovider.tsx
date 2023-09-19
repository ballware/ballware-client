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
  PropsWithChildren,
  useMemo,
} from 'react';
import {
  CompiledEntityMetadata,
  QueryParams,
} from '@ballware/meta-interface';
import {
  MetaContext,
  MetaContextState,
  LookupContext,
  Lookups,
} from '@ballware/react-contexts';
import { extractLookupsFromEntityMetadata } from './shared/lookups';
import { useEntityApi, useNotification, useRequestLookups, useScriptUtil } from './hooks';

/**
 * Properties for generic meta provider
 */
export interface MetaProviderProps {
  /**
   * Entity identifier of generic entity
   */
  entity: string;

  /**
   * Provide only readonly functionality
   */
  readOnly: boolean;

  /**
   * Optional paraemeter provided by parent component (page and suchlike)
   */
  headParams?: QueryParams;

  /**
   * Custom param provided by parent component
   */
  initialCustomParam: Record<string, unknown>;
}

/**
 * Provides functionality for use of generic entities
 */
export const MetaProvider = ({
  entity,
  readOnly,
  headParams,
  initialCustomParam,
  children,
}: PropsWithChildren<MetaProviderProps>): JSX.Element => {
  
  const [value, setValue] = useState({
    readOnly
  } as MetaContextState);
  const [metaData, setMetaData] = useState<
    CompiledEntityMetadata | undefined
  >();
  const [customParam, setCustomParam] = useState<
    Record<string, unknown> | undefined
  >();
  const [documents, setDocuments] = useState<
    Array<{ id: string; text: string }> | undefined
  >();

  const { showError } = useNotification();

  const entityApi = useEntityApi();
  const scriptUtil = useScriptUtil();
  const requestLookups = useRequestLookups();

  const [lookups, setLookups] = useState<Lookups | undefined>();

  useEffect(() => {
    let fetchingCanceled = false;

    if (showError && entity && entityApi && requestLookups) {
      
      entityApi
        .fetchMetadataForEntity(entity)
        .then(result => {
          if (!fetchingCanceled) {
            setMetaData(result);
            setLookups(requestLookups(extractLookupsFromEntityMetadata(result)));
          }
        })
        .catch(reason => {
          showError(reason);

          if (!fetchingCanceled) {
            setMetaData(undefined);
          }
        });

      entityApi
        .fetchDocumentsForEntity(entity)
        .then(result => {
          if (!fetchingCanceled) {
            setDocuments(
              result.map(r => {
                const printMenuEntry = {} as { id: string; text: string };

                printMenuEntry.id = r.Id;
                printMenuEntry.text = r.Name;

                return printMenuEntry;
              })
            );
          }
        })
        .catch(reason => showError(reason));
    }

    return () => {
      fetchingCanceled = true;
    };
  }, [showError, entity, entityApi, requestLookups]);

  useEffect(() => {
    setValue(previousValue => {
      return {
        ...previousValue,
        application: metaData?.application,
        entity: metaData?.entity,
        displayName: metaData?.displayName ?? metaData?.entity,
        customFunctions: metaData?.customFunctions,
        templates: metaData?.templates,
        customScripts: metaData?.compiledCustomScripts,
        mappingScripts: metaData?.mappingScripts,
        gridLayouts: metaData?.gridLayouts,
        editLayouts: metaData?.editLayouts,
        baseUrl: metaData?.baseUrl      
      } as MetaContextState;
    });
  }, [metaData]);

  useEffect(() => {
    setValue(previousValue => {
      return {
        ...previousValue,
        customParam: customParam,
      } as MetaContextState;
    });
  }, [customParam]);

  useEffect(() => {
    setValue(previousValue => {
      return {
        ...previousValue,
        headParams: headParams,
      } as MetaContextState;
    });
  }, [headParams]);

  useEffect(() => {
    setValue(previousValue => {
      return {
        ...previousValue,
        documents: documents,
      } as MetaContextState;
    });
  }, [documents]);

  useEffect(() => {
    let fetchingCanceled = false;

    if (lookups && metaData && scriptUtil) {
      if (metaData.compiledCustomScripts?.prepareCustomParam) {
        metaData.compiledCustomScripts.prepareCustomParam(
          lookups,
          scriptUtil,
          p => {
            if (!fetchingCanceled) {
              setCustomParam(p);
            }
          }
        );
      } else {
        if (!fetchingCanceled) {
          setCustomParam(initialCustomParam ?? {});
        }
      }
    }

    return () => {
      fetchingCanceled = true;
    };
  }, [metaData, initialCustomParam, lookups, scriptUtil]);

  return <LookupContext.Provider value={useMemo(() => ({ lookups }), [lookups])}>
    <MetaContext.Provider value={value}>{children}</MetaContext.Provider>
  </LookupContext.Provider>;
};
