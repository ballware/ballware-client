/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, {
  useState,
  useEffect,
  PropsWithChildren
} from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import qs from 'qs';
import isEqual from 'lodash/isEqual';
import get from 'lodash/get';
import set from 'lodash/set';

import { CrudItem } from '@ballware/meta-interface';
import {
  CrudContext,
  CrudContextState,
} from '@ballware/react-contexts';
import { useMetaOperations, useMetaMapping, useMetaCustomFunctions, useNotification } from './hooks';

/**
 * Properties for crud provider component
 */
export interface CrudProviderProps {
  /**
   * Query identifier used for querying item list
   */
  query: string | undefined;

  /**
   * Identifier for page state
   */
  identifier: string | undefined;
}

interface CrudRouterState {
  id?: string;
  operation?: 'view' | 'add' | 'edit' | 'delete';
  editLayout?: string;
}

/**
 * Provides crud operations for parent generic metadata context
 */
export const CrudProvider = ({
  query: queryIdentifier,
  identifier,
  children,
}: PropsWithChildren<CrudProviderProps>): JSX.Element => {
  const { search } = useLocation();
  const { push } = useHistory();

  const [value, setValue] = useState({} as CrudContextState);
  const [refreshing, setRefreshing] = useState(false);
  const [fetchedItems, setFetchedItems] = useState<CrudItem[]>();

  const [currentRouterState, setCurrentRouterState] = useState<CrudRouterState>();

  const { showInfo, showError } = useNotification();
  
  const { prepareCustomFunction } = useMetaCustomFunctions();

  const {
    mapIncomingItem,
    mapOutgoingItem
  } = useMetaMapping();

  const {
    query,
    count,
    create,
    byId,
    save,
    saveBatch,
    drop,
    exportItems,
    importItems
  } = useMetaOperations();

  useEffect(() => {
    if (identifier && currentRouterState) {
      const globalRouterState = qs.parse(search, {ignoreQueryPrefix: true});

      const myCurrentRouterState = get(globalRouterState, identifier, {} as CrudRouterState);
      
      if (!isEqual(myCurrentRouterState, currentRouterState)) {
        set(globalRouterState, identifier, currentRouterState);

        push({ search: qs.stringify(globalRouterState) });
      }
    }
  }, [search, push, currentRouterState, identifier]);

  useEffect(() => {
    if (byId && mapIncomingItem && showError && currentRouterState) {
      if (currentRouterState.id && currentRouterState.operation) {
        byId('primary', currentRouterState.id).then(item => {
          setValue(previousValue => {
            return {
              ...previousValue,
              viewing: currentRouterState.operation === 'view',
              editing: currentRouterState.operation === 'edit',
              item: mapIncomingItem(item),
              editLayout: currentRouterState.editLayout            
            };
          });  
        }).catch(reason => showError(reason));;
      } else {
        setValue(previousValue => {
          return {
            ...previousValue,
            viewing: false,
            item: undefined,
            editLayout: undefined            
          };
        });
      }
    }
  }, [byId, mapIncomingItem, showError, currentRouterState]);

  useEffect(() => {
    setValue(previousValue => {
      return {
        ...previousValue,
        fetchedItems: fetchedItems
      };
    });    
  }, [fetchedItems]);

  useEffect(() => {
    if (identifier && search && !currentRouterState) {
      const globalRouterState = qs.parse(search, {ignoreQueryPrefix: true});

      setCurrentRouterState(get(globalRouterState, identifier, {} as CrudRouterState) as CrudRouterState);
    }
  }, [identifier, currentRouterState, search]);

  useEffect(() => {
    if (
      showError &&
      showInfo &&
      prepareCustomFunction &&
      mapIncomingItem &&
      mapOutgoingItem &&
      query &&
      count &&
      create &&
      byId &&
      save &&
      saveBatch &&
      drop &&
      exportItems &&
      importItems
    ) {
      setValue({        
        load: queryIdentifier
          ? () => {
              if (query) {
                setValue(previousValue => {
                  return {
                    ...previousValue,
                    isLoading: true,
                  };
                });

                query(queryIdentifier)
                  .then((result: Array<CrudItem>) => {
                    setFetchedItems(result.map(item => mapIncomingItem(item)));

                    setValue(previousValue => {
                      return {
                        ...previousValue,
                        isLoading: false
                      };
                    });
                  })
                  .catch(reason => {
                    showError(reason);
                    setFetchedItems([]);
                    setValue(previousValue => {
                      return {
                        ...previousValue,
                        isLoading: false
                      };
                    });
                  });
              }
            }
          : undefined,
        count: queryIdentifier ?
            () => {
              count(queryIdentifier)
              .then((result: number) => {
                setValue(previousValue => {
                  return {
                    ...previousValue,
                    fetchedItemCount: result,
                  };
                });
              })
              .catch(reason => {
                showError(reason);
                setValue(previousValue => {
                  return {
                    ...previousValue,
                    fetchedItemCount: undefined
                  };
                });
              });
            }
            : undefined,
        add: editLayout => {
          create('primary')
            .then(result => {
              setValue(previousValue => {
                return {
                  ...previousValue,
                  adding: true,
                  editLayout: editLayout,
                  item: mapIncomingItem(result),
                };
              });
            })
            .catch(reason => showError(reason));
        },
        view: (id, editLayout) => {
          setCurrentRouterState(previousValue => {
            return {
              ...previousValue,
              operation: 'view',
              id: id,
              editLayout: editLayout
            } as CrudRouterState;
          });
        },
        edit: (id, editLayout) => {
          setCurrentRouterState(previousValue => {
            return {
              ...previousValue,
              operation: 'edit',
              id: id,
              editLayout: editLayout
            } as CrudRouterState;
          });
        },
        close: () => {
          setValue(previousValue => {
            return {
              ...previousValue,
              adding: false,
              viewing: false,
              editing: false,
              deleteing: false,              
              customEditing: false,
              importing: false,
              exporting: false,
              editLayout: undefined,
              item: undefined,
              customEditFunction: undefined,
              customEditParam: null,
            };
          });

          setCurrentRouterState((previousValue) => {
            return {
              ...previousValue,
              operation: undefined,
              id: undefined,
              editLayout: undefined
            }
          });
        },
        remove: id => {
          byId('primary', id)
            .then(result => {
              setValue(previousValue => {
                return {
                  ...previousValue,
                  deleteing: true,
                  item: mapIncomingItem(result),
                };
              });
            })
            .catch(reason => showError(reason));
        },
        save: (item, customFunction) => {
          const saveItem = { ...item };

          save(customFunction?.id ?? 'primary', mapOutgoingItem(saveItem))
            .then(() => {
              showInfo('editing.notifications.saved');
              setValue(previousValue => {
                return {
                  ...previousValue,
                  adding: false,
                  viewing: false,
                  editing: false,
                  deleteing: false,
                  customEditing: false,
                  item: undefined,
                  customEditFunction: undefined,
                  customEditParam: null,
                };
              });

              setRefreshing(true);
            })
            .catch(reason => {
              showError(reason.toString());
            });
        },
        saveBatch: (items, customFunction) => {
          const mappedItems = items.map(i => mapOutgoingItem(i));

          saveBatch(customFunction?.id ?? 'primary', mappedItems)
            .then(() => {
              showInfo('editing.notifications.saved');
              setValue(previousValue => {
                return {
                  ...previousValue,
                  adding: false,
                  viewing: false,
                  editing: false,
                  deleteing: false,
                  customEditing: false,
                  item: undefined,
                  customEditFunction: undefined,
                  customEditParam: null,
                };
              });

              setRefreshing(true);
            })
            .catch(reason => showError(reason));
        },
        drop: id => {
          drop(id)
            .then(() => {
              showInfo('editing.notifications.removed');
              setValue(previousValue => {
                return {
                  ...previousValue,
                  adding: false,
                  viewing: false,
                  editing: false,
                  deleteing: false,
                  customEditing: false,
                  item: undefined,
                  customEditFunction: undefined,
                  customEditParam: null,
                };
              });

              setRefreshing(true);
            })
            .catch(reason => showError(reason));
        },
        exportItems: (customFunction, items) => {
          if (items && items.length > 0) {
            return exportItems(customFunction.id, items?.map(i => i.Id));
          } else {
            showInfo('editing.notifications.noitems');
            return Promise.resolve(undefined);
          }
        },
        importItems: (customFunction) => {          
          setValue(previousValue => {
            return {
              ...previousValue,
              importing: true,
              customEditFunction: customFunction              
            };
          });
        },
        importFile: (customFunction, file) => {
          return importItems(customFunction.id, file).catch(reason => showError(reason));
        },
        customEdit: (customFunction, items) => {
          prepareCustomFunction(
            customFunction.id,
            items,
            (param, text) => {
              setValue(previousValue => {
                return {
                  ...previousValue,
                  customEditing: true,
                  customEditFunction: customFunction,
                  customEditTitle: text ?? customFunction.text,
                  customEditParam: param,
                };
              });
            },
            message => {
              showInfo(message);
            }
          );
        },
      } as CrudContextState);
    }
  }, [
    queryIdentifier,
    showError,
    showInfo,
    prepareCustomFunction,
    mapIncomingItem,
    mapOutgoingItem,
    query,
    create,
    byId,
    save,
    saveBatch,
    drop,
  ]);

  useEffect(() => {
    if (refreshing && value?.load) {
      value.load();
      setRefreshing(false);
    }
  }, [refreshing, value]);

  return <CrudContext.Provider value={value}>{children}</CrudContext.Provider>;
};
