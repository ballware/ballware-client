import { SettingsContext } from "@ballware/react-contexts"
import { useContext } from "react"

export const useGooglekey = () => {
    const { googlekey } = useContext(SettingsContext);

    return googlekey;
}