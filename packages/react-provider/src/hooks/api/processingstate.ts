import { RightsContext, SettingsContext } from "@ballware/react-contexts";
import { useContext, useMemo } from "react"

export interface ProcessingstateApiOperations {
    fetchSelectListForEntity: (
        entity: string
    ) => Promise<Array<Record<string, unknown>>>;

    fetchSelectListAllowedForEntityAndIds: (
        entity: string,
        ids: Array<string>
    ) => Promise<Array<Record<string, unknown>>>;

    fetchSelectByStateForEntity: (
        entity: string,
        state: number | string
    ) => Promise<Record<string, unknown>>;
}

export const useProcessingstateApi = () => {
    const { token } = useContext(RightsContext);
    const { metaProcessingstateApi } = useContext(SettingsContext);

    return useMemo(() => ({
        fetchSelectListForEntity: (token) ? (entity) => metaProcessingstateApi.selectListForEntity(token, entity) : undefined,
        fetchSelectListAllowedForEntityAndIds: (token) ? (entity, ids) => metaProcessingstateApi.selectListAllowedForEntityAndIds(token, entity, ids) : undefined,
        fetchSelectByStateForEntity: (token) ? (entity, state) => metaProcessingstateApi.selectByStateForEntity(token, entity)(state) : undefined
    } as ProcessingstateApiOperations), [token, metaProcessingstateApi]);
}