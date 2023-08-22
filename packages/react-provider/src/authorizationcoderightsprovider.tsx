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
  useCallback,
} from 'react';

import { BehaviorSubject } from 'rxjs';

import moment from 'moment';

import { RightsContext, RightsContextState } from '@ballware/react-contexts';

import { SettingsContext, NotificationContext } from '@ballware/react-contexts';

import { Route, Routes, useNavigate } from 'react-router-dom';

import {
  SessionWithUserInfo,
} from '@ballware/identity-interface';

import { UserManager, WebStorageStateStore, Log } from 'oidc-client';

/**
 * Property set for authorization code flow rights provider
 */
export interface AuthorizationCodeRightsProviderProps {
  /**
   * Url of authentication provider
   */
  authority: string;

  /**
   * Client application identifier
   */
  client: string;

  /**
   * Optional client secret needed for client application
   */
  secret?: string;

  /**
   * Url in application called for result of login
   */
  redirect_uri: string;

  /**
   * Url in application called after user has logged out
   */
  post_logout_redirect_uri: string;

  /**
   * Response type returned to application from authentication provider
   */
  response_type?: string;

  /**
   * Authentication scopes needed by application
   */
  scope: string;

  /**
   * Optional uri for redirect to account management portal for authenticated user
   */
  account_management_uri?: string;
}

/**
 * Callback component for accepting result of authentication provider
 */
const OidcAuthCallback = ({
  redirectCallback,
}: {
  redirectCallback: () => void;
}) => {
  useEffect(() => {
    if (redirectCallback) {
      redirectCallback();
    }
  }, [redirectCallback]);

  return <React.Fragment>Login successful</React.Fragment>;
};

/**
 * Provides authentication functionality via authorization code flow
 */
export const AuthorizationCodeRightsProvider = ({
  authority,
  client,
  secret,
  redirect_uri,
  post_logout_redirect_uri,
  response_type,
  scope,
  account_management_uri,
  children,
}: PropsWithChildren<AuthorizationCodeRightsProviderProps>): JSX.Element => {
  const [userManager, setUserManager] = useState<UserManager>();

  const [session$, ] = useState(new BehaviorSubject<SessionWithUserInfo|undefined>(undefined));
  const [token$, ] = useState(new BehaviorSubject<string|undefined>(undefined));
  const [refresh_token$, ] = useState(new BehaviorSubject<string|undefined>(undefined));
  const [tenant$, ] = useState(new BehaviorSubject<string|undefined>(undefined));
  const [allowedTenants$, ] = useState(new BehaviorSubject<Array<{ Id: string, Name: string }>|undefined>(undefined));
  const [timeout_in$, ] = useState(new BehaviorSubject<Date|undefined>(undefined));
  const [error$, ] = useState(new BehaviorSubject<string|undefined>(undefined));

  const [value, setValue] = useState<RightsContextState>({
    session$,
    token$,
    refresh_token$,
    tenant$,
    allowedTenants$,
    timeout_in$,
    error$
  });

  const { version, identityUserApiFactory, metaTenantApiFactory } = useContext(SettingsContext);
  const { showInfo, showError } = useContext(NotificationContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      authority &&
      client &&
      redirect_uri &&
      post_logout_redirect_uri &&
      response_type &&
      scope &&
      metaTenantApiFactory
    ) {      

      Log.logger = console;

      if (window.location.href.indexOf("signin-oidc") === -1) {

        const newUserManager = new UserManager({
          authority,
          client_id: client,
          client_secret: secret,
          redirect_uri,
          post_logout_redirect_uri,
          response_type,
          scope,
          userStore: new WebStorageStateStore({ store: window.sessionStorage }),
        });
  
        setUserManager(newUserManager);  

        newUserManager.getUser().then(user => {
          if (user) {
            metaTenantApiFactory().allowed(user.access_token).then(allowedTenants => {            

              let session = {
                access_token: user.access_token,
                expires_in: user.expires_in,
                identifier: user.profile.sub,
                email: user.profile.preferred_username,
                issued: new Date()                
              } as SessionWithUserInfo;
      
              session = Object.assign(session, user.profile);

              session$.next(session);
              token$.next(session.access_token);
              refresh_token$.next(session.refresh_token);
              timeout_in$.next(session.expires_in
                ? moment(new Date())
                    .add(session.expires_in, 'seconds')
                    .toDate() 
                : undefined);
              tenant$.next(session.tenant as string);
              allowedTenants$.next(allowedTenants);

              /*
              setValue(previousValue => {
                return {
                  ...previousValue,
                  token: session.access_token,
                  refresh_token: session.refresh_token,
                  expires_in: session.expires_in,
                  issued: new Date(),
                  session: session,
                  timeout_in: session.expires_in
                    ? moment(new Date())
                        .add(session.expires_in, 'seconds')
                        .toDate()
                    : undefined,
                  tenant: session.tenant as string,
                  allowedTenants: allowedTenants
                };
              });
              */
            }).catch(reason => {
              if (reason?.response?.status === 401 || reason?.response?.status === 403) {
                console.log('No user authenticated, switch to sign in');
                newUserManager.signinRedirect();
              }              
            });
          } else {
            console.log('No user authenticated, switch to sign in');
            newUserManager.signinRedirect();
          }
        });
      }
    }
  }, [authority, client, redirect_uri, post_logout_redirect_uri, response_type, scope, metaTenantApiFactory, secret, session$, token$, refresh_token$, timeout_in$, tenant$, allowedTenants$]);

  useEffect(() => {
    if (version && showInfo && showError && userManager && metaTenantApiFactory && identityUserApiFactory) {
      setValue(previousValue => {
        return {
          ...previousValue,
          version: version,
          login: (_username, _password, redirect) => {
            userManager.signinRedirect(redirect);
          },
          logout: () => {
            session$.next(undefined);
            token$.next(undefined);
            refresh_token$.next(undefined);
            timeout_in$.next(undefined);
            tenant$.next(undefined);
            allowedTenants$.next(undefined);

            showInfo('rights.notifications.logoutsuccess');

            userManager.signoutRedirect();
          },
          expired: () => {
            session$.next(undefined);
            token$.next(undefined);
            refresh_token$.next(undefined);
            timeout_in$.next(undefined);
            tenant$.next(undefined);
            allowedTenants$.next(undefined);

            showInfo('rights.notifications.sessionexpired');

            userManager.signinRedirect();
          },
          refresh: () => {
            userManager.signinSilent().then(user => {
              if (user) {
                metaTenantApiFactory().allowed(user.access_token).then(allowedTenants => {  
                  let session = {
                    access_token: user.access_token,
                    expires_in: user.expires_in,
                    identifier: user.profile.sub,
                    email: user.profile.preferred_username,
                    issued: new Date(),
                  } as SessionWithUserInfo;

                  session = Object.assign(session, user.profile);

                  session$.next(session);
                  token$.next(session.access_token);
                  refresh_token$.next(session.refresh_token);
                  timeout_in$.next(session.expires_in
                    ? moment(new Date())
                        .add(session.expires_in, 'seconds')
                        .toDate() 
                    : undefined);
                  tenant$.next(session.tenant as string);
                  allowedTenants$.next(allowedTenants);

                  /*
                  setValue(previousValue => {
                    return {
                      ...previousValue,
                      token: session.access_token,
                      refresh_token: session.refresh_token,
                      expires_in: session.expires_in,
                      issued: new Date(),
                      session: session,
                      timeout_in: session.expires_in
                        ? moment(new Date())
                            .add(session.expires_in, 'seconds')
                            .toDate()
                        : undefined,
                      tenant: session.tenant as string,
                      allowedTenants: allowedTenants
                    };
                  });
                  */
                });
              }
            });
          },          
          switchTenant: (tenant) => {
            userManager.getUser().then(user => {
              if (user) {
                identityUserApiFactory().switchTenantFunc(user.access_token, tenant).then(() => {
                  showInfo('rights.notifications.logoutfortenantswitch');

                  userManager.signinRedirect();
                });
              }              
            });            
          }
        };
      });
    }
  }, [version, showInfo, showError, userManager, metaTenantApiFactory, identityUserApiFactory, session$, token$, refresh_token$, timeout_in$, tenant$, allowedTenants$]);

  const loginRedirectCallback = useCallback(() => {
    if (
      authority &&
      client &&
      redirect_uri &&
      post_logout_redirect_uri &&
      response_type &&
      scope &&
      navigate &&
      showInfo &&
      showError &&
      metaTenantApiFactory
    ) {
      const newUserManager = new UserManager({
        response_mode: 'query',
        authority,
        client_id: client,
        client_secret: secret,
        redirect_uri,
        post_logout_redirect_uri,
        response_type,
        scope,
        userStore: new WebStorageStateStore({ store: window.sessionStorage }),
      });

      newUserManager
        .signinRedirectCallback()
        .then(user => {
          if (user) {
            metaTenantApiFactory().allowed(user.access_token).then(allowedTenants => {
              let session = {
                access_token: user.access_token,
                expires_in: user.expires_in,
                identifier: user.profile.sub,
                email: user.profile.preferred_username,
                issued: new Date(),
              } as SessionWithUserInfo;

              session = Object.assign(session, user.profile);

              setUserManager(newUserManager);

              session$.next(session);
              token$.next(session.access_token);
              refresh_token$.next(session.refresh_token);
              timeout_in$.next(session.expires_in
                ? moment(new Date())
                    .add(session.expires_in, 'seconds')
                    .toDate() 
                : undefined);
              tenant$.next(session.tenant as string);
              allowedTenants$.next(allowedTenants);

              /*
              setValue(previousValue => {
                return {
                  ...previousValue,
                  token: session.access_token,
                  refresh_token: session.refresh_token,
                  expires_in: session.expires_in,
                  issued: new Date(),
                  session: session,
                  timeout_in: session.expires_in
                    ? moment(new Date())
                        .add(session.expires_in, 'seconds')
                        .toDate()
                    : undefined,
                  tenant: session.tenant as string,
                  allowedTenants: allowedTenants
                };
              });
              */

              navigate('/');

              showInfo('rights.notifications.loginsuccess');
            });
          }
        })
        .catch(reason => showError(reason));
    }
  }, [
    authority,
    client,
    secret,
    redirect_uri,
    post_logout_redirect_uri,
    response_type,
    scope,
    navigate,
    showInfo,
    showError,
    metaTenantApiFactory,
    session$, token$, refresh_token$, timeout_in$, tenant$, allowedTenants$
  ]);

  useEffect(() => {
    if (account_management_uri) {
      setValue(previousValue => {
        return {
          ...previousValue,
          manageAccount: () => {
            window.open(account_management_uri);
          },
        };
      });
    }
  }, [account_management_uri]);

  return (
    <RightsContext.Provider value={value}>
      <Routes>        
        <Route
          path="/signin-oidc"        
          element={<OidcAuthCallback redirectCallback={loginRedirectCallback} />}
        />
        <Route path="*" element={children}/>
      </Routes>        
    </RightsContext.Provider>
  );
};
