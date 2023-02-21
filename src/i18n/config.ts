import i18next from 'i18next';
import ChainedBackend from 'i18next-chained-backend';
import { initReactI18next } from 'react-i18next';

import translationEN from './en/translationEN.json';
import translationUA from './ua/translationUA.json';

export const resources = {
  en: {
    translation: translationEN,
  },
  ua: {
    translation: translationUA,
  },
};

i18next
  .use(initReactI18next)
  .use(ChainedBackend)
  .init({
    lng: localStorage.getItem('lng') || 'en',
    fallbackLng: 'en',
    resources,
  });
