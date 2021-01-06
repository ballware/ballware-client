import { createContext } from 'react';
import { ScriptActions, EditUtil, ValueType, PageLayout } from '@ballware/meta-interface';

export interface PageContextState {
    layout?: PageLayout;

    customParam?: Record<string, unknown>;
    documentation?: string | undefined;
    loadDocumentation?: (entity: string) => void;
    resetDocumentation?: () => void;

    paramsInitialized?: (hidden: boolean, actions: ScriptActions) => void;
    paramEditorInitialized?: (name: string, editUtil: EditUtil, actions: ScriptActions) => void;
    paramEditorValueChanged?: (name: string, value: ValueType, editUtil: EditUtil, actions: ScriptActions) => void;
    paramEditorEvent?: (
        name: string,
        event: string,
        editUtil: EditUtil,
        actions: ScriptActions,
        param?: ValueType,
    ) => void;
}

export const PageContext = createContext({} as PageContextState);
