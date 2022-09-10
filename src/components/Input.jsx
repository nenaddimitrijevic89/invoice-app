import { useState } from 'react'
import { Text, Input as CInput, Box } from '@chakra-ui/react'

const Input = ({ label, ...props }) => {
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
         <CInput variant="primary" value={value} onChange={handleChange} {...props} />
      </Box>
   )
}

export default Input
