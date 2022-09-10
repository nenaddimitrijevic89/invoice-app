import React, { useState } from 'react'
import { Box, Select as CSelect, Text } from '@chakra-ui/react'

const Select = ({ label, options, ...props }) => {
   const [value, setValue] = useState('')
   const handleChange = event => {
      setValue(event.target.value)
      console.log(event.target.value)
   }

   return (
      <Box w="100%">
         {label && (
            <Text mb="8px" textStyle="body1">
               {label}
            </Text>
         )}
         <CSelect variant="primary" value={value} onChange={handleChange} {...props}>
            {options.map((option, i) => (
               <option key={`${option}_${i}`}>{option}</option>
            ))}
         </CSelect>
      </Box>
   )
}

export default Select
