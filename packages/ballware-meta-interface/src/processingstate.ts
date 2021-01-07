export interface MetaProcessingstateApi {
  selectListForEntity: (
    token: string,
    entity: string
  ) => Promise<Array<Record<string, unknown>>>;
  selectListAllowedForEntityAndIds: (
    token: string,
    entity: string,
    ids: Array<string>
  ) => Promise<Array<Record<string, unknown>>>;
  selectByStateForEntity: (
    token: string,
    entity: string
  ) => (state: number | string) => Promise<Record<string, unknown>>;
}
