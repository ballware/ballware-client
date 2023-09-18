import { EditLayoutItemOptions, EditUtil, ValueType } from "@ballware/meta-interface";
import { EditModes, LookupContext, MetaContext } from "@ballware/react-contexts";
import { useContext, useMemo } from "react";
import { useScriptUtil } from "../util";

export interface MetaEditingFunctions {
    /**
     * Prepare editor metadata by custom script
     * @param mode Edit mode currently executed
     * @param item Item to be edited
     * @param layoutItem Item metadata to be prepared
     * @param identifier Data member identifier of current editor
     */
    editorPreparing?: (
        mode: EditModes,
        item: Record<string, unknown>,
        layoutItem: EditLayoutItemOptions,
        identifier: string
    ) => void;

    /**
     * Customize instanciated editor component before edit
     * @param mode Edit mode currently executed
     * @param item Item to be edited
     * @param editUtil Adapter for accessing editor components
     * @param identifier Data member identifier of current editor
     */
    editorInitialized?: (
        mode: EditModes,
        item: Record<string, unknown>,
        editUtil: EditUtil,
        identifier: string
    ) => void;

    /**
     * Customize editor entered for editing
     * @param mode Edit mode currently executed
     * @param item Item to be edited
     * @param editUtil Adapter for accessing editor components
     * @param identifier Data member identifier of current editor
     */
    editorEntered?: (
        mode: EditModes,
        item: Record<string, unknown>,
        editUtil: EditUtil,
        identifier: string
    ) => void;

    /**
     * Editor value has changed
     * @param mode Edit mode currently executed
     * @param item Item to be edited
     * @param editUtil Adapter for accessing editor components
     * @param identifier Data member identifier of current editor
     * @param value Current value of data member
     */
    editorValueChanged?: (
        mode: EditModes,
        item: Record<string, unknown>,
        editUtil: EditUtil,
        identifier: string,
        value: ValueType
    ) => void;

    /**
     * Editor value custom validation requested
     * @param mode Edit mode currently executed
     * @param item Item to be edited
     * @param editUtil Adapter for accessing editor components
     * @param identifier Data member identifier of current editor
     * @param value Current value of data member
     * @param validation Identifier of custom validation rule
     */
    editorValidating?: (
        mode: EditModes,
        item: Record<string, unknown>,
        editUtil: EditUtil,
        identifier: string,
        value: ValueType,
        validation: string
    ) => boolean;

    /**
     * Editor event triggered
     * @param mode Edit mode currently executed
     * @param item Item to be edited
     * @param editUtil Adapter for accessing editor components
     * @param identifier Data member identifier of current editor
     * @param event Event identifier
     */

    editorEvent?: (
        mode: EditModes,
        item: Record<string, unknown>,
        editUtil: EditUtil,
        identifier: string,
        event: string
    ) => void;
}

export const useMetaEditing = () => {

    const { lookups } = useContext(LookupContext);
    const { customScripts } = useContext(MetaContext);
    const scriptUtil = useScriptUtil();
    
    return useMemo(() => ({
        editorPreparing: customScripts && lookups && scriptUtil ? (mode, item, layoutItem, identifier) => {
            if (customScripts?.editorPreparing) {
              customScripts.editorPreparing(
                mode,
                item,
                layoutItem,
                identifier,
                (lookups as Record<string, unknown>) ?? {},
                scriptUtil
              );
            }
        } : undefined,
        editorInitialized: customScripts && lookups && scriptUtil ? (mode, item, editUtil, identifier) => {
            if (customScripts?.editorInitialized) {
                customScripts.editorInitialized(
                mode,
                item,
                editUtil,
                identifier,
                (lookups as Record<string, unknown>) ?? {},
                scriptUtil
                );
            }
        } : undefined,
        editorEntered: customScripts && lookups && scriptUtil ? (mode, item, editUtil, identifier) => {
            if (customScripts?.editorEntered) {
                customScripts.editorEntered(
                mode,
                item,
                editUtil,
                identifier,
                (lookups as Record<string, unknown>) ?? {},
                scriptUtil
                );
            }
        } : undefined,
        editorValueChanged: customScripts && lookups && scriptUtil ?  (_mode, item, editUtil, identifier, value) => {
            if (customScripts?.editorValueChanged) {
                customScripts.editorValueChanged(
                item,
                editUtil,
                identifier,
                value,
                (lookups as Record<string, unknown>) ?? {},
                scriptUtil
                );
            }
        } : undefined,
        editorValidating: customScripts && lookups && scriptUtil ? (
            _mode,
            item,
            editUtil,
            identifier,
            value,
            validation
            ) => {
            if (customScripts?.editorValidating) {
                return customScripts.editorValidating(
                item,
                editUtil,
                identifier,
                value,
                validation,
                (lookups as Record<string, unknown>) ?? {},
                scriptUtil
                );
            } else {
                return true;
            }
        } : undefined,
        editorEvent: customScripts && lookups && scriptUtil ? (_mode, item, editUtil, identifier, event) => {
            if (customScripts?.editorEvent) {
                customScripts.editorEvent(
                item,
                editUtil,
                identifier,
                event,
                (lookups as Record<string, unknown>) ?? {},
                scriptUtil
                );
            }
        } : undefined,
    } as MetaEditingFunctions), [lookups, customScripts, scriptUtil]);
}