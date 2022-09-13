import React, { forwardRef } from 'react'
import { Box, Select as CSelect, Text } from '@chakra-ui/react'

const Select = forwardRef((props, ref) => {
   return (
      <Box w="100%">
         {props.label && (
            <Text mb="8px" textStyle="body1">
               {props.label}
            </Text>
         )}
         <CSelect variant="primary" ref={ref} {...props}>
            {props.options.map((option, i) => (
               <option key={`${option}_${i}`} value={option.value}>
                  {option.label}
               </option>
            ))}
         </CSelect>
      </Box>
   )
})

export default Select
