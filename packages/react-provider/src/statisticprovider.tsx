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
  StatisticContext,
  StatisticContextState,
  NotificationContext,
  PageContext,
  LookupContext,
} from '@ballware/react-contexts';
import {
  CompiledStatistic,
  QueryParams,
  StatisticLayout,
} from '@ballware/meta-interface';
import cloneDeep from 'lodash/cloneDeep';
import { useScriptUtil, useStatisticApi } from './hooks';

/**
 * Properties for statistic provider
 */
export interface StatisticProviderProps {
  /**
   * Unique identifier of statistic item
   */
  identifier: string;

  /**
   * Query params used to fetch statistic payload
   */
  params?: QueryParams;
}

/**
 * Provides statistic metadata and payload
 */
export const StatisticProvider = ({
  children,
  identifier,
  params,
}: PropsWithChildren<StatisticProviderProps>): JSX.Element => {
  const [value, setValue] = useState({} as StatisticContextState);
  const [metaData, setMetaData] = useState<CompiledStatistic | undefined>();
  const [layout, setLayout] = useState<StatisticLayout | undefined>();
  const [data, setData] = useState<
    Array<Record<string, unknown>> | undefined
  >();

  const { showError } = useContext(NotificationContext);
  const { customParam } = useContext(PageContext);
  const { lookups, lookupsComplete } = useContext(LookupContext);

  const statisticApi = useStatisticApi();
  const scriptUtil = useScriptUtil();

  useEffect(() => {
    if (identifier && showError && statisticApi) {
      statisticApi
        .fetchMetadataForStatistic(identifier)
        .then(result => {
          setMetaData(result);
        })
        .catch(reason => showError(reason));
    }
  }, [identifier, showError, statisticApi]);

  useEffect(() => {
    if (
      showError &&
      statisticApi &&
      identifier &&
      params &&
      metaData &&
      lookups &&
      lookupsComplete &&
      customParam &&
      scriptUtil
    ) {      
      statisticApi
        .fetchDataForStatistic(identifier, params)
        .then(result => {
          if (metaData.mappingScript) {
            const unpreparedLayout = cloneDeep(metaData.layout);

            metaData.mappingScript(
              result,
              unpreparedLayout as StatisticLayout,
              customParam,
              params,
              lookups,
              scriptUtil,
              (layout, result) => {
                setData(result);
                setLayout(layout);
              }
            );
          } else {
            setData(result);
            setLayout(metaData.layout);
          }
        })
        .catch(reason => showError(reason));
    }
  }, [
    showError,
    statisticApi,
    identifier,
    params,
    metaData,
    lookups,
    lookupsComplete,
    customParam,
    scriptUtil
  ]);

  useEffect(() => {
    if (metaData && layout && params && data && customParam && scriptUtil) {
      const argumentAxisCustomizeText = (value: unknown) => {
        if (metaData.customScripts?.argumentAxisCustomizeText) {
          return metaData.customScripts.argumentAxisCustomizeText(
            layout,
            value,
            params,
            customParam,
            scriptUtil
          );
        }

        return undefined;
      };

      setValue(previousValue => {
        return {
          ...previousValue,
          identifer: metaData.identifier,
          name: metaData.name,
          layout,
          params,
          data,
          argumentAxisCustomizeText,
        } as StatisticContextState;
      });
    }
  }, [metaData, layout, params, data, customParam, scriptUtil]);

  return (
    <StatisticContext.Provider value={value}>
      {children}
    </StatisticContext.Provider>
  );
};
