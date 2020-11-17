import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import {initReactI18next} from 'react-i18next';
import {en} from './translation/en';
import {bd} from './translation/bd';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en,
      },
      bd: {
        translation: bd,
      },
    },
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
