import { CrudItem, GridLayoutColumn } from "@ballware/meta-interface";
import { EditModes, MetaContext, RightsContext } from "@ballware/react-contexts";
import { useContext, useMemo } from "react";
import { createUtil } from "../../scriptutil";

export interface MetaDetailItemOperations {
    /**
     * Modify options for detail grid cell before rendering
     * @param mode Edit mode currently executed
     * @param item Parent item
     * @param detailItem Detail item in detail grid row
     * @param identifier Data member identifier of current cell
     * @param options Options for cell
     */
    detailGridCellPreparing?: (
        mode: EditModes,
        item: Record<string, unknown>,
        detailItem: Record<string, unknown>,
        identifier: string,
        options: GridLayoutColumn
    ) => void;

    /**
     * Validate changed detail row before saving
     * @param mode Edit mode currently executed
     * @param item Parent item
     * @param detailItem Detail item in detail grid row
     * @param identifier Data member identifier of current cell
     * @returns Validation message if validation failed, undefined if validation succeeded
     */
    detailGridRowValidating?: (
        mode: EditModes,
        item: Record<string, unknown>,
        detailItem: Record<string, unknown>,
        identifier: string
    ) => string;

    /**
     * Initialize new generated detail item
     * @param dataMember Data member identifier of detail collection
     * @param item Parent item
     * @param detailItem New generated detail item
     */
    initNewDetailItem?: (
        dataMember: string,
        item: Record<string, unknown>,
        detailItem: Record<string, unknown>
    ) => void;
}

export const useMetaDetailItems = () => {

    const { token } = useContext(RightsContext);
    const { customScripts } = useContext(MetaContext);

    return useMemo(() => ({
        detailGridCellPreparing: (customScripts && token) ? (
            mode,
            item,
            detailItem,
            identifier,
            options
        ) => {
            if (customScripts.detailGridCellPreparing) {
                customScripts.detailGridCellPreparing(
                mode,
                item as CrudItem,
                detailItem,
                identifier,
                options,
                createUtil(token)
                );
            }
        } : undefined,
        detailGridRowValidating: (customScripts && token) ? (mode, item, detailItem, identifier) => {
            if (customScripts.detailGridRowValidating) {
                return customScripts.detailGridRowValidating(
                mode,
                item as CrudItem,
                detailItem,
                identifier,
                createUtil(token)
                );
            }

            return undefined;
        } : undefined,
        initNewDetailItem: (customScripts && token) ? (dataMember, item, detailItem) => {
            if (customScripts.initNewDetailItem) {
                customScripts.initNewDetailItem(
                dataMember,
                item as CrudItem,
                detailItem,
                createUtil(token)
                );
            }
        } : undefined,
    }) as MetaDetailItemOperations, []);
}