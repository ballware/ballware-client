/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

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