import { CrudItem } from "@ballware/meta-interface";
import { MetaContext } from "@ballware/react-contexts";
import { useContext, useMemo } from "react";
import { useScriptUtil } from "../util";

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

    const { customParam, mappingScripts } = useContext(MetaContext);

    const scriptUtil = useScriptUtil();

    return useMemo(() => ({
        mapIncomingItem: (mappingScripts && customParam && scriptUtil) ? (item =>
            mappingScripts.mapItem
            ? mappingScripts.mapItem(item, customParam, scriptUtil)
            : item) : undefined,
        mapOutgoingItem: (mappingScripts && customParam && scriptUtil) ? (item =>
            mappingScripts.reverseMapItem
            ? mappingScripts.reverseMapItem(
                item,
                customParam,
                scriptUtil
                )
            : item) : undefined,
    } as MetaMappingOperations), [mappingScripts, customParam, scriptUtil]);
}