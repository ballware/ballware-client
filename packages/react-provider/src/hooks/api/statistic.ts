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

    return useMemo(() => token ? ({
        fetchMetadataForStatistic: (identifier) => metaStatisticApi.metadataForStatistic(token, identifier),
        fetchDataForStatistic: (identifier, params) => metaStatisticApi.dataForStatistic(token, identifier, params),
    } as StatisticApiOperations) : undefined, [token, metaStatisticApi]);
}