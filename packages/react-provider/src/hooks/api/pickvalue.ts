import { RightsContext, SettingsContext } from "@ballware/react-contexts"
import { useContext, useMemo } from "react"

export interface PickvalueApiOperations {
    fetchSelectListForEntityAndField: (
        entity: string,
        field: string
    ) => Promise<Array<Record<string, unknown>>>;

    fetchSelectByValueForEntityAndField: (
        entity: string,
        field: string,
        value: number | string
    ) => Promise<Record<string, unknown>>;
}

export const usePickvalueApi = () => {
    const { token } = useContext(RightsContext);
    const { metaPickvalueApi } = useContext(SettingsContext);

    return useMemo(() => token ? ({
        fetchSelectListForEntityAndField: (entity, field) => metaPickvalueApi.selectListForEntityAndField(token, entity, field),    
        fetchSelectByValueForEntityAndField: (entity, field, value) => metaPickvalueApi.selectByValueForEntityAndField(token, entity, field)(value), 
    } as PickvalueApiOperations) : undefined, [token, metaPickvalueApi]);
}