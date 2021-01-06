import { createContext } from 'react';
import { CrudItem, ValueType, EditLayout } from '@ballware/meta-interface';

import { EditModes } from './editcontext';

export interface ProviderFactoryContextState {
    PageProviderFactory: (props: { identifier: string; children: JSX.Element | Array<JSX.Element> }) => JSX.Element;
    MetaProviderFactory: (props: {
        entity: string;
        readOnly: boolean;
        headParams: Record<string, unknown>;
        initialCustomParam: Record<string, unknown>;
        children: JSX.Element | Array<JSX.Element>;
    }) => JSX.Element;
    CrudProviderFactory: (props: {
        query: string | undefined;
        initialFetchParams: Record<string, unknown> | undefined;
        children: JSX.Element | Array<JSX.Element>;
    }) => JSX.Element;
    LookupProviderFactory: (props: { children: JSX.Element | Array<JSX.Element> }) => JSX.Element;
    NotificationProviderFactory: (props: { children: JSX.Element | Array<JSX.Element> }) => JSX.Element;
    RightsProviderFactory: (props: {
        client: string;
        secret: string;
        children: JSX.Element | Array<JSX.Element>;
    }) => JSX.Element;
    TenantProviderFactory: (props: { children: JSX.Element | Array<JSX.Element> }) => JSX.Element;
    EditProviderFactory: (props: {
        mode: EditModes;
        editLayout: EditLayout | undefined;
        item: CrudItem | Array<CrudItem> | ValueType;
        functionIdentifier?: string | undefined;
        children: JSX.Element | Array<JSX.Element>;
    }) => JSX.Element;
    StatisticProviderFactory: (props: {
        identifier: string;
        params: Record<string, unknown> | undefined;
        children: JSX.Element | Array<JSX.Element>;
    }) => JSX.Element;
}

export const ProviderFactoryContext = createContext<ProviderFactoryContextState>({} as ProviderFactoryContextState);
