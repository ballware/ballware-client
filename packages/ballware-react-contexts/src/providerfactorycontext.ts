import { createContext } from 'react';
import { CrudItem, ValueType, EditLayout } from '@ballware/meta-interface';

import { EditModes } from './editcontext';

export interface ProviderFactoryContextState {
    PageProvider: (props: { identifier: string; children: JSX.Element | Array<JSX.Element> }) => JSX.Element;
    MetaProvider: (props: {
        entity: string;
        readOnly: boolean;
        headParams: Record<string, unknown>;
        initialCustomParam: Record<string, unknown>;
        children: JSX.Element | Array<JSX.Element>;
    }) => JSX.Element;
    CrudProvider: (props: {
        query: string | undefined;
        initialFetchParams: Record<string, unknown> | undefined;
        children: JSX.Element | Array<JSX.Element>;
    }) => JSX.Element;
    LookupProvider: (props: { children: JSX.Element | Array<JSX.Element> }) => JSX.Element;
    NotificationProvider: (props: { children: JSX.Element | Array<JSX.Element> }) => JSX.Element;
    RightsProvider: (props: {
        client: string;
        secret: string;
        children: JSX.Element | Array<JSX.Element>;
    }) => JSX.Element;
    TenantProvider: (props: { children: JSX.Element | Array<JSX.Element> }) => JSX.Element;
    EditProvider: (props: {
        mode: EditModes;
        editLayout: EditLayout | undefined;
        item: CrudItem | Array<CrudItem> | ValueType;
        functionIdentifier?: string | undefined;
        children: JSX.Element | Array<JSX.Element>;
    }) => JSX.Element;
    StatisticProvider: (props: {
        identifier: string;
        params: Record<string, unknown> | undefined;
        children: JSX.Element | Array<JSX.Element>;
    }) => JSX.Element;
}

export const ProviderFactoryContext = createContext<ProviderFactoryContextState>({} as ProviderFactoryContextState);
