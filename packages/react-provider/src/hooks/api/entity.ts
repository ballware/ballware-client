import { CompiledEntityMetadata, DocumentSelectEntry } from "@ballware/meta-interface";
import { RightsContext, SettingsContext } from "@ballware/react-contexts";
import { useContext, useMemo } from "react"

export interface EntityApiOperations {
    fetchMetadataForEntity: (
        entity: string
    ) => Promise<CompiledEntityMetadata>;

    fetchDocumentsForEntity: (
        entity: string
    ) => Promise<Array<DocumentSelectEntry>>;
}

export const useEntityApi = () => {
    const { token } = useContext(RightsContext);
    const { metaEntityApi } = useContext(SettingsContext);

    return useMemo(() => token ? ({
        fetchMetadataForEntity: (entity) => metaEntityApi.metadataForEntity(token, entity),
        fetchDocumentsForEntity: (entity) => metaEntityApi.documentsForEntity(token, entity)
    } as EntityApiOperations) : undefined, [token, metaEntityApi]);
}