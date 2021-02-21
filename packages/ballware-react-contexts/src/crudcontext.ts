/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { createContext } from 'react';
import { CrudItem, EntityCustomFunction, QueryParams } from '@ballware/meta-interface';

/**
 * Context for providing crud operations based parent meta entity context
 */
export interface CrudContextState {
    /**
     * Currently fetching items
     */
    isLoading?: boolean;

    /**
     * Fetch params used for current item fetch
     */
    fetchParams?: QueryParams;
    
    /**
     * Fetched items from data provider
     */
    fetchedItems?: Array<CrudItem>;

    /**
     * Current item for crud operations
     */
    item?: CrudItem;

    /**
     * Viewing current item
     */
    viewing?: boolean;

    /**
     * Adding current item
     */
    adding?: boolean;

    /**
     * Editing current item
     */
    editing?: boolean;

    /**
     * Deleting current item
     */
    deleteing?: boolean;

    /**
     * Custom edit operation active
     */
    customEditing?: boolean;

    /**
     * Function for current custom edit operation
     */
    customEditFunction?: EntityCustomFunction;

    /**
     * Prepared edit param for custom edit operation
     */
    customEditParam?: unknown;
    
    /**
     * Edit layout for current edit operation
     */
    editLayout?: string;

    /**
     * Refresh after edit operation pending
     */
    refreshing?: boolean;

    /**
     * Fetch items
     * @param params Provided query params
     */
    load?: (params?: QueryParams) => void;

    /**
     * Add new item
     * @param editLayout Edit layout to use for add operation
     */
    add?: (editLayout: string) => void;

    /**
     * View item
     * @param id Identifier of item
     * @param editLayout Edit layout to use for view operation
     */
    view?: (id: string, editLayout: string) => void;

    /**
     * Edit item
     * @param id Identifier of item
     * @param editLayout Edit layout to use for edit operation
     */
    edit?: (id: string, editLayout: string) => void;

    /**
     * Cancel/close edit operation
     */
    close?: () => void;

    /**
     * Request remove item
     * @param id Identifier of item
     */
    remove?: (id: string) => void;

    /**
     * Save changed/added item
     * @param item Edited item
     */
    save?: (item: CrudItem) => void;

    /**
     * Save changed/added multiple items
     * @param items Edited items
     */    
    saveBatch?: (items: CrudItem[]) => void;

    /**
     * Drop item
     * @param id Identifier of item to be dropped
     */
    drop?: (id: string) => void;

    /**
     * Execute custom edit operation
     * @param customFunction Selected custom function
     * @param items Selected items for edit operation (undefined if function type is 'add')
     */
    customEdit?: (customFunction: EntityCustomFunction, items?: Array<CrudItem>) => void;
}

export const CrudContext = createContext({} as CrudContextState);
