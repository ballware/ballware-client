export interface Rights {
  Email: string;
  PersonId?: string;
  TenantId?: string;
  Claims: Array<string>;
}

export enum EntityRights {
  RIGHT_VIEW = 'view',
  RIGHT_ADD = 'add',
  RIGHT_EDIT = 'edit',
  RIGHT_DELETE = 'delete',
  RIGHT_PRINT = 'print',
}

export type ExtendedRightsCheckFunc = (
  rights: Rights,
  entity: string,
  right: EntityRights | string,
  param: Record<string, unknown> | undefined,
  result: boolean,
) => boolean;

export function hasRight(
  rights: Rights,
  application: string,
  entity: string,
  right: EntityRights | string,
  extendedRightCheckFunc?: ExtendedRightsCheckFunc,
  param?: Record<string, unknown>,
): boolean {
  let result = rights && rights.Claims?.includes(application + '.' + entity + '.' + right);

  if (extendedRightCheckFunc) {
    result = extendedRightCheckFunc(rights, entity, right, param, result);
  }

  return result;
}

export function hasAnyRight(rights: Rights, application: string, entity: string, right: EntityRights): boolean {
  return rights && rights.Claims?.find((c) => c.startsWith(application + '.' + entity + '.' + right)) !== undefined;
}
