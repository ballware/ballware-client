import { RightsContext } from "@ballware/react-contexts"
import { useContext, useMemo } from "react"
import { createUtil } from "../shared/scriptutil";

export const useScriptUtil = () => {
    const { token } = useContext(RightsContext);

    return useMemo(() => token ? createUtil(token) : undefined, [token]);
}