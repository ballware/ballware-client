export type ValueType =
  | undefined
  | Record<string, unknown>
  | string
  | number
  | boolean
  | Date
  | Array<string | number | Record<string, unknown>>
  | { lat: number; lng: number };

export interface CrudItem extends Record<string, ValueType> {
  Id: string;
  CreatorId?: string;
  CreateStamp?: Date;
  LastChangerId?: string;
  LastChangeStamp?: Date;
}
