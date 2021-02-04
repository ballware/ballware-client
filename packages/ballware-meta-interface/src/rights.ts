/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

/**
 * Container for user rights information
 */
export interface Rights {
  /**
   * Mail adress of user
   */
  Email: string;

  /**
   * Tenant of current user
   */
  TenantId?: string;

  /**
   * Collection of user claims
   */
  Claims: Array<string>;
}

/**
 * Definition of rights for default operations
 */
export enum EntityRights {
  RIGHT_VIEW = 'view',
  RIGHT_ADD = 'add',
  RIGHT_EDIT = 'edit',
  RIGHT_DELETE = 'delete',
  RIGHT_PRINT = 'print',
}

/**
 * Definition for extended rights check function for custom script right checks
 *
 * @param rights Container with current user rights
 * @param entity Requested business object type
 * @param right Requested right
 * @param param Extra param for custom rights check
 * @param result Rights check result from default function
 * @returns true if access is allowed, false if not
 */
export type ExtendedRightsCheckFunc = (
  rights: Rights,
  entity: string,
  right: EntityRights | string,
  param: Record<string, unknown> | undefined,
  result: boolean
) => boolean;

/**
 * Function for checking specific access right for business object operations
 *
 * @param rights Container with current user rights
 * @param application Application scope the business object is nested in
 * @param entity Business object type identifier
 * @param right Requested right
 * @param extendedRightCheckFunc Extended rights check function
 * @param param Extra param for custom rights check
 * @returns true if access is allowed, false if not
 */
export function hasRight(
  rights: Rights,
  application: string,
  entity: string,
  right: EntityRights | string,
  extendedRightCheckFunc?: ExtendedRightsCheckFunc,
  param?: Record<string, unknown>
): boolean {
  let result =
    rights && rights.Claims?.includes(application + '.' + entity + '.' + right);

  if (extendedRightCheckFunc) {
    result = extendedRightCheckFunc(rights, entity, right, param, result);
  }

  return result;
}

/**
 * Function for checking any access right for business object operations
 *
 * @param rights Container with current user rights
 * @param application Application scope the business object is nested in
 * @param entity Business object type identifier
 * @param right Requested right
 * @returns true if access is allowed, false if not
 */
export function hasAnyRight(
  rights: Rights,
  application: string,
  entity: string,
  right: EntityRights
): boolean {
  return (
    rights &&
    rights.Claims?.find(c =>
      c.startsWith(application + '.' + entity + '.' + right)
    ) !== undefined
  );
}
