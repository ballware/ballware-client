/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { createContext } from 'react';
import { CrudItem, ValueType, EditLayout } from '@ballware/meta-interface';

import { EditModes } from './editcontext';

/**
 * Context for instantiating context provider
 */
export interface ProviderFactoryContextState {
    /**
     * Instantiate page provider
     */
    PageProvider?: (props: { identifier: string; children: JSX.Element | Array<JSX.Element> }) => JSX.Element;

    /**
     * Instantiate generic entity metadata provider
     */
    MetaProvider?: (props: {
        entity: string;
        readOnly: boolean;
        headParams: Record<string, unknown>;
        initialCustomParam: Record<string, unknown>;
        children: JSX.Element | Array<JSX.Element>;
    }) => JSX.Element;

    /**
     * Instanticate crud provider 
     */
    CrudProvider?: (props: {
        query: string | undefined;
        initialFetchParams: Record<string, unknown> | undefined;
        children: JSX.Element | Array<JSX.Element>;
    }) => JSX.Element;

    /**
     * Instanticate lookup provider
     */
    LookupProvider?: (props: { children: JSX.Element | Array<JSX.Element> }) => JSX.Element;

    /**
     * Instantiate notification provider
     */
    NotificationProvider?: (props: { children: JSX.Element | Array<JSX.Element> }) => JSX.Element;

    /**
     * Instantiate resource owner user rights provider
     */
    ResourceOwnerRightsProvider?: (props: {
        client: string;
        secret: string;
        children: JSX.Element | Array<JSX.Element>;
    }) => JSX.Element;

    /**
     * Instantiate tenant provider
     */
    TenantProvider?: (props: { children: JSX.Element | Array<JSX.Element> }) => JSX.Element;

    /**
     * Instantiate item edit provider
     */
    EditProvider?: (props: {
        mode: EditModes;
        editLayout: EditLayout | undefined;
        item: CrudItem | Array<CrudItem> | ValueType;
        functionIdentifier?: string | undefined;
        children: JSX.Element | Array<JSX.Element>;
    }) => JSX.Element;

    /**
     * Instantiate statistic provider
     */
    StatisticProvider?: (props: {
        identifier: string;
        params: Record<string, unknown> | undefined;
        children: JSX.Element | Array<JSX.Element>;
    }) => JSX.Element;
}

export const ProviderFactoryContext = createContext<ProviderFactoryContextState>({} as ProviderFactoryContextState);
