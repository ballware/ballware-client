/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import {
  useContext,
  useState,
  useEffect,
  PropsWithChildren,
} from 'react';

import { useObservableState } from 'observable-hooks';

import {
  LookupContext,
  LookupContextState,
  LookupRequest,
  LookupDescriptor,
  LookupCreator,
  AutocompleteCreator,
  LookupStoreDescriptor,
  AutocompleteStoreDescriptor,
} from '@ballware/react-contexts';
import { SettingsContext, RightsContext } from '@ballware/react-contexts';
import { IdentityUserApi, IdentityRoleApi } from '@ballware/identity-interface';
import {
  MetaLookupApi,
  MetaProcessingstateApi,
  MetaPickvalueApi,
} from '@ballware/meta-interface';
import { BehaviorSubject } from 'rxjs';

const createUserLookup = (
  token: () => string,
  api: IdentityUserApi,
  valueMember: string,
  displayMember: string
): LookupDescriptor => {
  return {
    type: 'lookup',
    store: {
      listFunc: () => api.selectListFunc(token()),
      byIdFunc: id => api.selectByIdFunc(token(), id),
    } as LookupStoreDescriptor,
    valueMember: valueMember,
    displayMember: displayMember,
  } as LookupDescriptor;
};

const createRoleLookup = (
  token: () => string,
  api: IdentityRoleApi,
  valueMember: string,
  displayMember: string
): LookupDescriptor => {
  return {
    type: 'lookup',
    store: {
      listFunc: () => api.selectListFunc(token()),
      byIdFunc: id => api.selectByIdFunc(token(), id),
    } as LookupStoreDescriptor,
    valueMember: valueMember,
    displayMember: displayMember,
  } as LookupDescriptor;
};

const createGenericLookup = (
  token: () => string,
  api: MetaLookupApi,
  lookupId: string,
  valueMember: string,
  displayMember: string
): LookupDescriptor => {
  return {
    type: 'lookup',
    store: {
      listFunc: () => api.selectListForLookup(token(), lookupId),
      byIdFunc: id => api.selectByIdForLookup(token(), lookupId)(id),
    } as LookupStoreDescriptor,
    valueMember: valueMember,
    displayMember: displayMember,
  } as LookupDescriptor;
};

const createGenericLookupWithParam = (
  token: () => string,
  api: MetaLookupApi,
  lookupId: string,
  valueMember: string,
  displayMember: string
): LookupCreator => {
  return (param): LookupDescriptor => {
    return {
      type: 'lookup',
      store: {
        listFunc: () =>
          api.selectListForLookupWithParam(token(), lookupId, param),
        byIdFunc: id =>
          api.selectByIdForLookupWithParam(token(), lookupId, param)(id),
      } as LookupStoreDescriptor,
      valueMember: valueMember,
      displayMember: displayMember,
    };
  };
};

const createGenericPickvalueLookup = (
  token: () => string,
  api: MetaPickvalueApi,
  entity: string,
  field: string,
  valueMember = 'Value',
  displayMember = 'Name'
): LookupDescriptor => {
  return {
    type: 'lookup',
    store: {
      listFunc: () => api.selectListForEntityAndField(token(), entity, field),
      byIdFunc: id =>
        api.selectByValueForEntityAndField(token(), entity, field)(id),
    } as LookupStoreDescriptor,
    valueMember: valueMember,
    displayMember: displayMember,
  } as LookupDescriptor;
};

const createGenericAutocomplete = (
  token: () => string,
  api: MetaLookupApi,
  lookupId: string
): LookupDescriptor => {
  return {
    type: 'autocomplete',
    store: {
      listFunc: () => api.autoCompleteForLookup(token(), lookupId),
    } as AutocompleteStoreDescriptor,
  } as LookupDescriptor;
};

const createGenericAutocompleteWithParam = (
  token: () => string,
  api: MetaLookupApi,
  lookupId: string
): LookupCreator => {
  return (param): LookupDescriptor => {
    return {
      type: 'autocomplete',
      store: {
        listFunc: () =>
          api.autoCompleteForLookupWithParam(token(), lookupId, param),
      } as AutocompleteStoreDescriptor,
    };
  };
};

const createGenericStateLookup = (
  token: () => string,
  api: MetaProcessingstateApi,
  entity: string,
  valueMember = 'State',
  displayMember = 'Name'
): LookupDescriptor => {
  return {
    type: 'lookup',
    store: {
      listFunc: () => api.selectListForEntity(token(), entity),
      byIdFunc: id => api.selectByStateForEntity(token(), entity)(id),
    } as LookupStoreDescriptor,
    valueMember: valueMember,
    displayMember: displayMember,
  } as LookupDescriptor;
};

const createGenericAllowedStateLookup = (
  token: () => string,
  api: MetaProcessingstateApi,
  entity: string,
  valueMember = 'State',
  displayMember = 'Name'
): LookupCreator => {
  return param => {
    return {
      type: 'lookup',
      store: {
        listFunc: () =>
          api.selectListAllowedForEntityAndIds(
            token(),
            entity,
            Array.isArray(param) ? param : [param]
          ),
        byIdFunc: id => api.selectByStateForEntity(token(), entity)(id),
      } as LookupStoreDescriptor,
      valueMember: valueMember,
      displayMember: displayMember,
    };
  };
};

const createGenericLookupByIdentifier = (
  token: () => string,
  api: MetaLookupApi,
  lookupIdentifier: string,
  valueMember: string,
  displayMember: string
): LookupDescriptor => {
  return {
    type: 'lookup',
    store: {
      listFunc: () =>
        api.selectListForLookupIdentifier(token(), lookupIdentifier),
      byIdFunc: id =>
        api.selectByIdForLookupIdentifier(token(), lookupIdentifier)(id),
    } as LookupStoreDescriptor,
    valueMember: valueMember,
    displayMember: displayMember,
  } as LookupDescriptor;
};

/**
 * Provides lookup functionality to child items
 */
export const LookupProvider = ({
  children,
}: PropsWithChildren<{}>): JSX.Element => {
  const [lookupsComplete$, ] = useState(new BehaviorSubject<boolean>(false));
  const [lookups$, ] = useState(new BehaviorSubject<
      Record<
          string,
          LookupDescriptor | LookupCreator | AutocompleteCreator | Array<unknown>
        >
      | undefined
    >(undefined));

  const {
    identityUserApiFactory,
    identityRoleApiFactory,
    metaLookupApiFactory,
    metaPickvalueApiFactory,
    metaProcessingstateApiFactory,
  } = useContext(SettingsContext);
  const { token$ } = useContext(RightsContext);

  const [value, setNewValue] = useState({
    lookups$,
    lookupsComplete$
  } as LookupContextState);

  const token = useObservableState(token$, undefined);

  useEffect(() => {
    if (token &&             
        metaLookupApiFactory &&
        metaProcessingstateApiFactory &&
        metaPickvalueApiFactory &&
        identityUserApiFactory &&
        identityRoleApiFactory) {

      const getGenericLookupByIdentifier = (identifier: string, valueExpr: string, displayExpr: string) => {
          const lookupApi = metaLookupApiFactory();
  
          return createGenericLookupByIdentifier(
            () => token,
            lookupApi,
            identifier,
            valueExpr,
            displayExpr
          );
        };
        
      const createLookups = (requests: Array<LookupRequest>) => {
            
          const lookupApi = metaLookupApiFactory();
          const processingstateApi = metaProcessingstateApiFactory();
          const pickvalueApi = metaPickvalueApiFactory();
          const newLookups = {} as Record<
            string,
            | LookupDescriptor
            | LookupCreator
            | AutocompleteCreator
            | Array<unknown>
          >;
  
          newLookups['userLookup'] = createUserLookup(
            () => token as string,
            identityUserApiFactory(),
            'id',
            'name'
          );
          newLookups['roleLookup'] = createRoleLookup(
            () => token as string,
            identityRoleApiFactory(),
            'id',
            'name'
          );
  
          requests?.forEach(l => {
            if (l.type) {
              switch (l.type) {
                case 'lookup':
                  if (l.lookupId && l.valueMember && l.displayMember) {
                    newLookups[l.identifier] = createGenericLookup(
                      () => token as string,
                      lookupApi,
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
                      () => token as string,
                      lookupApi,
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
                    () => token as string,
                    pickvalueApi,
                    l.entity as string,
                    l.field as string,
                    l.valueMember,
                    l.displayMember
                  );
                  break;
                case 'autocomplete':
                  if (l.lookupId) {
                    newLookups[l.identifier] = createGenericAutocomplete(
                      () => token as string,
                      lookupApi,
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
                      () => token as string,
                      lookupApi,
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
                    () => token as string,
                    processingstateApi,
                    l.entity as string,
                    l.valueMember,
                    l.displayMember
                  );
                  break;
                case 'stateallowed':
                  newLookups[l.identifier] = createGenericAllowedStateLookup(
                    () => token as string,
                    processingstateApi,
                    l.entity as string,
                    l.valueMember,
                    l.displayMember
                  );
                  break;
              }
            }
          });
  
          lookups$.next(newLookups);          
          lookupsComplete$.next(true);
        };

        setNewValue((prev) => ({
          ...prev,
          getGenericLookupByIdentifier,
          createLookups
        }));
    }

  }, [identityUserApiFactory, identityRoleApiFactory, metaLookupApiFactory, metaPickvalueApiFactory, metaProcessingstateApiFactory, token, lookups$, lookupsComplete$]);

  return (
    <LookupContext.Provider value={value}>{children}</LookupContext.Provider>
  );
};
