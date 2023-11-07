import { RightsContext, SettingsContext } from "@ballware/react-contexts";
import { useContext, useMemo } from "react"

export interface AttachmentApiOperations {
    fetchQueryByOwner: (
        owner: string
    ) => Promise<Array<Record<string, unknown>>>;
    fetchUpload: (owner: string, file: File) => Promise<void>;
    fetchOpen: (owner: string, fileName: string) => Promise<string>;
    fetchRemove: (owner: string, fileName: string) => Promise<void>;
}

export const useAttachmentApi = () => {
    const { token } = useContext(RightsContext);
    const { metaAttachmentApi } = useContext(SettingsContext);

    return useMemo(() => token ? ({
        fetchQueryByOwner: (owner) => metaAttachmentApi.queryByOwner(token, owner),
        fetchUpload: (owner, file) => metaAttachmentApi.upload(token, owner, file),
        fetchOpen: (owner, fileName) => metaAttachmentApi.open(token, owner, fileName),
        fetchRemove: (owner, fileName) => metaAttachmentApi.remove(token, owner, fileName)
    } as AttachmentApiOperations) : undefined, [token, metaAttachmentApi]);
}