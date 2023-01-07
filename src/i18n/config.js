import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import strings from 'res/strings'

i18n.use(initReactI18next).init({
   fallbackLng: 'en',
   lng: 'en',
   resources: {
      en: {
         translations: strings.en,
      },
      rs: {
         translations: strings.rs,
      },
   },
   ns: ['translations'],
   defaultNS: 'translations',
})

i18n.languages = ['en', 'rs']

export default i18n
