import React from 'react'
import { Box, VStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import Flag from 'react-world-flags'

const LanguageSwitcher = () => {
   const {
      i18n: { language, changeLanguage },
   } = useTranslation()

   const getStyle = lng => (lng === language ? activeStyle : nonActiveStyle)

   return (
      <VStack spacing={4}>
         <Box onClick={() => changeLanguage('rs')} {...getStyle('rs')}>
            <Flag code="rs" width={30} />
         </Box>
         <Box onClick={() => changeLanguage('en')} {...getStyle('en')}>
            <Flag code="gb" width={30} />
         </Box>
      </VStack>
   )
}

const activeStyle = {
   border: '1px solid',
   borderColor: 'green',
   p: 1,
}

const nonActiveStyle = {
   opacity: 0.5,
   bg: 'black',
   cursor: 'pointer',
   p: 1,
}

export default LanguageSwitcher
