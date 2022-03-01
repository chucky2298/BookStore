import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import locales from '../constants/locales';

import en from './en.json';
import sq from './sq.json';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: locales.ENGLISH,
    debug: true,
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
    resources: {
      [locales.ENGLISH]: en,
      [locales.ALBANIAN]: sq,
    },
  });

export default i18n;
