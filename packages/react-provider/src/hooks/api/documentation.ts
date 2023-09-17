import { RightsContext, SettingsContext } from "@ballware/react-contexts";
import { useContext, useMemo } from "react"

export interface DocumentationApiOperations {
    fetchDocumentationForEntity: (
        entity: string
      ) => Promise<unknown>;
}

export const useDocumentationApi = () => {
    const { token } = useContext(RightsContext);
    const { metaDocumentationApi } = useContext(SettingsContext);

    return useMemo(() => ({
        fetchDocumentationForEntity: (token) ? (entity) => metaDocumentationApi.loadDocumentationForEntity(token, entity) : undefined
    } as DocumentationApiOperations), [token, metaDocumentationApi]);
}