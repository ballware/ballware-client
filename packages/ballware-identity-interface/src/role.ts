export interface IdentityRoleApi {
  selectListFunc: (token: string) => Promise<Array<Record<string, unknown>>>;
  selectByIdFunc: (token: string, identifier: string) => Promise<Record<string, unknown>>;
}
