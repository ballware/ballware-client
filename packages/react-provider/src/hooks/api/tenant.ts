import { CompiledTenant } from "@ballware/meta-interface";
import { RightsContext, SettingsContext } from "@ballware/react-contexts";
import { useContext, useMemo } from "react"

export interface TenantApiOperations {
    fetchMetadataForTenant: (tenant: string) => Promise<CompiledTenant>;
    fetchAllowed: () => Promise<{ Id: string, Name: string}[]>;
}

export const useTenantApi = () => {
    const { token } = useContext(RightsContext);
    const { metaTenantApi } = useContext(SettingsContext);

    return useMemo(() => ({
        fetchMetadataForTenant: (token) ? (tenant) => metaTenantApi.metadataForTenant(token, tenant) : undefined,
        fetchAllowed: (token) ? () => metaTenantApi.allowed(token) : undefined,
    } as TenantApiOperations), [token, metaTenantApi]);
}