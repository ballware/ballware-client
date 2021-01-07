export interface MetaLookupApi {
  selectListForLookup: (
    token: string,
    lookupId: string
  ) => Promise<Array<Record<string, unknown>>>;
  selectByIdForLookup: (
    token: string,
    lookupId: string
  ) => (id: string) => Promise<Record<string, unknown>>;
  selectListForLookupIdentifier: (
    token: string,
    identifier: string
  ) => Promise<Array<Record<string, unknown>>>;
  selectByIdForLookupIdentifier: (
    token: string,
    identifier: string
  ) => (id: string) => Promise<Record<string, unknown>>;
  selectListForLookupWithParam: (
    token: string,
    lookupId: string,
    param: unknown
  ) => Promise<Array<Record<string, unknown>>>;
  selectByIdForLookupWithParam: (
    token: string,
    lookupId: string,
    param: unknown
  ) => (id: string) => Promise<Record<string, unknown>>;
  autoCompleteForLookup: (
    token: string,
    lookupId: string
  ) => Promise<Array<unknown>>;
  autoCompleteForLookupWithParam: (
    token: string,
    lookupId: string,
    param: unknown
  ) => Promise<Array<unknown>>;
}
