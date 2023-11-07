import { RightsContext, SettingsContext } from "@ballware/react-contexts"
import { useContext, useMemo } from "react"

export interface RoleApiOperations {
    fetchSelectList(): Promise<Array<Record<string, unknown>>>,
    fetchSelectById(identifier: string): Promise<Record<string, unknown>>
}

export const useRoleApi = () => {
    const { token } = useContext(RightsContext);
    const { identityRoleApi } = useContext(SettingsContext);

    return useMemo(() => token ? ({
        fetchSelectList: () => identityRoleApi.selectListFunc(token),
        fetchSelectById: (identifier) => identityRoleApi.selectByIdFunc(token, identifier),
    } as RoleApiOperations) : undefined, [token, identityRoleApi]);
}