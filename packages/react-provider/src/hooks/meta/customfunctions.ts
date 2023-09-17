import { CrudItem, QueryParams } from "@ballware/meta-interface";
import { LookupContext, MetaContext } from "@ballware/react-contexts";
import { useContext, useMemo } from "react";
import { useScriptUtil } from "../util";

export interface MetaCustomFunctionOperations {
  /**
   * Prepare item data for custom edit function
   * @param identifier Identifier of custom function
   * @param selection Collection of selected items
   * @param execute Execute callback containing prepared edit item data
   * @param message Message callback for notifying user with reason why edit operation is canceled
   * @param params Optional parameter values for initialization
   */
  prepareCustomFunction?: (
    identifier: string,
    selection: Array<CrudItem> | undefined,
    execute: (param: Record<string, unknown>, text: string | undefined) => void,
    message: (message: string) => void,
    params?: QueryParams
  ) => void;

  /**
   * Evaluate item data for save operation
   * @param identifier Identifier of custom function
   * @param param Edited data in operation
   * @param save Save callback for storing item data in backend
   * @param messsage Message callback for notifying user with reason why save operation is declined   
   */
  evaluateCustomFunction?: (
    identifier: string,
    param: Record<string, unknown>,
    save: (param: Record<string, unknown>) => void,
    message: (message: string) => void
  ) => void;
}

export const useMetaCustomFunctions = () => {

    const { lookups } = useContext(LookupContext);
    const { customScripts } = useContext(MetaContext);

    const scriptUtil = useScriptUtil();

    return useMemo(() => ({
        prepareCustomFunction: (customScripts && lookups && scriptUtil) ? (identifier, selection, execute, message, params) => {
            if (customScripts.prepareCustomFunction) {
                    customScripts.prepareCustomFunction(
                    identifier,
                    (lookups as Record<string, unknown>) ?? {},
                    scriptUtil,
                    execute,
                    message,
                    params,
                    selection
                );
            } else {
              selection?.forEach(s => execute(s, undefined));
            }
          } : undefined,
          evaluateCustomFunction: (customScripts && lookups && scriptUtil) ? (identifier, param, save, message) => {
            if (customScripts.evaluateCustomFunction) {
                    customScripts.evaluateCustomFunction(
                    identifier,
                    (lookups as Record<string, unknown>) ?? {},
                    scriptUtil,
                    param,
                    save,
                    message
                );
            } else {
              save(param);
            }
          } : undefined,  
    } as MetaCustomFunctionOperations), [customScripts, lookups, scriptUtil]);
}