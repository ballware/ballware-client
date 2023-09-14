import { CrudItem, QueryParams } from "@ballware/meta-interface";
import { MetaContext, RightsContext, SettingsContext } from "@ballware/react-contexts";
import { useContext, useMemo } from "react";
import { useHistory } from "react-router-dom";

export interface MetaOperations {
    /**
     * Fetch list of items
     * @param query Identifier of query to use for fetch
     * @param params Optional parameter values for query
     * @returns Promise resolving collection of fetched items
     */
    query?: (query: string, params?: QueryParams) => Promise<Array<CrudItem>>;

    /**
     * Fetch count of items
     * @param query Identifier of query to use for fetch
     * @param params Optional parameter values for query
     * @returns Promise resolving count of fetchable items
     */
    count?: (query: string, params?: QueryParams) => Promise<number>;

    /**
     * Fetch item by id
     * @param functionIdentifier Identifier of edit function
     * @param id: Unique identifier of item to fetch
     * @returns Promise resolving item by id if available
     */
    byId?: (functionIdentifier: string, id: string) => Promise<CrudItem>;

    /**
     * Fetch new prepared item for add
     * @param functionIdentifier Identifier of edit function
     * @param params Optional parameter values for initialization
     */
    create?: (functionIdentifier: string, params?: QueryParams) => Promise<CrudItem>;

    /**
     * Save changed or add new item
     * @param functionIdentifier Identifier of edit function
     * @param item Changed or new created item
     * @returns Promise resolving when save operation has completed
     */
    save?: (functionIdentifier: string, item: CrudItem) => Promise<void>;

    /**
     * Save collection of changed or new created items
     * @param functionIdentifier Identifier of edit function
     * @param items Collection of items
     * @returns Promise resolving when save operation has completed
     */
    saveBatch?: (functionIdentifier: string, items: CrudItem[]) => Promise<void>;

    /**
     * Drop item by id
     * @param id Unique identifier of item to drop
     * @returns Promise resolving when drop operation has completed
     */
    drop?: (id: string) => Promise<void>;

    /**
     * Execute print operation
     * @param doc Identifier of print document
     * @param ids Collection of selected item ids to print
     */
    print?: (doc: string, ids: string[]) => void;    

    /**
     * Import uploaded file
     * @param identifier Identifier of custom import function
     * @param file Uploaded file to import
     * @returns Promise resolved when import completed
     */
    importItems?: (identifier: string, file: File) => Promise<void>;

    /**
     * Export list of items
     * @param identifier Identifier of custom export function
     * @param ids List of item ids to export
     * @returns Promise resolved with url to export file
     */
    exportItems?: (identifier: string, ids: string[]) => Promise<string>;    
}

export const useMetaOperations = () => {
    const history = useHistory();

    const { metaGenericEntityApiFactory } = useContext(
        SettingsContext
    );

    const { token } = useContext(RightsContext);

    const { baseUrl } = useContext(MetaContext);

    return useMemo(() => {
        
        if (metaGenericEntityApiFactory && baseUrl && token) {
            const entityApi = metaGenericEntityApiFactory(baseUrl);

            return {
                query: (query, params) => entityApi.query(token, query, params),
                count: (query, params) => entityApi.count(token, query, params),
                byId: (functionIdentifier, id) => entityApi.byId(token, functionIdentifier, id),
                create: (functionIdentifier, params) => entityApi.new(token, functionIdentifier, params),
                save: (functionIdentifier, item) => entityApi.save(token, functionIdentifier, item),
                saveBatch: (functionIdentifier, items) => entityApi.saveBatch(token, functionIdentifier, items),
                drop: id => entityApi.drop(token, id),
                print: (doc, ids) => history.push(`/print?docId=${doc}${ids.map(u => `&id=${u}`).join('')}`),
                importItems: (functionIdentifier, file) => entityApi.importItems(token, functionIdentifier, file),
                exportItems: (functionIdentifier, ids) => entityApi.exportItems(token, functionIdentifier, ids),        
            } as MetaOperations;
        }
        
        return {};

    }, [metaGenericEntityApiFactory, baseUrl, token, history]);
}