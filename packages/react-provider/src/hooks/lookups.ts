import { AutocompleteCreator, AutocompleteStoreDescriptor, LookupCreator, LookupDescriptor, LookupRequest, LookupStoreDescriptor } from "@ballware/react-contexts";
import { useLookupApi, usePickvalueApi, useProcessingstateApi, useRoleApi, useUserApi } from "./api";
import { useCallback } from "react";

const createUserLookup = (
    fetchList: () => Promise<Array<Record<string, unknown>>>,
    fetchById: (identifier: string) => Promise<Record<string, unknown>>,
    valueMember: string,
    displayMember: string
): LookupDescriptor => {
    return {
        type: 'lookup',
        store: {
        listFunc: () => fetchList(),
        byIdFunc: id => fetchById(id),
        } as LookupStoreDescriptor,
        valueMember: valueMember,
        displayMember: displayMember,
    } as LookupDescriptor;
};
  
const createRoleLookup = (
    fetchList: () => Promise<Array<Record<string, unknown>>>,
    fetchById: (identifier: string) => Promise<Record<string, unknown>>,
    valueMember: string,
    displayMember: string
): LookupDescriptor => {
    return {
        type: 'lookup',
        store: {
        listFunc: () => fetchList(),
        byIdFunc: id => fetchById(id),
        } as LookupStoreDescriptor,
        valueMember: valueMember,
        displayMember: displayMember,
    } as LookupDescriptor;
};
  
const createGenericLookup = (
    fetchList: (lookup: string) => Promise<Array<Record<string, unknown>>>,
    fetchById: (lookup: string, identifier: string) => Promise<Record<string, unknown>>,
    lookupId: string,
    valueMember: string,
    displayMember: string
): LookupDescriptor => {
    return {
        type: 'lookup',
        store: {
        listFunc: () => fetchList(lookupId),
        byIdFunc: id => fetchById(lookupId, id),
        } as LookupStoreDescriptor,
        valueMember: valueMember,
        displayMember: displayMember,
    } as LookupDescriptor;
};
  
const createGenericLookupWithParam = (
    fetchList: (lookup: string, param: unknown) => Promise<Array<Record<string, unknown>>>,
    fetchById: (lookup: string, param: unknown, identifier: string) => Promise<Record<string, unknown>>,
    lookupId: string,
    valueMember: string,
    displayMember: string
): LookupCreator => {
    return (param): LookupDescriptor => {
        return {
        type: 'lookup',
        store: {
            listFunc: () => fetchList(lookupId, param),
            byIdFunc: id => fetchById(lookupId, param, id),
        } as LookupStoreDescriptor,
        valueMember: valueMember,
        displayMember: displayMember,
        };
    };
};
  
const createGenericPickvalueLookup = (
    fetchList: (entity: string, field: string) => Promise<Array<Record<string, unknown>>>,
    fetchById: (entity: string, field: string, identifier: string) => Promise<Record<string, unknown>>,
    entity: string,
    field: string,
    valueMember = 'Value',
    displayMember = 'Name'
): LookupDescriptor => {
    return {
        type: 'lookup',
        store: {
        listFunc: () => fetchList(entity, field),
        byIdFunc: id => fetchById(entity, field, id),
        } as LookupStoreDescriptor,
        valueMember: valueMember,
        displayMember: displayMember,
    } as LookupDescriptor;
};
  
const createGenericAutocomplete = (
    fetchList: (lookup: string) => Promise<Array<unknown>>,
    lookupId: string
): LookupDescriptor => {
    return {
        type: 'autocomplete',
        store: {
        listFunc: () => fetchList(lookupId),
        } as AutocompleteStoreDescriptor,
    } as LookupDescriptor;
};
  
const createGenericAutocompleteWithParam = (
    fetchList: (lookup: string, param: unknown) => Promise<Array<unknown>>,
    lookupId: string
): LookupCreator => {
    return (param): LookupDescriptor => {
        return {
        type: 'autocomplete',
        store: {
            listFunc: () => fetchList(lookupId, param),
        } as AutocompleteStoreDescriptor,
        };
    };
};
  
const createGenericStateLookup = (
        fetchList: (entity: string) => Promise<Array<unknown>>,
        fetchById: (entity: string, state: string) => Promise<Record<string, unknown>>,
        entity: string,
        valueMember = 'State',
        displayMember = 'Name'
    ): LookupDescriptor => {
    return {
        type: 'lookup',
        store: {
        listFunc: () => fetchList(entity),
        byIdFunc: id => fetchById(entity, id),
        } as LookupStoreDescriptor,
        valueMember: valueMember,
        displayMember: displayMember,
    } as LookupDescriptor;
};
  
const createGenericAllowedStateLookup = (
        fetchList: (entity: string, param: string[]) => Promise<Array<Record<string, unknown>>>,
        fetchById: (entity: string, state: string | number) => Promise<Record<string, unknown>>,
        entity: string,
        valueMember = 'State',
        displayMember = 'Name'
    ): LookupCreator => {
    return param => {
      return {
        type: 'lookup',
        store: {
          listFunc: () => fetchList(entity, Array.isArray(param) ? param : [param]),
          byIdFunc: id => fetchById(entity, id),
        } as LookupStoreDescriptor,
        valueMember: valueMember,
        displayMember: displayMember,
      };
    };
};
  
const createGenericLookupByIdentifier = (
    fetchList: (lookup: string) => Promise<Array<Record<string, unknown>>>,
    fetchById: (lookup: string, identifier: string) => Promise<Record<string, unknown>>,
    lookupIdentifier: string,
    valueMember: string,
    displayMember: string
    ): LookupDescriptor => {
    return {
        type: 'lookup',
        store: {
        listFunc: () => fetchList(lookupIdentifier),
        byIdFunc: id => fetchById(lookupIdentifier, id),
        } as LookupStoreDescriptor,
        valueMember: valueMember,
        displayMember: displayMember,
    } as LookupDescriptor;
};
  

export const useGenericLookupByIdentifier = () => {
    const lookupApi = useLookupApi();
  
    return lookupApi ? useCallback((identifier: string, valueExpr: string, displayExpr: string) => createGenericLookupByIdentifier(
        lookupApi.fetchSelectListForLookupIdentifier,
        lookupApi.fetchSelectByIdForLookupIdentifier,
        identifier,
        valueExpr,
        displayExpr
    ), [lookupApi]) : undefined;
  }
  
  export const useRequestLookups = () => {
    const roleApi = useRoleApi();
    const userApi = useUserApi();
    const lookupApi = useLookupApi();
    const pickvalueApi = usePickvalueApi();
    const processingstateApi = useProcessingstateApi();
  
    return useCallback((requests: Array<LookupRequest>) => {
        if (roleApi && userApi && lookupApi && pickvalueApi && processingstateApi) {
            const newLookups = {} as Record<
                string,
                | LookupDescriptor
                | LookupCreator
                | AutocompleteCreator
                | Array<unknown>
            >;
        
            newLookups['userLookup'] = createUserLookup(
                userApi.fetchSelectList,
                userApi.fetchSelectById,
                'id',
                'name'
            );
            newLookups['roleLookup'] = createRoleLookup(
                roleApi.fetchSelectList,
                roleApi.fetchSelectById,
                'id',
                'name'
            );
        
            requests?.forEach(l => {
                if (l.type) {
                switch (l.type) {
                    case 'lookup':
                    if (l.lookupId && l.valueMember && l.displayMember) {
                        newLookups[l.identifier] = createGenericLookup(
                        lookupApi.fetchSelectListForLookup,
                        lookupApi.fetchSelectByIdForLookup,
                        l.lookupId,
                        l.valueMember,
                        l.displayMember
                        );
                    } else {
                        console.error(
                        `Missing params for lookup type 'lookup': lookupId: ${l.lookupId}, valueMember: ${l.valueMember}, displayMember: ${l.displayMember}`
                        );
                    }
                    break;
                    case 'lookupwithparam':
                    if (l.lookupId && l.valueMember && l.displayMember) {
                        newLookups[l.identifier] = createGenericLookupWithParam(
                        lookupApi.fetchSelectListForLookupWithParam,
                        lookupApi.fetchSelectByIdForLookupWithParam,
                        l.lookupId,
                        l.valueMember,
                        l.displayMember
                        );
                    } else {
                        console.error(
                        `Missing params for lookup type 'lookupwithparam': lookupId: ${l.lookupId}, valueMember: ${l.valueMember}, displayMember: ${l.displayMember}`
                        );
                    }
                    break;
                    case 'pickvalue':
                    newLookups[l.identifier] = createGenericPickvalueLookup(
                        pickvalueApi.fetchSelectListForEntityAndField,
                        pickvalueApi.fetchSelectByValueForEntityAndField,
                        l.entity as string,
                        l.field as string,
                        l.valueMember,
                        l.displayMember
                    );
                    break;
                    case 'autocomplete':
                    if (l.lookupId) {
                        newLookups[l.identifier] = createGenericAutocomplete(
                        lookupApi.fetchAutoCompleteForLookup,
                        l.lookupId
                        );
                    } else {
                        console.error(
                        `Missing params for lookup type 'autocomplete': lookupId: ${l.lookupId}`
                        );
                    }
                    break;
                    case 'autocompletewithparam':
                    if (l.lookupId) {
                        newLookups[l.identifier] = createGenericAutocompleteWithParam(
                        lookupApi.fetchAutoCompleteForLookupWithParam,
                        l.lookupId
                        );
                    } else {
                        console.error(
                        `Missing params for lookup type 'autocompletewithparam': lookupId: ${l.lookupId}`
                        );
                    }
                    break;
                    case 'state':
                    newLookups[l.identifier] = createGenericStateLookup(
                        processingstateApi.fetchSelectListForEntity,
                        processingstateApi.fetchSelectByStateForEntity,
                        l.entity as string,
                        l.valueMember,
                        l.displayMember
                    );
                    break;
                    case 'stateallowed':
                    newLookups[l.identifier] = createGenericAllowedStateLookup(
                        processingstateApi.fetchSelectListAllowedForEntityAndIds,
                        processingstateApi.fetchSelectByStateForEntity,
                        l.entity as string,
                        l.valueMember,
                        l.displayMember
                    );
                    break;
                }
                }
            });
        
            return newLookups;
        }

        return undefined;
    }, [roleApi, userApi, lookupApi, pickvalueApi, processingstateApi]);
    
  }