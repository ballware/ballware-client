/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import {
  MetaStatisticApi,
  CompiledStatistic,
  CompiledStatisticCustomScripts,
  StatisticLayout,
  QueryParams,
} from '@ballware/meta-interface';
import { additionalParamsToUrl } from './util';
import JSON5 from 'json5';
import { map } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchApiError } from './error';

interface Statistic {
  Id: string;
  Entity: string;
  Identifier: string;
  Name: string;
  Layout: string;
  MappingScript?: string;
  CustomScripts?: string;
}

interface StatisticCustomScripts {
  argumentAxisCustomizeText?: string;
}

export const compileStatistic = (statistic: Statistic): CompiledStatistic => {
  const compiledStatistic = {
    id: statistic.Id,
    entity: statistic.Entity,
    identifier: statistic.Identifier,
    name: statistic.Name,
    layout: statistic.Layout
      ? (JSON5.parse(statistic.Layout) as StatisticLayout)
      : ({} as StatisticLayout),
  } as CompiledStatistic;

  if (statistic.MappingScript) {
    const compiledArgs = [
      'data',
      'layout',
      'customParam',
      'params',
      'lookups',
      'util',
      'callback',
    ];
    const compiledFn = Function.apply(
      Function,
      compiledArgs.concat(statistic.MappingScript)
    );

    compiledStatistic.mappingScript = compiledFn
      ? (data, layout, customParam, params, lookups, util, callback) =>
          compiledFn.apply(compiledFn, [
            data,
            layout,
            customParam,
            params,
            lookups,
            util,
            callback,
          ])
      : undefined;
  }

  if (statistic.CustomScripts) {
    compiledStatistic.customScripts = {} as CompiledStatisticCustomScripts;

    const scripts = JSON5.parse(
      statistic.CustomScripts
    ) as StatisticCustomScripts;

    if (scripts.argumentAxisCustomizeText) {
      const compiledArgs = ['layout', 'value', 'params', 'customParam', 'util'];
      const compiledFn = Function.apply(
        Function,
        compiledArgs.concat(scripts.argumentAxisCustomizeText)
      );

      compiledStatistic.customScripts.argumentAxisCustomizeText = compiledFn
        ? (layout, value, params, customParam, util) =>
            compiledFn.apply(compiledFn, [
              layout,
              value,
              params,
              customParam,
              util,
            ])
        : undefined;
    }
  }

  return compiledStatistic;
};

const metadataFunc = (serviceBaseUrl: string) => (
  token: string,
  identifier: string
) => {
  const url = `${serviceBaseUrl}api/statistic/metadataforidentifier?identifier=${encodeURIComponent(identifier)}`;

  return ajax<CompiledStatistic>({ url, headers: { Authorization: `Bearer ${token}` }})
    .pipe(map(response => response.response))
    .pipe(catchApiError);
};

const dataFunc = (serviceBaseUrl: string) => (
  token: string,
  identifier: string,
  params: QueryParams
) => {
  const url = `${serviceBaseUrl}api/statistic/dataforidentifier?identifier=${encodeURIComponent(identifier)}${additionalParamsToUrl(
    params
  )}`;

  return ajax<Array<Record<string, unknown>>>({ url, headers: { Authorization: `Bearer ${token}` }})
    .pipe(map(response => response.response))
    .pipe(catchApiError);
};

/**
 * Create adapter for statistic fetch operations with ballware.meta.service
 * @param serviceBaseUrl Base URL to connect to ballware.meta.service
 * @returns Adapter object providing data operations
 */
export function createMetaBackendStatisticApi(
  serviceBaseUrl: string
): MetaStatisticApi {
  return {
    metadataForStatistic: metadataFunc(serviceBaseUrl),
    dataForStatistic: dataFunc(serviceBaseUrl),
  } as MetaStatisticApi;
}
