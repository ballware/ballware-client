import { CrudItem } from "@ballware/meta-interface";
import { MetaContext, RightsContext } from "@ballware/react-contexts";
import { useContext, useMemo } from "react"
import { createUtil } from "../../scriptutil";

export interface MetaMappingOperations {
    /**
     * Prepare fetched item for usage in frontend
     * @param item Item fetched by backend
     * @returns Mapped item for frontend
     */
    mapIncomingItem?: (item: CrudItem) => CrudItem;

    /**
     * Prepare changed item for usage in backend
     * @param item Item modified in frontend
     * @returns Mapped item for backend
     */
    mapOutgoingItem?: (item: CrudItem) => CrudItem;
}

export const useMetaMapping = () => {

    const { token } = useContext(RightsContext);
    const { customParam, mappingScripts } = useContext(MetaContext);

    return useMemo(() => ({
        mapIncomingItem: (mappingScripts && customParam && token) ? (item =>
            mappingScripts.mapItem
            ? mappingScripts.mapItem(item, customParam, createUtil(token))
            : item) : undefined,
        mapOutgoingItem: (mappingScripts && customParam && token) ? (item =>
            mappingScripts.reverseMapItem
            ? mappingScripts.reverseMapItem(
                item,
                customParam,
                createUtil(token)
                )
            : item) : undefined,
    } as MetaMappingOperations), [mappingScripts, customParam, token]);
}