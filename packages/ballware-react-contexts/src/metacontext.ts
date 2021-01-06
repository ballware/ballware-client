import { createContext } from 'react';
import { EntityCustomFunction, CrudItem, GridLayout, EditLayout, EditUtil, ValueType } from '@ballware/meta-interface';
import { EditModes } from './editcontext';

export interface MetaContextState {
    displayName?: string;
    customFunctions?: Array<EntityCustomFunction>;

    getGridLayout?: (identifier: string) => GridLayout | undefined;
    getEditLayout?: (identifier: string) => EditLayout | undefined;

    attachmentFetchFunc?: (id: string) => Promise<Array<Record<string, unknown>>>;
    attachmentUploadFunc?: (id: string, file: File) => Promise<void>;
    attachmentOpenFunc?: (id: string, fileName: string) => Promise<string>;
    attachmentDeleteFunc?: (id: string, fileName: string) => Promise<void>;

    itemQueryFunc?: (query: string, params?: Record<string, unknown>) => Promise<Array<CrudItem>>;
    itemByIdFunc?: (id: string) => Promise<CrudItem>;
    itemNewFunc?: (params?: Record<string, unknown>) => Promise<CrudItem>;
    itemSaveFunc?: (item: CrudItem) => Promise<void>;
    itemSaveBatchFunc?: (items: CrudItem[]) => Promise<void>;
    itemRemoveFunc?: (id: string) => Promise<void>;

    customParam?: Record<string, unknown>;
    headParams?: Record<string, unknown>;
    documents?: { id: string; text: string }[];
    print?: (doc: string, ids: string[]) => void;
    addAllowed?: () => boolean;
    viewAllowed?: (item: CrudItem) => boolean;
    editAllowed?: (item: CrudItem) => boolean;
    deleteAllowed?: (item: CrudItem) => boolean;
    printAllowed?: (item: CrudItem) => boolean;
    customFunctionAllowed?: (item: CrudItem, customFunction: EntityCustomFunction) => boolean;

    mapIncomingItem?: (item: CrudItem) => CrudItem;
    mapOutgoingItem?: (item: CrudItem) => CrudItem;

    prepareCustomFunction?: (
        identifier: string,
        selection: Array<Record<string, unknown>> | undefined,
        execute: (param: Record<string, unknown>) => void,
        message: (message: string) => void,
    ) => void;
    evaluateCustomFunction?: (
        identifier: string,
        param: Record<string, unknown>,
        save: (param: Record<string, unknown>) => void,
        message: (message: string) => void,
    ) => void;

    prepareGridLayout?: (gridLayout: GridLayout) => void;
    prepareEditLayout?: (mode: EditModes, editLayout: EditLayout) => void;

    editorPreparing?: (mode: EditModes, item: Record<string, unknown>, layoutItem: unknown, identifier: string) => void;
    editorInitialized?: (
        mode: EditModes,
        item: Record<string, unknown>,
        editUtil: EditUtil,
        identifier: string,
    ) => void;
    editorEntered?: (mode: EditModes, item: Record<string, unknown>, editUtil: EditUtil, identifier: string) => void;
    editorValueChanged?: (
        mode: EditModes,
        item: Record<string, unknown>,
        editUtil: EditUtil,
        identifier: string,
        value: ValueType,
    ) => void;
    editorValidating?: (
        mode: EditModes,
        item: Record<string, unknown>,
        editUtil: EditUtil,
        identifier: string,
        value: ValueType,
        validation: string,
    ) => boolean;
    editorEvent?: (
        mode: EditModes,
        item: Record<string, unknown>,
        editUtil: EditUtil,
        identifier: string,
        event: string,
    ) => void;

    detailGridCellPreparing?: (
        mode: EditModes,
        item: Record<string, unknown>,
        detailItem: Record<string, unknown>,
        identifier: string,
        options: unknown,
    ) => void;
    detailGridRowValidating?: (
        mode: EditModes,
        item: Record<string, unknown>,
        detailItem: Record<string, unknown>,
        identifier: string,
    ) => string;
    initNewDetailItem?: (
        dataMember: string,
        item: Record<string, unknown>,
        detailItem: Record<string, unknown>,
    ) => void;
}

export const MetaContext = createContext({} as MetaContextState);
