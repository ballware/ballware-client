export interface MetaAttachmentApi {
  attachmentFetch: (
    token: string,
    owner: string
  ) => Promise<Array<Record<string, unknown>>>;
  attachmentUpload: (token: string, owner: string, file: File) => Promise<void>;
  attachmentOpen: (
    token: string,
    owner: string,
    fileName: string
  ) => Promise<string>;
  attachmentDelete: (
    token: string,
    owner: string,
    fileName: string
  ) => Promise<void>;
}
