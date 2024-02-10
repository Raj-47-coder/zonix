import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from '../locales/lang.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translations.en,
      },
      hi: {
        translation: translations.hi,
      },
      ta: {
        translation: translations.ta,
      },
    },
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
