/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { createContext } from 'react';
import { SessionWithUserInfo } from '@ballware/identity-interface';

/**
 * Persisted part of rights state in application store
 */
export interface PersistedRightsState {
  /**
   * User rights for current user
   */
  session?: SessionWithUserInfo;

  /**
   * Access token timeout stamp
   */
  timeout_in?: Date;

  /**
   * Access token
   */
  token?: string;

  /**
   * Refresh token
   */
  refresh_token?: string;

  /**
   * Number of seconds the access token expires in
   */
  expires_in?: number;

  /**
   * Last login try error message
   */
  error?: string;

  /**
   * Current active tenant
   */
  tenant?: string;
}

/**
 * Context for providing user session functionality
 */
export interface RightsContextState extends PersistedRightsState {
  /**
   * Login user
   * @param username Login name for user
   * @param password Password of user
   * @param redirect Redirect url after successful login
   */
  login?: (username: string, password: string, redirect: string) => void;

  /**
   * Logout current user
   */
  logout?: () => void;

  /**
   * Session expired notification
   */
  expired?: () => void;

  /**
   * Register new user for application
   * @param username Requested unique user name
   * @param displayname Display name of new user
   * @param password Password for new user
   */
  register?: (username: string, displayname: string, password: string) => void;

  /**
   * Require password reset message for lost password
   * @param email Mail adress of lost password account
   */
  forgotPassword?: (email: string) => void;

  /**
   * Reset lost password with reset code
   * @param email Mail adress of lost password accout
   * @param code Provided password reset code
   * @param newPassword New user password
   */
  resetPassword?: (email: string, code: string, newPassword: string) => void;

  /**
   * Change password of logged in user
   * @param oldPassword Current password for validation
   * @param newPassword New password for user
   */
  changePassword?: (oldPassword: string, newPassword: string) => void;

  /**
   * Switch to account management
   */
  manageAccount?: () => void;

  /**
   * Refresh user session with refresh token
   */
  refresh?: () => void;

  /**
   * Switch to other tenant
   */
  switchTenant?: (tenant: string) => void;

  /**
   * List of allowed tenants for current user
   */
  allowedTenants?: Array<{ Id: string, Name: string }>;
}

export const RightsContext = createContext({} as RightsContextState);
