import { createContext } from 'react';
import { CrudItem, ValueType, EditLayout } from '@ballware/meta-interface';

export enum EditModes {
    VIEW = 'VIEW',
    EDIT = 'EDIT',
    CREATE = 'CREATE',
}

export interface EditContextState {
    mode?: EditModes;
    editLayout?: EditLayout;
    item?: CrudItem | Array<CrudItem> | ValueType;
    functionIdentifier?: string;
    setItem?: (item: CrudItem | ValueType) => void;
}

export const EditContext = createContext({} as EditContextState);
