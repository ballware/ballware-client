import { GridLayout } from "@ballware/meta-interface";
import { LookupContext, MetaContext, RightsContext } from "@ballware/react-contexts";
import { useContext, useMemo } from "react"
import { createUtil } from "../../scriptutil";

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

    const { token } = useContext(RightsContext);
    const { lookups } = useContext(LookupContext);
    const { gridLayouts, customScripts, customParam } = useContext(MetaContext);

    return useMemo(() => ({
        getGridLayout: gridLayouts ? identifier => gridLayouts?.find(l => l.identifier === identifier) : undefined,
        prepareGridLayout: (token && lookups) ? gridLayout => {
            if (token && customScripts?.prepareGridLayout) {
                customScripts.prepareGridLayout(
                    (lookups as Record<string, unknown>) ?? {},
                    customParam,
                    createUtil(token),
                    gridLayout
                );
            }
          } : undefined,
    } as MetaGridLayoutOperations), [gridLayouts, customScripts, customParam, token, lookups]);
}