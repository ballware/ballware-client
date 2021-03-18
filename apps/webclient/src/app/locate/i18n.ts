import i18n from 'i18next'
import LanguageDetector from "i18next-browser-languagedetector"
import {initReactI18next} from 'react-i18next'
import languageEN from './en/translate.json'
import languageDE from './de/translate.json'

i18n    
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: languageEN,
            de: languageDE
        },
        //lng: "en",
        supportedLngs: ["en","de"],
        fallbackLng: "en",
        ns: ["translations"],
        defaultNS: "translations",
        keySeparator: ".",
        interpolation: {
            escapeValue: false,
            formatSeparator: ","
        },
        react: {
            bindI18n: 'languageChanged loaded',
            bindI18nStore: 'added removed',
            nsMode: 'default'
        }
    });

export default i18n;