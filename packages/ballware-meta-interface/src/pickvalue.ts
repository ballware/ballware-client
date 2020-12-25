export interface MetaPickvalueApi {
  selectListForEntityAndField: (
    token: string,
    entity: string,
    field: string,
  ) => Promise<Array<Record<string, unknown>>>;
  selectByValueForEntityAndField: (
    token: string,
    entity: string,
    field: string,
  ) => (value: number | string) => Promise<Record<string, unknown>>;
}
