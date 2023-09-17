import { RightsContext, SettingsContext } from "@ballware/react-contexts"
import { useContext, useMemo } from "react"

export interface LookupApiOperations {
    fetchSelectListForLookup: (
        lookup: string
    ) => Promise<Array<Record<string, unknown>>>;

    fetchSelectByIdForLookup: (
        lookup: string,
        id: string
    ) => Promise<Record<string, unknown>>;

    fetchSelectListForLookupIdentifier: (
        identifier: string
    ) => Promise<Array<Record<string, unknown>>>;

    fetchSelectByIdForLookupIdentifier: (
        identifier: string,
        id: string
    ) => Promise<Record<string, unknown>>;

    fetchSelectListForLookupWithParam: (
        lookup: string,
        param: unknown
    ) => Promise<Array<Record<string, unknown>>>;

    fetchSelectByIdForLookupWithParam: (
        lookup: string,
        param: unknown,
        id: string
    ) => Promise<Record<string, unknown>>;

    fetchAutoCompleteForLookup: (
        lookup: string
    ) => Promise<Array<unknown>>;

    fetchAutoCompleteForLookupWithParam: (
        lookup: string,
        param: unknown
    ) => Promise<Array<unknown>>;
}

export const useLookupApi = () => {
    const { token } = useContext(RightsContext);
    const { metaLookupApi } = useContext(SettingsContext);

    return useMemo(() => ({
        fetchSelectListForLookup: (token) ? (lookup) => metaLookupApi.selectListForLookup(token, lookup) : undefined,    
        fetchSelectByIdForLookup: (token) ? (lookup, id) => metaLookupApi.selectByIdForLookup(token, lookup)(id) : undefined, 
        fetchSelectListForLookupIdentifier: (token) ? (lookup) => metaLookupApi.selectListForLookupIdentifier(token, lookup) : undefined, 
        fetchSelectByIdForLookupIdentifier: (token) ? (lookup, id) => metaLookupApi.selectByIdForLookupIdentifier(token, lookup)(id) : undefined, 
        fetchSelectListForLookupWithParam: (token) ? (lookup, param) => metaLookupApi.selectListForLookupWithParam(token, lookup, param) : undefined, 
        fetchSelectByIdForLookupWithParam: (token) ? (lookup, param, id) => metaLookupApi.selectByIdForLookupWithParam(token, lookup, param)(id) : undefined, 
        fetchAutoCompleteForLookup: (token) ? (lookup) => metaLookupApi.autoCompleteForLookup(token, lookup) : undefined, 
        fetchAutoCompleteForLookupWithParam: (token) ? (lookup, param) => metaLookupApi.autoCompleteForLookupWithParam(token, lookup, param) : undefined, 
    } as LookupApiOperations), [token, metaLookupApi]);
}