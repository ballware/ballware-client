import { RightsContext, SettingsContext } from "@ballware/react-contexts"
import { useContext, useMemo } from "react"

export interface UserApiOperations {
    fetchSelectList(): Promise<Array<Record<string, unknown>>>,
    fetchSelectById(identifier: string): Promise<Record<string, unknown>>
}

export const useUserApi = () => {
    const { token } = useContext(RightsContext);
    const { identityUserApi } = useContext(SettingsContext);

    return useMemo(() => token ? ({
        fetchSelectList: () => identityUserApi.selectListFunc(token),
        fetchSelectById: (identifier) => identityUserApi.selectByIdFunc(token, identifier),
    } as UserApiOperations) : undefined, [token, identityUserApi]);
}