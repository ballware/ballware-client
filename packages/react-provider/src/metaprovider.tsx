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
} from 'react';
import {
  CompiledEntityMetadata,
  QueryParams,
} from '@ballware/meta-interface';
import {
  RightsContext,
  MetaContext,
  MetaContextState,
  SettingsContext,
  LookupContext,
  NotificationContext,
} from '@ballware/react-contexts';
import { createUtil } from './scriptutil';
import { extractLookupsFromEntityMetadata } from './shared/lookups';

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

  const { metaEntityApiFactory } = useContext(
    SettingsContext
  );
  const { token } = useContext(RightsContext);
  const { lookups, lookupsComplete, createLookups } = useContext(LookupContext);
  const { showError } = useContext(NotificationContext);

  useEffect(() => {
    let fetchingCanceled = false;

    if (showError && entity && token && metaEntityApiFactory) {
      const api = metaEntityApiFactory();

      api
        .metadataForEntity(token, entity)
        .then(result => {
          if (!fetchingCanceled) {
            setMetaData(result);
          }
        })
        .catch(reason => {
          showError(reason);

          if (!fetchingCanceled) {
            setMetaData(undefined);
          }
        });

      api
        .documentsForEntity(token, entity)
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
  }, [showError, entity, token, metaEntityApiFactory]);

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
    if (createLookups && metaData) {
      const lookups = extractLookupsFromEntityMetadata(metaData);

      createLookups(lookups);
    }
  }, [createLookups, metaData]);

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

    if (lookupsComplete && metaData) {
      if (metaData.compiledCustomScripts?.prepareCustomParam) {
        metaData.compiledCustomScripts.prepareCustomParam(
          lookups ?? {},
          createUtil(token as string),
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
  }, [lookupsComplete, metaData, initialCustomParam, lookups, token]);

  return <MetaContext.Provider value={value}>{children}</MetaContext.Provider>;
};
