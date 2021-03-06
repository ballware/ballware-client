/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, {
  useState,
  useEffect,
  useContext,
  PropsWithChildren,
} from 'react';
import {
  RightsContext,
  RightsContextState,
  PersistedRightsState,
} from '@ballware/react-contexts';
import { SettingsContext, NotificationContext } from '@ballware/react-contexts';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

/**
 * Resource owner rights provider properties
 */
export interface ResourceOwnerRightsProviderProps {
  /**
   * Client id for auth provider
   */
  client: string;

  /**
   * Client secret for auth provider
   */
  secret: string;
}

/**
 * Initialize rights provider state from application store
 */
function loadInitialRightsState(): PersistedRightsState {
  const storeRights = localStorage.getItem('state.rights');

  if (storeRights) {
    const rights = JSON.parse(storeRights) as PersistedRightsState;

    if (
      rights &&
      rights.timeout_in &&
      new Date(rights.timeout_in) <= new Date()
    ) {
      return {} as PersistedRightsState;
    } else {
      return rights;
    }
  }

  return {} as PersistedRightsState;
}

/**
 * Store current rights provider state to application store
 * @param Current rights provider state
 */
function storeRightsState(state: PersistedRightsState): void {
  localStorage.setItem('state.rights', JSON.stringify(state));
}

/**
 * Provides authentication functionality via ressource owner flow
 */
export const ResourceOwnerRightsProvider = ({
  client,
  secret,
  children,
}: PropsWithChildren<ResourceOwnerRightsProviderProps>): JSX.Element => {
  const [token, setToken] = useState<string>();
  const [refreshToken, setRefreshToken] = useState<string>();

  const [value, setValue] = useState<RightsContextState>({});

  const { identityAuthApiFactory, version } = useContext(SettingsContext);
  const { showInfo, showError } = useContext(NotificationContext);
  const { push, replace } = useHistory();

  useEffect(() => {
    if (push) {
      const persistedState = loadInitialRightsState();

      if (persistedState) {
        if (persistedState.token) {
          setToken(persistedState.token);
        }

        if (persistedState.refresh_token) {
          setRefreshToken(persistedState.refresh_token);
        }

        setValue(persistedState);
      } else {
        push('/login');
      }
    }
  }, [push]);

  useEffect(() => {
    if (identityAuthApiFactory && version && showInfo && showError) {
      setValue(previousValue => {
        const api = identityAuthApiFactory();

        return {
          ...previousValue,
          version: version,
          login: (username, password, redirect) => {
            api
              .login(
                username,
                password,
                client,
                secret
              )
              .then(session => {
                setToken(session.access_token);
                setRefreshToken(session.refresh_token);

                setValue(previousValue => {
                  return {
                    ...previousValue,
                    token: session.access_token,
                    refresh_token: session.refresh_token,
                    expires_in: session.expires_in,
                    issued: new Date(),
                    rights: session.rights,
                    timeout_in: session.expires_in
                      ? moment(new Date())
                          .add(session.expires_in, 'seconds')
                          .toDate()
                      : undefined,
                  };
                });

                showInfo('rights.notifications.loginsuccess');
                replace(redirect);
              })
              .catch(reason => {
                showError(
                  reason === 'invalid_grant'
                    ? 'rights.notifications.logininvalid'
                    : reason
                );
              });
          },
          logout: () => {
            api
              .logout(token as string, client, secret)
              .then(() => {
                setToken(undefined);
                setRefreshToken(undefined);

                setValue(previousValue => {
                  return {
                    ...previousValue,
                    rights: undefined,
                    issued: undefined,
                    timeout_in: undefined,
                    token: undefined,
                    refresh_token: undefined,
                    expires_in: undefined,
                    error: undefined,
                  };
                });
                showInfo('rights.notifications.logoutsuccess');
                push('/login');
              })
              .catch(reason => showError(reason));
          },
          register: (username, displayname, password) => {
            api
              .register(username, password, displayname)
              .then(() => {
                showInfo('rights.notifications.registeredsuccess');
                push('/login');
              })
              .catch(reason => showError(reason));
          },
          forgotPassword: email => {
            api
              .forgotPassword(email)
              .then(() => {
                showInfo('rights.notifications.forgotpasswordsuccess');
                push('/resetpassword');
              })
              .catch(reason => showError(reason));
          },
          resetPassword: (email, code, newPassword) => {
            api
              .resetPassword(email, code, newPassword)
              .then(() => {
                showInfo('rights.notifications.resetpasswordsuccess');
                push('/login');
              })
              .catch(reason => showError(reason));
          },
          changePassword: (oldPassword, newPassword) => {
            api
              .changePassword(token as string, oldPassword, newPassword)
              .then(() => {
                showInfo('rights.notifications.changepasswordsuccess');
              })
              .catch(reason => showError(reason));
          },
          refresh: () => {
            api
              .refreshToken(refreshToken as string, client, secret)
              .then(session => {
                setToken(session.access_token);
                setRefreshToken(session.refresh_token);

                setValue(previousValue => {
                  return {
                    ...previousValue,
                    token: session.access_token,
                    refresh_token: session.refresh_token,
                    expires_in: session.expires_in,
                    issued: new Date(),
                    timeout_in: session.expires_in
                      ? moment(new Date())
                          .add(session.expires_in, 'seconds')
                          .toDate()
                      : undefined,
                  };
                });
              })
              .catch(reason => showError(reason));
          },
        };
      });
    }
  }, [
    push,
    replace,
    identityAuthApiFactory,
    version,
    showInfo,
    showError,
    client,
    secret,
    token,
    refreshToken,
  ]);

  useEffect(() => {
    storeRightsState({
      ...(value as PersistedRightsState),
    });
  }, [value]);

  return (
    <RightsContext.Provider value={value}>{children}</RightsContext.Provider>
  );
};
