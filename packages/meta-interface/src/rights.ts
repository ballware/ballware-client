/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

/**
 * Definition for extended rights check function for custom script right checks
 *
 * @param userinfo Container with current user rights
 * @param entity Requested business object type
 * @param right Requested right
 * @param param Extra param for custom rights check
 * @param result Rights check result from default function
 * @returns true if access is allowed, false if not
 */
export type RightsCheckFunc = (
  userinfo: Record<string, unknown>,
  entity: string,
  right: string,
  param: Record<string, unknown> | undefined,
  result: boolean
) => boolean;
