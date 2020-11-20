import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import fr from "./fr";
import en from "./en";

export { useTranslation } from "react-i18next";
export const changeLanguage = (lang: string) => i18n.changeLanguage(lang);
export const language = () => i18n.language;
export const languages = () => ["fr", "en"];

export const initialize = () => i18n
.use(initReactI18next)
.init({
  resources: {
    fr: { translation: fr },
    en: { translation: en }
  },
  lng: "fr",
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false
  }
});

export default {
  changeLanguage,
  initialize,
  language,
  languages,
  useTranslation,
};