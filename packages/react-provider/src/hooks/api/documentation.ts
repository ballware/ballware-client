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

    return useMemo(() => token ? ({
        fetchDocumentationForEntity: (entity) => metaDocumentationApi.loadDocumentationForEntity(token, entity)
    } as DocumentationApiOperations) : undefined, [token, metaDocumentationApi]);
}