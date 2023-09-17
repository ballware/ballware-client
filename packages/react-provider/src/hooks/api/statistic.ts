import { CompiledStatistic, QueryParams } from "@ballware/meta-interface";
import { RightsContext, SettingsContext } from "@ballware/react-contexts";
import { useContext, useMemo } from "react"

export interface StatisticApiOperations {
    fetchMetadataForStatistic: (
        identifier: string
    ) => Promise<CompiledStatistic>;

    fetchDataForStatistic: (
        identifier: string,
        params?: QueryParams
    ) => Promise<Array<Record<string, unknown>>>;
}

export const useStatisticApi = () => {
    const { token } = useContext(RightsContext);
    const { metaStatisticApi } = useContext(SettingsContext);

    return useMemo(() => ({
        fetchMetadataForStatistic: (token) ? (identifier) => metaStatisticApi.metadataForStatistic(token, identifier) : undefined,
        fetchDataForStatistic: (token) ? (identifier, params) => metaStatisticApi.dataForStatistic(token, identifier, params) : undefined,
    } as StatisticApiOperations), [token, metaStatisticApi]);
}