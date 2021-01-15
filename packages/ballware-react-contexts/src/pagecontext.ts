import { createContext } from 'react';
import { EditUtil, ValueType, PageLayout } from '@ballware/meta-interface';

export interface PageContextState {
    layout?: PageLayout;

    pageParam?: Record<string, unknown>;

    customParam?: Record<string, unknown>;
    documentation?: string | undefined;
    loadDocumentation?: (entity: string) => void;
    resetDocumentation?: () => void;

    paramsInitialized?: (hidden: boolean) => void;
    paramEditorInitialized?: (name: string, editUtil: EditUtil) => void;
    paramEditorValueChanged?: (name: string, value: ValueType, editUtil: EditUtil) => void;
    paramEditorEvent?: (
        name: string,
        event: string,
        editUtil: EditUtil,
        param?: ValueType,
    ) => void;
}

export const PageContext = createContext({} as PageContextState);
