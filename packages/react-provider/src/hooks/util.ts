import { RightsContext } from "@ballware/react-contexts"
import { useContext } from "react"
import { createUtil } from "../shared/scriptutil";

export const useScriptUtil = () => {
    const { token } = useContext(RightsContext);

    return token ? createUtil(token) : undefined;
}