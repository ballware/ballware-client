/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { createContext } from 'react';
import { EntityCustomFunction, CrudItem, GridLayout, EditLayout, EditUtil, ValueType, QueryParams, EditLayoutItemOptions, GridLayoutColumn } from '@ballware/meta-interface';
import { EditModes } from './editcontext';

/**
 * Context for generic entity metadata functionality
 */
export interface MetaContextState {
    /**
     * Display name of generic entity
     */
    displayName?: string;

    /**
     * Collection of available custom crud functions for entity
     */
    customFunctions?: Array<EntityCustomFunction>;

    /**
     * Get grid layout by identifier from entity metadata
     * @param identifier Unique identifier of grid layout
     * @returns Grid layout metadata if available
     */
    getGridLayout?: (identifier: string) => GridLayout | undefined;

    /**
     * Get edit layout by identifier from entity metadata
     * @param identifier Unique identifier of edit layout
     * @returns Edit layout metadata if available
     */
    getEditLayout?: (identifier: string) => EditLayout | undefined;

    /**
     * Fetch list of items
     * @param query Identifier of query to use for fetch
     * @param params Optional parameter values for query
     * @returns Promise resolving collection of fetched items
     */
    query?: (query: string, params?: QueryParams) => Promise<Array<CrudItem>>;

    /**
     * Fetch item by id
     * @param id: Unique identifier of item to fetch
     * @returns Promise resolving item by id if available
     */
    byId?: (id: string) => Promise<CrudItem>;

    /**
     * Fetch new prepared item for add
     * @param params Optional parameter values for initialization
     */
    create?: (params?: QueryParams) => Promise<CrudItem>;

    /**
     * Save changed or add new item
     * @param item Changed or new created item
     * @returns Promise resolving when save operation has completed
     */
    save?: (item: CrudItem) => Promise<void>;

    /**
     * Save collection of changed or new created items
     * @param items Collection of items
     * @returns Promise resolving when save operation has completed
     */
    saveBatch?: (items: CrudItem[]) => Promise<void>;

    /**
     * Drop item by id
     * @param id Unique identifier of item to drop
     * @returns Promise resolving when drop operation has completed
     */
    drop?: (id: string) => Promise<void>;

    /**
     * Prepared custom param object used by custom scripts
     */
    customParam?: Record<string, unknown>;

    /**
     * Param object inherited by container (page or parent entity for example)
     */
    headParams?: QueryParams

    /**
     * Collection of available print documents for entity
     */
    documents?: { id: string; text: string }[];

    /**
     * Execute print operation
     * @param doc Identifier of print document
     * @param ids Collection of selected item ids to print
     */
    print?: (doc: string, ids: string[]) => void;

    /**
     * Check if add operation is allowed for current user
     * @returns true if add is allowed
     */
    addAllowed?: () => boolean;

    /**
     * Check if view details operation is allowed for current user
     * @param item Item to be viewed
     * @returns true if view is allowed
     */
    viewAllowed?: (item: CrudItem) => boolean;

    /**
     * Check if edit operation is allowed for current user
     * @param item Item to be edited
     * @returns true if edit is allowed
     */
    editAllowed?: (item: CrudItem) => boolean;

    /**
     * Check if drop operation is allowed for current user
     * @param item Item to be dropped
     * @returns true if drop is allowed
     */
    dropAllowed?: (item: CrudItem) => boolean;

    /**
     * Check if print operation is allowed for current user
     * @param item Item to be printed
     * @returns true if print is allowed
     */
    printAllowed?: (item: CrudItem) => boolean;

    /**
     * Check if custom edit function is allowed for current user
     * @param item Item to be edited
     * @param customFunction Function used for editing
     * @returns true if custom function is allowed
     */
    customFunctionAllowed?: (item: CrudItem, customFunction: EntityCustomFunction) => boolean;

    /**
     * Prepare fetched item for usage in frontend
     * @param item Item fetched by backend
     * @returns Mapped item for frontend
     */
    mapIncomingItem?: (item: CrudItem) => CrudItem;

    /**
     * Prepare changed item for usage in backend
     * @param item Item modified in frontend
     * @returns Mapped item for backend
     */
    mapOutgoingItem?: (item: CrudItem) => CrudItem;

    /**
     * Prepare item data for custom edit function
     * @param identifier Identifier of custom function
     * @param selection Collection of selected items
     * @param execute Execute callback containing prepared edit item data
     * @param message Message callback for notifying user with reason why edit operation is canceled
     */
    prepareCustomFunction?: (
        identifier: string,
        selection: Array<Record<string, unknown>> | undefined,
        execute: (param: Record<string, unknown>) => void,
        message: (message: string) => void,
    ) => void;

    /**
     * Evaluate item data for save operation
     * @param identifier Identifier of custom function
     * @param param Edited data in operation
     * @param save Save callback for storing item data in backend
     * @param messsage Message callback for notifying user with reason why save operation is declined
     */
    evaluateCustomFunction?: (
        identifier: string,
        param: Record<string, unknown>,
        save: (param: Record<string, unknown>) => void,
        message: (message: string) => void,
    ) => void;

    /**
     * Prepare grid layout by custom script
     * @param gridLayout Grid layout to be prepared
     */
    prepareGridLayout?: (gridLayout: GridLayout) => void;

    /**
     * Prepare edit layout by custom script
     * @param mode Edit mode currently executed
     * @param editLayout Edit layout to be prepared
     */
    prepareEditLayout?: (mode: EditModes, editLayout: EditLayout) => void;

    /**
     * Prepare editor metadata by custom script
     * @param mode Edit mode currently executed
     * @param item Item to be edited
     * @param layoutItem Item metadata to be prepared
     * @param identifier Data member identifier of current editor
     */
    editorPreparing?: (mode: EditModes, item: Record<string, unknown>, layoutItem: EditLayoutItemOptions, identifier: string) => void;

    /**
     * Customize instanciated editor component before edit
     * @param mode Edit mode currently executed
     * @param item Item to be edited
     * @param editUtil Adapter for accessing editor components
     * @param identifier Data member identifier of current editor
     */
    editorInitialized?: (
        mode: EditModes,
        item: Record<string, unknown>,
        editUtil: EditUtil,
        identifier: string,
    ) => void;

    /**
     * Customize editor entered for editing
     * @param mode Edit mode currently executed
     * @param item Item to be edited
     * @param editUtil Adapter for accessing editor components
     * @param identifier Data member identifier of current editor
     */
    editorEntered?: (mode: EditModes, item: Record<string, unknown>, editUtil: EditUtil, identifier: string) => void;

    /**
     * Editor value has changed
     * @param mode Edit mode currently executed
     * @param item Item to be edited
     * @param editUtil Adapter for accessing editor components
     * @param identifier Data member identifier of current editor
     * @param value Current value of data member
     */
    editorValueChanged?: (
        mode: EditModes,
        item: Record<string, unknown>,
        editUtil: EditUtil,
        identifier: string,
        value: ValueType,
    ) => void;

    /**
     * Editor value custom validation requested
     * @param mode Edit mode currently executed
     * @param item Item to be edited
     * @param editUtil Adapter for accessing editor components
     * @param identifier Data member identifier of current editor
     * @param value Current value of data member
     * @param validation Identifier of custom validation rule
     */ 
    editorValidating?: (
        mode: EditModes,
        item: Record<string, unknown>,
        editUtil: EditUtil,
        identifier: string,
        value: ValueType,
        validation: string,
    ) => boolean;

    /**
     * Editor event triggered
     * @param mode Edit mode currently executed
     * @param item Item to be edited
     * @param editUtil Adapter for accessing editor components
     * @param identifier Data member identifier of current editor
     * @param event Event identifier
     */ 
    editorEvent?: (
        mode: EditModes,
        item: Record<string, unknown>,
        editUtil: EditUtil,
        identifier: string,
        event: string,
    ) => void;

    /**
     * Modify options for detail grid cell before rendering
     * @param mode Edit mode currently executed
     * @param item Parent item
     * @param detailItem Detail item in detail grid row
     * @param identifier Data member identifier of current cell
     * @param options Options for cell
     */
    detailGridCellPreparing?: (
        mode: EditModes,
        item: Record<string, unknown>,
        detailItem: Record<string, unknown>,
        identifier: string,
        options: GridLayoutColumn,
    ) => void;

    /**
     * Validate changed detail row before saving 
     * @param mode Edit mode currently executed
     * @param item Parent item
     * @param detailItem Detail item in detail grid row
     * @param identifier Data member identifier of current cell
     * @returns Validation message if validation failed, undefined if validation succeeded
     */
    detailGridRowValidating?: (
        mode: EditModes,
        item: Record<string, unknown>,
        detailItem: Record<string, unknown>,
        identifier: string,
    ) => string;

    /**
     * Initialize new generated detail item
     * @param dataMember Data member identifier of detail collection
     * @param item Parent item
     * @param detailItem New generated detail item
     */
    initNewDetailItem?: (
        dataMember: string,
        item: Record<string, unknown>,
        detailItem: Record<string, unknown>,
    ) => void;
}

export const MetaContext = createContext({} as MetaContextState);
