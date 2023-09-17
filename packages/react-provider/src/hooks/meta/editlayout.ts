import { EditLayout } from "@ballware/meta-interface";
import { EditModes, LookupContext, MetaContext } from "@ballware/react-contexts";
import { useContext, useMemo } from "react";
import { useScriptUtil } from "../util";

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

    const { lookups } = useContext(LookupContext);
    const { editLayouts, customScripts, customParam } = useContext(MetaContext);

    const scriptUtil = useScriptUtil();

    return useMemo(() => ({
        getEditLayout: editLayouts ? identifier => editLayouts.find(l => l.identifier === identifier): undefined,
        prepareEditLayout: (scriptUtil && customScripts && customParam && lookups) ? (mode, editLayout) => {
            if (customScripts?.prepareEditLayout) {
                customScripts.prepareEditLayout(
                mode,
                (lookups as Record<string, unknown>) ?? {},
                customParam,
                scriptUtil,
                editLayout
              );
            }
          } : undefined,   
    } as MetaEditLayoutOperations), [editLayouts, customScripts, customParam, lookups, scriptUtil]);
}