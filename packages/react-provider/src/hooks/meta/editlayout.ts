import { EditLayout, EditLayoutItem } from "@ballware/meta-interface";
import { EditModes, LookupContext, MetaContext, TenantContext } from "@ballware/react-contexts";
import { useContext, useMemo } from "react";
import { useScriptUtil } from "../util";

export interface TemplateItemOptions {
    scope: 'tenant' | 'meta';
    identifier: string;
}

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

    const { templates: tenantTemplates } = useContext(TenantContext);
    const { lookups } = useContext(LookupContext);
    const { editLayouts, customScripts, customParam, templates: metaTemplates } = useContext(MetaContext);
    
    const scriptUtil = useScriptUtil();

    return useMemo(() => ({
            getEditLayout: editLayouts ? identifier => editLayouts.find(l => l.identifier === identifier): undefined,
            prepareEditLayout: (scriptUtil && customScripts && customParam && lookups && tenantTemplates && metaTemplates) ? (mode, editLayout) => {

                const materializeTemplates = (items: EditLayoutItem[]) => {
                    return items?.map(item => {
                        if ('template' === item.type) {
                            const scope = (item.options?.itemoptions as TemplateItemOptions)?.scope;
                            const identifier = (item.options?.itemoptions as TemplateItemOptions)?.identifier;

                            let template: EditLayoutItem|undefined = undefined;

                            if (scope && identifier) {
                                switch (scope) {
                                    case 'tenant':
                                        template = tenantTemplates.find(t => t.identifier === identifier)?.definition;
                                        break;
                                    case 'meta':
                                        template = metaTemplates.find(t => t.identifier === identifier)?.definition;
                                }
                            }

                            if (template) {
                                item.type = template.type;
                                item.colCount = template.colCount;
                                item.colSpan = template.colSpan;
                                item.options = template.options;
                                item.items = template.items;

                                if (customScripts.prepareMaterializedEditItem) {
                                    customScripts.prepareMaterializedEditItem(mode, lookups, customParam, scriptUtil, editLayout, scope, identifier, item);
                                }
                            }
                        } else {
                            item.items = item.items && materializeTemplates(item.items);
                        }

                        return item;
                    });
                };

                editLayout.items = materializeTemplates(editLayout.items);

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
        } as MetaEditLayoutOperations
    ), [editLayouts, customScripts, customParam, lookups, scriptUtil, tenantTemplates, metaTemplates]);
}