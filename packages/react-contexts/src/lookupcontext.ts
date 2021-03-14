/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { createContext } from 'react';

/**
 * Data access adapter for fetching lookup data
 */
export interface LookupStoreDescriptor {
  /**
   * Fetch list of lookup records
   * @returns Promise resolving list of available lookup records
   */
  listFunc: () => Promise<Array<Record<string, unknown>>>;

  /**
   * Fetch lookup record by id
   * @param id Id of lookup record
   * @returns Promise resolving single lookup record for id
   */
  byIdFunc: (id: string) => Promise<Record<string, unknown>>;
}

/**
 * Data access adapter for fetching autocomplete lookup data
 */
export interface AutocompleteStoreDescriptor {
  /**
   * Fetch list of autocomplete entries
   */
  listFunc: () => Promise<Array<unknown>>;
}

/**
 * Descriptor for lookup and autocomplete datasource
 */
export interface LookupDescriptor {
  /**
   * Type of lookup descriptor
   */
  type: 'lookup' | 'autocomplete';

  /**
   * Data access adapter for fetching data for lookup/autocomplete source
   */
  store: LookupStoreDescriptor | AutocompleteStoreDescriptor;

  /**
   * Value property in fetched data items
   */
  valueMember?: string;

  /**
   * Display property in fetched data items
   */
  displayMember?: string;
}

/**
 * Creator for getting lookup descriptor with additional query param
 * @param param Param attached to lookup query
 */
export type LookupCreator = (param: string | Array<string>) => LookupDescriptor;

/**
 * Creator for getting autocomplete descriptor with additional query param
 * @param param Param attached to autocomplete query
 */
export type AutocompleteCreator = (
  param: string
) => AutocompleteStoreDescriptor;

/**
 * Request object for requesting lookup descriptor
 */
export interface LookupRequest {
  /**
   * Type of requested lookup
   */
  type:
    | 'lookup'
    | 'lookupwithparam'
    | 'pickvalue'
    | 'autocomplete'
    | 'autocompletewithparam'
    | 'state'
    | 'stateallowed';

  /**
   * Unique identifier for lookup in consumer
   */
  identifier: string;

  /**
   * Unique id for lookup  in metadata
   */
  lookupId?: string;

  /**
   * Value property in fetched lookup items specific for consumer (only for lookup, lookupwithparam)
   */
  valueMember?: string;

  /**
   * Display property in fetched lookup items specific for consumer (only for lookup, lookupwithparam)
   */
  displayMember?: string;

  /**
   * Entity identifier (only for pickvalue)
   */
  entity?: string;

  /**
   * Field identifier (only for pickvalue)
   */
  field?: string;
}

/**
 * Context for lookup request functionality
 */
export interface LookupContextState {
  /**
   * Container for created lookups
   */
  lookups?: Record<
    string,
    LookupDescriptor | LookupCreator | AutocompleteCreator | Array<unknown>
  >;

  /**
   * True if requested lookups are completely available
   */
  lookupsComplete?: boolean;

  /**
   * Request list of static required lookups in consumer
   * @param lookups Collection of lookup requests
   */
  createLookups?: (lookups: Array<LookupRequest>) => void;

  /**
   * Request additional lookup by unique identifier
   * @param identifier Unique global identifier of lookup
   * @param valueExpr Value property in fetched items
   * @param displayExpr Display property in fetched items
   */
  getGenericLookupByIdentifier?: (
    identifier: string,
    valueExpr: string,
    displayExpr: string
  ) => LookupDescriptor | undefined;
}

export const LookupContext = createContext({} as LookupContextState);
