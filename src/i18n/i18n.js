import i18next from 'i18next';
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
// Locales
import en from "./locales/en.json";
import ru from "./locales/ru.json";


i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // lng: 'en',
        debug: true,
        ns: ['common'],
        defaultNS: 'common',
        otherLanguages: ['en','ru'],
        resources: {
            en: {
                translation: en
            },
            ru: {
                translation: ru
            }
        }
    });

export default i18next;
