export interface MetaLookupApi {
  selectListForLookupFunc: (token: string, lookupId: string) => Promise<Array<Record<string, unknown>>>;
  selectByIdForLookupFunc: (token: string, lookupId: string) => (id: string) => Promise<Record<string, unknown>>;
  selectListForLookupIdentifierFunc: (token: string, identifier: string) => Promise<Array<Record<string, unknown>>>;
  selectByIdForLookupIdentifierFunc: (
    token: string,
    identifier: string,
  ) => (id: string) => Promise<Record<string, unknown>>;
  selectListForLookupWithParamFunc: (
    token: string,
    lookupId: string,
    param: unknown,
  ) => Promise<Array<Record<string, unknown>>>;
  selectByIdForLookupWithParamFunc: (
    token: string,
    lookupId: string,
    param: unknown,
  ) => (id: string) => Promise<Record<string, unknown>>;
  autoCompleteForLookupFunc: (token: string, lookupId: string) => Promise<Array<unknown>>;
  autoCompleteForLookupWithParamFunc: (token: string, lookupId: string, param: unknown) => Promise<Array<unknown>>;
}
