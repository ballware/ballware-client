import { createContext } from 'react';
import { CrudItem, EntityCustomFunction } from '@ballware/meta-interface';

export interface CrudContextState {
    isLoading?: boolean;
    fetchParams?: Record<string, unknown>;
    fetchedItems?: Array<CrudItem>;
    documentation?: string;
    item?: CrudItem;
    viewing?: boolean;
    adding?: boolean;
    editing?: boolean;
    deleteing?: boolean;
    customEditing?: boolean;
    customEditFunction?: EntityCustomFunction;
    customEditParam?: unknown;
    editLayout?: string;
    refreshing?: boolean;
    error?: string;
    load?: (params: Record<string, unknown> | undefined) => void;
    add?: (editLayout: string) => void;
    view?: (id: string, editLayout: string) => void;
    edit?: (id: string, editLayout: string) => void;
    close?: () => void;
    remove?: (id: string) => void;
    save?: (item: CrudItem) => void;
    saveBatch?: (items: CrudItem[]) => void;
    drop?: (id: string) => void;
    customEdit?: (customFunction: EntityCustomFunction, items: Array<CrudItem>) => void;
}

export const CrudContext = createContext({} as CrudContextState);
