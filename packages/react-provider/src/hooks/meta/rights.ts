import { CrudItem, EntityCustomFunction } from "@ballware/meta-interface";
import { MetaContext, RightsContext, TenantContext } from "@ballware/react-contexts";
import { useCallback, useContext, useMemo } from "react";

export interface MetaAllowedFunctions {
    /**
   * Check if add operation is allowed for current user
   * @returns true if add is allowed
   */
  addAllowed?: () => boolean;

  /**
   * Check if view details operation is allowed for current user
   * @param item Item to be viewed
   * @returns true if view is allowed
   */
  viewAllowed?: (item: CrudItem) => boolean;

  /**
   * Check if edit operation is allowed for current user
   * @param item Item to be edited
   * @returns true if edit is allowed
   */
  editAllowed?: (item: CrudItem) => boolean;

  /**
   * Check if drop operation is allowed for current user
   * @param item Item to be dropped
   * @returns true if drop is allowed
   */
  dropAllowed?: (item: CrudItem) => boolean;

  /**
   * Check if print operation is allowed for current user
   * @param item Item to be printed
   * @returns true if print is allowed
   */
  printAllowed?: (item: CrudItem) => boolean;

  /**
   * Check if custom edit function is allowed for current user
   * @param customFunction Function used for editing
   * @param item Item to be edited (undefined if function is type 'add')
   * @returns true if custom function is allowed
   */
  customFunctionAllowed?: (
    customFunction: EntityCustomFunction,
    item?: CrudItem
  ) => boolean;
}

export const useMetaAllowed = () => {
    const { session } = useContext(RightsContext);
    const { hasRight } = useContext(TenantContext);
    const { application, entity, customScripts, customParam, readOnly, documents } = useContext(MetaContext);

    const headAllowed = useCallback((right: string) => {
        return (
            application &&
            entity &&
            customScripts &&
            customParam &&
            session &&
            hasRight &&
            !readOnly &&
            (customScripts?.rightsCheck ?
                customScripts?.rightsCheck(session, application, entity, readOnly, right, customScripts?.rightsParamForHead
                ? customScripts.rightsParamForHead(customParam)
                : undefined,
                hasRight(`${application}.${entity}.${right}`))
                : hasRight(`${application}.${entity}.${right}`))
        );
      }, [session, application, entity, customScripts, customParam, readOnly, hasRight]);
  
      const itemAllowed = useCallback((item: CrudItem, right: string) => {
        return (
            application &&
            entity &&
            customScripts &&
            customParam &&
            session &&      
            hasRight &&  
            (customScripts?.rightsCheck ?
                customScripts?.rightsCheck(session, application, entity, readOnly, right, customScripts?.rightsParamForItem
                ? customScripts.rightsParamForItem(item, customParam)
                : undefined, 
                hasRight(`${application}.${entity}.${right}`))               
                : hasRight(`${application}.${entity}.${right}`))
        );
      }, [session, application, entity, customScripts, customParam, readOnly, hasRight]);


    return useMemo(() => ({
        addAllowed: () => headAllowed('add'),
        viewAllowed: item => itemAllowed(item, 'view'),
        editAllowed: item => itemAllowed(item, 'edit'),
        dropAllowed: item => itemAllowed(item, 'delete'),
        printAllowed: item =>
            documents?.length &&
            itemAllowed(item, 'print'),
        customFunctionAllowed: (customFunction, item) =>
            customFunction.type === 'edit' && item
            ? itemAllowed(item, customFunction.id)
            : headAllowed(customFunction.id),
    } as MetaAllowedFunctions), [headAllowed, itemAllowed, documents]);
}