export interface ScriptUtil {
  token: () => string;
  uuid: () => string;
  parse: (json: string) => Record<string, unknown> | Array<Record<string, unknown>>;
  stringify: (json: Record<string, unknown> | Array<Record<string, unknown>>) => string;
  dateToLocalDate: (date: Date) => Date;
  localDateToDate: (date: Date) => Date;
  beginOfYear: () => Date;
  endOfYear: () => Date;
  beginOfLastYear: () => Date;
  endOfLastYear: () => Date;
  withLookupList: (lookup: unknown, callback: (items: Array<Record<string, unknown>>) => void) => void;
  withLookupById: (lookup: unknown, id: string, callback: (item?: Record<string, unknown>) => void) => void;
  withAutocompleteList: (autocomplete: unknown, callback: (items: Array<Record<string, unknown>>) => void) => void;
  getJson: (url: string, success: (response: unknown) => void, failure: (message: string) => void) => void;
  getText: (url: string, success: (response: string) => void, failure: (message: string) => void) => void;
  geocodeAddress: (address: string, callback: (location: { lat: number; lng: number }) => void) => void;
  geocodeLocation: (
    location: { lat: number; lng: number },
    callback: (
      addresses: Array<{ street: string; houseNumber: string; zipCode: string; city: string; country: string }>,
    ) => void,
  ) => void;
}
