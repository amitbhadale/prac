import { createI18n } from 'vue-i18n'

import fr from '../locales/fr.json'
import en from '../locales/en.json'

// Set up the i18n instance with the translations
const i18n = createI18n({
  locale: 'en', // set default locale
  fallbackLocale: 'en', // set fallback locale
  messages: {
    en,
    fr,
  },
})

export default i18n
