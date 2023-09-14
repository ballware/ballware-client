import { EditLayout } from "@ballware/meta-interface";
import { EditModes, LookupContext, MetaContext, RightsContext } from "@ballware/react-contexts";
import { useContext, useMemo } from "react"
import { createUtil } from "../../scriptutil";

export interface MetaEditLayoutOperations {
    /**
     * Get edit layout by identifier from entity metadata
     * @param identifier Unique identifier of edit layout
     * @returns Edit layout metadata if available
     */
    getEditLayout?: (identifier: string) => EditLayout | undefined;

    /**
     * Prepare edit layout by custom script
     * @param mode Edit mode currently executed
     * @param editLayout Edit layout to be prepared
     */
    prepareEditLayout?: (mode: EditModes, editLayout: EditLayout) => void;    
}

export const useMetaEditLayout = () => {

    const { token } = useContext(RightsContext);
    const { lookups } = useContext(LookupContext);
    const { editLayouts, customScripts, customParam } = useContext(MetaContext);

    return useMemo(() => ({
        getEditLayout: editLayouts ? identifier => editLayouts.find(l => l.identifier === identifier): undefined,
        prepareEditLayout: (token && customScripts && customParam && lookups) ? (mode, editLayout) => {
            if (customScripts?.prepareEditLayout) {
                customScripts.prepareEditLayout(
                mode,
                (lookups as Record<string, unknown>) ?? {},
                customParam,
                createUtil(token),
                editLayout
              );
            }
          } : undefined,   
    } as MetaEditLayoutOperations), [editLayouts, customScripts, customParam, lookups, token]);
}