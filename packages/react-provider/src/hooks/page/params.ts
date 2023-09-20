import { EditUtil, ValueType } from "@ballware/meta-interface";
import { LookupContext, PageContext } from "@ballware/react-contexts";
import { useContext, useMemo } from "react"
import { useScriptUtil } from "../util";

export interface PageParamOperations {
    /**
     * All parameter editors initialized
     * @param hidden True if parameter editor display is hidden because of media limitations
     */
    paramsInitialized?: (hidden: boolean) => void;

    /**
     * Parameter editor for identifier is inizialized (and displayed)
     * @param identifier Identifier of parameter editor
     * @param editUtil Adaptor for access to parameter editor instances
     */
    paramEditorInitialized?: (identifier: string, editUtil: EditUtil) => void;

    /**
     * Parameter editor value changed
     * @param identifier Identifier of parameter editor
     * @param value Current value of parameter editor
     * @param editUtil Adapter for access to parameter editor instances
     */
    paramEditorValueChanged?: (
        name: string,
        value: ValueType,
        editUtil: EditUtil
    ) => void;

    /**
     * Parameter editor event triggered
     * @param identifier Identifier of parameter editor
     * @param event Specific identifier of event
     * @param editUtil Adapter for access to parameter editor instances
     * @param param Optional event specific parameter
     */
    paramEditorEvent?: (
        name: string,
        event: string,
        editUtil: EditUtil,
        param?: ValueType
    ) => void;
}

export const usePageParams = () => {
    const { lookups } = useContext(LookupContext);
    const { customScripts, pageParam, scriptActions } = useContext(PageContext);
    const scriptUtil = useScriptUtil();

    return useMemo(() => ({
        paramsInitialized: (customScripts && lookups && scriptUtil && scriptActions) ? (hidden: boolean) => {
            if (customScripts.paramsInitialized) {
                customScripts.paramsInitialized(
                    hidden,
                    lookups,
                    scriptUtil,
                    scriptActions,
                    pageParam
                );
            }
          } : undefined,    
        paramEditorInitialized: (customScripts && lookups && scriptUtil && scriptActions) ? (name: string, editUtil: EditUtil) => {
            if (customScripts.paramEditorInitialized) {
                customScripts.paramEditorInitialized(
                    name,
                    editUtil,
                    lookups,
                    scriptUtil,
                    scriptActions,
                    pageParam
              );
            }
          } : undefined,    
        paramEditorValueChanged: (customScripts && lookups && scriptUtil && scriptActions) ? (
            name: string,
            value: ValueType,
            editUtil: EditUtil
          ) => {
            if (customScripts.paramEditorValueChanged) {
                customScripts.paramEditorValueChanged(
                    name,
                    value,
                    editUtil,
                    lookups,
                    scriptUtil,
                    scriptActions,
                    pageParam
                );
            }
          } : undefined,    
        paramEditorEvent: (customScripts && lookups && scriptUtil && scriptActions) ? (
            name: string,
            event: string,
            editUtil: EditUtil,
            param?: Record<string, unknown>
          ) => {
            if (customScripts.paramEditorEvent) {
                customScripts.paramEditorEvent(
                    name,
                    event,
                    editUtil,
                    lookups,
                    scriptUtil,
                    scriptActions,
                    pageParam,
                    param
                );
            }
          } : undefined
    } as PageParamOperations), [lookups, customScripts, pageParam, scriptActions, scriptUtil]);
}