import { CompiledPageData } from "@ballware/meta-interface";
import { RightsContext, SettingsContext } from "@ballware/react-contexts";
import { useContext, useMemo } from "react"

export interface PageApiOperations {
    fetchPageDataForIdentifier: (
        page: string
    ) => Promise<CompiledPageData>;
}

export const usePageApi = () => {
    const { token } = useContext(RightsContext);
    const { metaPageApi } = useContext(SettingsContext);

    return useMemo(() => ({
        fetchPageDataForIdentifier: (token) ? (page) => metaPageApi.pageDataForIdentifier(token, page) : undefined
    } as PageApiOperations), [token, metaPageApi]);
}