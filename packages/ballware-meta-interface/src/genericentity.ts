import { CrudItem } from './cruditem';

export interface MetaGenericEntityApi {
  entityQuery: (token: string, query: string, params?: Record<string, unknown>) => Promise<Array<CrudItem>>;
  entityById: (token: string, id: string) => Promise<CrudItem>;
  entityNew: (token: string, params?: Record<string, unknown>) => Promise<CrudItem>;
  entitySave: (token: string, item: CrudItem) => Promise<void>;
  entitySaveBatch: (token: string, items: CrudItem[]) => Promise<void>;
  entityRemove: (token: string, id: string) => Promise<void>;
}
