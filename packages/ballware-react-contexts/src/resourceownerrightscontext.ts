/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { createContext } from 'react';
import { Rights } from '@ballware/meta-interface';

/**
 * Persisted part of rights state in application store
 */
export interface PersistedResourceOwnerRightsState {
    /**
     * User rights for current user
     */
    rights?: Rights;

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
}

/**
 * Context for providing user session functionality
 */
export interface RightsContextState extends PersistedResourceOwnerRightsState {
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
     * Refresh user session with refresh token
     */
    refresh?: () => void;
}

export const ResourceOwnerRightsContext = createContext({} as RightsContextState);
