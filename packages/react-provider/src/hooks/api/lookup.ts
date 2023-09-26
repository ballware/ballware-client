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

    return useMemo(() => token ? ({
        fetchSelectListForLookup: (lookup) => metaLookupApi.selectListForLookup(token, lookup),    
        fetchSelectByIdForLookup: (lookup, id) => metaLookupApi.selectByIdForLookup(token, lookup)(id), 
        fetchSelectListForLookupIdentifier: (lookup) => metaLookupApi.selectListForLookupIdentifier(token, lookup), 
        fetchSelectByIdForLookupIdentifier: (lookup, id) => metaLookupApi.selectByIdForLookupIdentifier(token, lookup)(id), 
        fetchSelectListForLookupWithParam: (lookup, param) => metaLookupApi.selectListForLookupWithParam(token, lookup, param), 
        fetchSelectByIdForLookupWithParam: (lookup, param, id) => metaLookupApi.selectByIdForLookupWithParam(token, lookup, param)(id), 
        fetchAutoCompleteForLookup: (lookup) => metaLookupApi.autoCompleteForLookup(token, lookup), 
        fetchAutoCompleteForLookupWithParam: (lookup, param) => metaLookupApi.autoCompleteForLookupWithParam(token, lookup, param), 
    } as LookupApiOperations) : undefined, [token, metaLookupApi]);
}