import { GridLayout } from "@ballware/meta-interface";
import { LookupContext, MetaContext } from "@ballware/react-contexts";
import { useContext, useMemo } from "react"
import { useScriptUtil } from "../util";

export interface MetaGridLayoutOperations {
    /**
     * Get grid layout by identifier from entity metadata
     * @param identifier Unique identifier of grid layout
     * @returns Grid layout metadata if available
     */
    getGridLayout?: (identifier: string) => GridLayout | undefined;

    /**
     * Prepare grid layout by custom script
     * @param gridLayout Grid layout to be prepared
     */
    prepareGridLayout?: (gridLayout: GridLayout) => void;
}

export const useMetaGridLayout = () => {

    const { lookups } = useContext(LookupContext);
    const { gridLayouts, customScripts, customParam } = useContext(MetaContext);
    const scriptUtil = useScriptUtil();

    return useMemo(() => ({
        getGridLayout: gridLayouts ? identifier => gridLayouts?.find(l => l.identifier === identifier) : undefined,
        prepareGridLayout: (scriptUtil && lookups) ? gridLayout => {
            if (customScripts?.prepareGridLayout) {
                customScripts.prepareGridLayout(
                    (lookups as Record<string, unknown>) ?? {},
                    customParam,
                    scriptUtil,
                    gridLayout
                );
            }
          } : undefined,
    } as MetaGridLayoutOperations), [gridLayouts, customScripts, customParam, scriptUtil, lookups]);
}