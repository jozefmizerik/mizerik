import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    react: {
      useSuspense: false,
    },
    debug: true,
    lng: "sk",
  });

export default i18n;
