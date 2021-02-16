/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { createContext, PropsWithChildren } from 'react';
import { CrudItem, ValueType, EditLayout } from '@ballware/meta-interface';

import { EditModes } from './editcontext';
import { UserInfoMappingFunc } from '@ballware/identity-interface';

/**
 * Context for instantiating context provider
 */
export interface ProviderFactoryContextState {
    /**
     * Instantiate page provider
     */
    PageProvider?: (props: PropsWithChildren<{ identifier: string; }>) => JSX.Element;

    /**
     * Instantiate generic entity metadata provider
     */
    MetaProvider?: (props: PropsWithChildren<{
        entity: string;
        readOnly: boolean;
        headParams: Record<string, unknown>;
        initialCustomParam: Record<string, unknown>;
    }>) => JSX.Element;

    /**
     * Instanticate crud provider 
     */
    CrudProvider?: (props: PropsWithChildren<{
        query: string | undefined;
        initialFetchParams: Record<string, unknown> | undefined;
    }>) => JSX.Element;

    /**
     * Instanticate lookup provider
     */
    LookupProvider?: (props: PropsWithChildren<{}>) => JSX.Element;

    /**
     * Instantiate notification provider
     */
    NotificationProvider?: (props: PropsWithChildren<{}>) => JSX.Element;

    /**
     * Instantiate resource owner user rights provider
     */
    ResourceOwnerRightsProvider?: (props: PropsWithChildren<{
        client: string;
        secret: string;        
        userinfoMapper: UserInfoMappingFunc;
    }>) => JSX.Element;

    /**
     * Instantiate tenant provider
     */
    TenantProvider?: (props: { children: JSX.Element | Array<JSX.Element> }) => JSX.Element;

    /**
     * Instantiate item edit provider
     */
    EditProvider?: (props: PropsWithChildren<{
        mode: EditModes;
        editLayout: EditLayout | undefined;
        item: CrudItem | Array<CrudItem> | ValueType;
        functionIdentifier?: string | undefined;
    }>) => JSX.Element;

    /**
     * Instantiate statistic provider
     */
    StatisticProvider?: (props: PropsWithChildren<{
        identifier: string;
        params: Record<string, unknown> | undefined;        
    }>) => JSX.Element;
}

export const ProviderFactoryContext = createContext<ProviderFactoryContextState>({} as ProviderFactoryContextState);
