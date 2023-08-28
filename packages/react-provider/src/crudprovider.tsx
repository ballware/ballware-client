/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import {
  useState,
  useEffect,
  useContext,
  PropsWithChildren
} from 'react';
import { useNavigate, useLocation } from 'react-router';

import qs from 'qs';
import isEqual from 'lodash/isEqual';
import get from 'lodash/get';
import set from 'lodash/set';

import { CrudItem, QueryParams } from '@ballware/meta-interface';
import {
  CrudContext,
  CrudContextState,
  MetaContext,
  NotificationContext,
} from '@ballware/react-contexts';
import { catchApiError } from './error';
import { catchError, of, throwError } from 'rxjs';

/**
 * Properties for crud provider component
 */
export interface CrudProviderProps {
  /**
   * Query identifier used for querying item list
   */
  query: string | undefined;

  /**
   * Fetch params prepared in parent container (page, parent entity)
   */
  initialFetchParams?: QueryParams;

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
  initialFetchParams,
  identifier,
  children,
}: PropsWithChildren<CrudProviderProps>): JSX.Element => {
  const { search } = useLocation();
  const navigate = useNavigate();

  const [value, setValue] = useState({} as CrudContextState);
  const [refreshing, setRefreshing] = useState(false);
  const [fetchParams, setFetchParams] = useState(initialFetchParams ?? {});
  const [fetchedItems, setFetchedItems] = useState<CrudItem[]>();

  const [currentRouterState, setCurrentRouterState] = useState<CrudRouterState>();

  const { showInfo, showError } = useContext(NotificationContext);
  const {
    prepareCustomFunction,
    mapIncomingItem,
    mapOutgoingItem,
    headParams,
    query,
    count,
    create,
    byId,
    save,
    saveBatch,
    drop,
    exportItems,
    importItems
  } = useContext(MetaContext);

  useEffect(() => {
    if (identifier && currentRouterState) {
      const globalRouterState = qs.parse(search, {ignoreQueryPrefix: true});

      const myCurrentRouterState = get(globalRouterState, identifier, {} as CrudRouterState);
      
      if (!isEqual(myCurrentRouterState, currentRouterState)) {
        set(globalRouterState, identifier, currentRouterState);

        navigate({ search: qs.stringify(globalRouterState) });
      }
    }
  }, [search, navigate, currentRouterState, identifier]);

  useEffect(() => {
    if (byId && mapIncomingItem && showError && currentRouterState) {
      if (currentRouterState.id && currentRouterState.operation) {
        byId('primary', currentRouterState.id)
          .pipe(s => catchApiError(s, showError))
          .subscribe(item => {
            setValue(previousValue => {
              return {
                ...previousValue,
                viewing: currentRouterState.operation === 'view',
                editing: currentRouterState.operation === 'edit',
                item: mapIncomingItem(item),
                editLayout: currentRouterState.editLayout            
              };
            });  
          });
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
      importItems &&
      fetchParams
    ) {
      setValue({
        fetchParams: fetchParams,
        load: queryIdentifier
          ? params => {
              if (query) {
                setValue(previousValue => {
                  return {
                    ...previousValue,
                    isLoading: true,
                  };
                });

                query(queryIdentifier, params)
                  .pipe(s => catchApiError(s, showError))
                  .pipe(catchError((error) => {
                    setFetchedItems([]);
                    setValue(previousValue => {
                      return {
                        ...previousValue,
                        isLoading: false
                      };
                    });

                    return throwError(() => error);
                  }))
                  .subscribe((result: Array<CrudItem>) => {
                    setFetchedItems(result.map(item => mapIncomingItem(item)));

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
            params => {
              count(queryIdentifier, params)
                .pipe(s => catchApiError(s, showError))
                .pipe(catchError((error) => {
                  setValue(previousValue => {
                    return {
                      ...previousValue,
                      fetchedItemCount: undefined
                    };
                  });

                  return throwError(() => error);
                }))
                .subscribe((result: number) => {
                  setValue(previousValue => {
                    return {
                      ...previousValue,
                      fetchedItemCount: result,
                    };
                  });
                });
            }
            : undefined,
        add: editLayout => {
          create('primary', headParams)
            .pipe(s => catchApiError(s, showError))
            .subscribe(result => {
              setValue(previousValue => {
                return {
                  ...previousValue,
                  adding: true,
                  editLayout: editLayout,
                  item: mapIncomingItem(result),
                };
              });
            });
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
            .pipe(s => catchApiError(s, showError))
            .subscribe(result => {
              setValue(previousValue => {
                return {
                  ...previousValue,
                  deleteing: true,
                  item: mapIncomingItem(result),
                };
              });
            });
        },
        save: (item, customFunction) => {
          const saveItem = { ...item };

          save(customFunction?.id ?? 'primary', mapOutgoingItem(saveItem))
            .pipe(s => catchApiError(s, showError))
            .subscribe(() => {
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
            });
        },
        saveBatch: (items, customFunction) => {
          const mappedItems = items.map(i => mapOutgoingItem(i));

          saveBatch(customFunction?.id ?? 'primary', mappedItems)
            .pipe(s => catchApiError(s, showError))
            .subscribe(() => {
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
            });
        },
        drop: id => {
          drop(id)
            .pipe(s => catchApiError(s, showError))
            .subscribe(() => {
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
            });
        },
        exportItems: (customFunction, items) => {
          if (items && items.length > 0) {
            return exportItems(customFunction.id, items?.map(i => i.Id));
          } else {
            showInfo('editing.notifications.noitems');
            return of(undefined);
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
          return importItems(customFunction.id, file)
            .pipe(s => catchApiError(s, showError));
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
            },
            headParams
          );
        },
      } as CrudContextState);
    }
  }, [
    fetchParams,
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
    headParams,
  ]);

  useEffect(() => {
    if (refreshing && value?.load) {
      value.load(fetchParams);
      setRefreshing(false);
    }
  }, [refreshing, value, fetchParams]);

  useEffect(() => {
    setFetchParams(initialFetchParams ?? {});
  }, [initialFetchParams]);

  useEffect(() => {
    setValue(previousValue => {
      return {
        ...previousValue,
        fetchParams: fetchParams,
      };
    });
  }, [fetchParams]);

  return <CrudContext.Provider value={value}>{children}</CrudContext.Provider>;
};
