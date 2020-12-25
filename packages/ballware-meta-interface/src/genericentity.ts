import { CrudItem } from './cruditem';

export interface MetaGenericEntityApi {
  entityQueryFunc: (token: string, query: string, params?: Record<string, unknown>) => Promise<Array<CrudItem>>;
  entityByIdFunc: (token: string, id: string) => Promise<CrudItem>;
  entityNewFunc: (token: string, params?: Record<string, unknown>) => Promise<CrudItem>;
  entitySaveFunc: (token: string, item: CrudItem) => Promise<void>;
  entitySaveBatchFunc: (token: string, items: CrudItem[]) => Promise<void>;
  entityRemoveFunc: (token: string, id: string) => Promise<void>;
}
