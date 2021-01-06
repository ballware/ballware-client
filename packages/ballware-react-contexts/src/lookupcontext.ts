import { createContext } from 'react';

export interface LookupStoreDescriptor {
    listFunc: () => Promise<Array<Record<string, unknown>>>;
    byIdFunc: (id: string) => Promise<Record<string, unknown>>;
}

export interface AutocompleteStoreDescriptor {
    listFunc: () => Promise<Array<unknown>>;
}

export interface LookupDescriptor {
    type: 'lookup' | 'autocomplete';
    store: LookupStoreDescriptor | AutocompleteStoreDescriptor;
    valueMember?: string;
    displayMember?: string;
}

export type LookupCreator = (param: string | Array<string>) => LookupDescriptor;
export type AutocompleteCreator = (param: string) => AutocompleteStoreDescriptor;

export interface LookupRequest {
    type:
        | 'lookup'
        | 'lookupwithparam'
        | 'pickvalue'
        | 'autocomplete'
        | 'autocompletewithparam'
        | 'state'
        | 'stateallowed';
    identifier: string;
    lookupId?: string;
    valueMember?: string;
    displayMember?: string;
    entity?: string;
    field?: string;
}

export interface LookupContextState {
    lookups?: Record<string, LookupDescriptor | LookupCreator | AutocompleteCreator | Array<unknown>>;
    lookupsComplete?: boolean;
    createLookups?: (lookups: Array<LookupRequest>) => void;
    getGenericLookupByIdentifier?: (
        identifier: string,
        valueExpr: string,
        displayExpr: string,
    ) => LookupDescriptor | undefined;
}

export const LookupContext = createContext({} as LookupContextState);
