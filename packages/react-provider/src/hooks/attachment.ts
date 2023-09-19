import { useMemo } from "react";
import { useAttachmentApi } from "./api";

export interface AttachmentOperations {
    fetch?: () => Promise<Array<Record<string, unknown>>>;
    upload?: (file: File) => Promise<void>;
    open?: (fileName: string) => Promise<string>;
    drop?: (fileName: string) => Promise<void>;
}

export const useAttachments = (owner: string) => {
    const attachmentApi = useAttachmentApi();

    return useMemo(() => ({
        fetch: (owner) ? () => attachmentApi?.fetchQueryByOwner(owner) : undefined,
        upload: (owner) ? (file) => attachmentApi?.fetchUpload(owner, file) : undefined,
        open: (owner) ? (fileName) => attachmentApi?.fetchOpen(owner, fileName) : undefined,
        drop: (owner) ? (fileName) => attachmentApi?.fetchRemove(owner, fileName) : undefined,   
    } as AttachmentOperations), [attachmentApi, owner]);
}