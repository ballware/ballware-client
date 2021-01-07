export interface DocumentSelectEntry {
  Id: string;
  Name: string;
}

export interface MetaDocumentApi {
  selectListPrintDocumentsForEntity: (
    token: string,
    entity: string
  ) => Promise<Array<DocumentSelectEntry>>;
  viewerUrl: (token: string, search: string) => Promise<string>;
}
