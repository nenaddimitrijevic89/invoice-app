import React from 'react'
import { Highlight, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react'

import { R } from 'res/R'

const EmptyPageBanner = () => {
   const colorLight = useColorModeValue('purpleBlackLight', '#fff')
   const colorDark = useColorModeValue('purpleBlackLight', 'greyLight')

   return (
      <VStack width="400px" spacing={10} textAlign="center" mt={10}>
         <Image src={R.images.empty} />
         <Text textStyle="h2" color={colorLight}>
            There is nothing here
         </Text>
         <Text color={colorDark}>
            <Highlight query={['New Invoice']} styles={{ fontWeight: '700', color: colorDark }}>
               Create invoice by clicking New Invoice button and get started
            </Highlight>
         </Text>
      </VStack>
   )
}

export default EmptyPageBanner
