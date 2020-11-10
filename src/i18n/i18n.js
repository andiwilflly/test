import i18next from 'i18next';
import { initReactI18next } from "react-i18next";
// Locales
import en from "./locales/en.json";
import ru from "./locales/ru.json";


i18next
    .use(initReactI18next)
    .init({
        lng: 'en',
        debug: true,
        ns: ['common'],
        defaultNS: 'common',
        otherLanguages: ['ru'],
        resources: {
            en: {
                translation: en
            },
            ru: {
                translation: ru
            },
        }
    });

export default i18next;