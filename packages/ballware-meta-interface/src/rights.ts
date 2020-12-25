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
  param: Record<string, unknown>,
  result: boolean,
) => boolean;
