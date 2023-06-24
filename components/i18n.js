import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../locales/en/translation.json";
import translationES from "../locales/es/translation.json";

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "es", // initial language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
