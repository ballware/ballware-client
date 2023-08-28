/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { CrudItem } from '@ballware/meta-interface';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';

import { Observable, lastValueFrom, tap } from 'rxjs';

export function createReadonlyDatasource(
  fetchFunc: () => Observable<Array<Record<string, unknown>>>,
  mapFunction?: (item: Record<string, unknown>) => Record<string, unknown>,
  keyProperty = 'Id'
): DataSource {
  const dataStore = new CustomStore({
    loadMode: 'raw',
    key: keyProperty,
    load: function() {
      return lastValueFrom(fetchFunc());
    },
  });

  const dataSource = new DataSource({
    store: dataStore,
    map: mapFunction,
  });

  return dataSource;
}

export function createEditableGridDatasource(
  items: Array<CrudItem>,
  save: (item: CrudItem) => void,
  keyProperty = 'Id'
) {
  const dataStore = new CustomStore({
    loadMode: 'raw',
    key: keyProperty,
    load: function() {
      return Promise.resolve(items);
    },
    byKey: function(key: string) {
      const item = items?.find(item => item.Id === key);

      if (!item) {
        throw `Item with key ${key} not found`;
      }
      
      return Promise.resolve(item);
    },
    update: function(key: string, values: CrudItem) {
      let item = items?.find(item => item[keyProperty] === key);

      if (item) {
        item = Object.assign(item, values);

        save(item);

        return Promise.resolve({ key: key, values: item });
      }

      return Promise.reject(`Item with key ${key} not found`);
    },
  });

  const dataSource = new DataSource({
    store: dataStore,
  });

  return dataSource;
}

export function createArrayDatasource(
  data: any[],
  keyProperty = 'Id'
): DataSource {
  const dataSource = new DataSource({
    store: {
      type: 'array',
      key: keyProperty,
      data: data,
    },
  });

  return dataSource;
}

interface LookupCache {
  [key: string]: any;
}

export function createLookupDataSource(
  fetchListFunc: () => Observable<Array<Record<string, unknown>>>,
  byIdFunc: (id: string) => Observable<Record<string, unknown>>,
  keyProperty = 'Id'
): DataSource {
  const valueCache: LookupCache = {};

  const dataStore = new CustomStore({
    key: keyProperty,
    loadMode: 'raw',
    load: function() {
      return lastValueFrom(fetchListFunc());
    },
    byKey: function(key: string|undefined) {
      if (
        typeof key === 'undefined' ||
        key === '00000000-0000-0000-0000-000000000000'
      ) {
        return null;
      }

      if (valueCache[key]) {
        return valueCache[key];
      }

      return lastValueFrom(byIdFunc(key).pipe(tap((result) => {
        valueCache[key] = result;

        return result;
      })));
    },
  });

  const dataSource = new DataSource({
    store: dataStore,
  });

  return dataSource;
}

export function createAutocompleteDataSource(
  fetchFunc: () => Observable<Array<unknown>>
): DataSource {
  const dataStore = new CustomStore({
    loadMode: 'raw',
    load: function() {
      return lastValueFrom(fetchFunc());
    },
  });

  const dataSource = new DataSource({
    store: dataStore,
  });

  return dataSource;
}
