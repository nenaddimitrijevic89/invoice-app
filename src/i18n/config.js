import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { en } from './en'
import { rs } from './rs'

i18n.use(initReactI18next).init({
   fallbackLng: 'en',
   lng: 'en',
   resources: {
      en: {
         translations: en,
      },
      rs: {
         translations: rs,
      },
   },
   ns: ['translations'],
   defaultNS: 'translations',
})

i18n.languages = ['en', 'rs']

export default i18n
