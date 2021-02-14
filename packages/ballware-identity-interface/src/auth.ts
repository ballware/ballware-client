/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { Rights } from '@ballware/meta-interface';

/**
 * Basic authentication response containing user token
 */
export interface Session {
  /** access token to make api request on behalf of authenticated user  */
  access_token: string;

  /** refresh token to grant a new access token for extended authentication session */
  refresh_token: string;

  /** number of seconds the access token will expire in */
  expires_in: number;

  /** Timestamp the access token was issued */
  issued: Date;
}

/**
 * Extendes authentication response including additional user info
 */
export interface SessionWithUserInfo extends Session, Record<string, unknown> {
  /** Subject of authenticated user (mail, unique user name...) */
  identifier: string;

  /** Mail adress of authenticated user, can be identical with identifer if authenticated via mail adress */
  email: string;
}

/**
 * Session extended with application specific user rights
 */
export interface MappedSessionWithUserRights extends SessionWithUserInfo {  
  /**
   * Collection of user rights
   */
  rights: Rights;
}

/**
 * Application specific mapping function for fetching additional information from authentication response (claims, rights...)
 *
 * @param sessionWithUserInfo - Response from login
 * @param userinfo - Response from userinfo endpoint with additional content
 * @returns - Extended session object with additional information
 */
export type UserInfoMappingFunc = <T extends MappedSessionWithUserRights>(
  sessionWithUserInfo: SessionWithUserInfo,
  userinfo: Record<string, unknown>
) => T;

/**
 * API for resource owner based authentication flow.
 *
 * @remarks
 * Attention: This is not save for usage in browser application
 */
export interface ResourceOwnerAuthApi {
  /**
   * Authenticate user with mail and password.
   * @param email - Mail adress or subject from authenticating user
   * @param password - Password for authentication
   * @param client - Client identifier for identifying application in OAuth service
   * @param secret - Secrect for client identifier
   * @param userinfoMapper - Application specific mapping function for fetching additional information from authentication response
   * @returns Promise resolving user session instance
   */
  login: <T extends SessionWithUserInfo>(
    email: string,
    password: string,
    client: string,
    secret: string,
    userinfoMapper: UserInfoMappingFunc
  ) => Promise<T>;

  /**
   * Logout authenticated user, invalidate access token
   *
   * @param accessToken - Valid token from authenticated user
   * @param client - Client identifier for identifying application in OAuth service
   * @param secret - Secrect for client identifier
   * @returns Promise resolved when logout has finished
   */
  logout: (
    accessToken: string,
    client: string,
    secret: string
  ) => Promise<void>;

  /**
   * Registering new user
   *
   * @param email - Unique mail adress for new user
   * @param password - Password for authentication user
   * @param displayname - Screen friendly representation of user
   * @returns Promise resolved when registration has finished
   */
  register: (
    email: string,
    password: string,
    displayname: string
  ) => Promise<void>;

  /**
   * Request password reset token for lost password
   *
   * @param email - Unique mail adress for requesting user
   * @returns Promise resolved when request was transmitted
   */
  forgotPassword: (email: string) => Promise<void>;

  /**
   * Reset password with password reset token
   *
   * @param email - Unique mail adress for requesting user
   * @param code - Token delivered by identity provider for password reset
   * @param newPassword - New password provided by user
   * @returns Promise resolved when request was transmitted
   */

  resetPassword: (
    email: string,
    code: string,
    newPassword: string
  ) => Promise<void>;

  /**
   * Change password for registered user
   *
   * @param accessToken - Valid access token for authenticated user
   * @param oldPassword - Previous password of user
   * @param newPassword - New password provided by user
   * @returns Promise resolved when password change was finished
   */
  changePassword: (
    accessToken: string,
    oldPassword: string,
    newPassword: string
  ) => Promise<void>;

  /**
   * Refresh access token for extending authenticated session
   *
   * @param refreshToken - Valid refresh token provided by login
   * @param client - Client identifier for identifying application in OAuth service
   * @param secret - Secrect for client identifier
   */
  refreshToken: (
    refreshToken: string,
    client: string,
    secret: string
  ) => Promise<Session>;
}
