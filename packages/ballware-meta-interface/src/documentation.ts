export interface MetaDocumentationApi {
  loadDocumentationForEntity: (
    token: string,
    entity: string
  ) => Promise<unknown>;
}
