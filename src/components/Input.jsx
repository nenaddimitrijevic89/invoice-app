import { forwardRef, useState } from 'react'
import { Text, Input as CInput, Box } from '@chakra-ui/react'

const Input = forwardRef((props, ref) => {
   const [value, setValue] = useState('')

   const handleChange = event => {
      setValue(event.target.value)
   }

   return (
      <Box w="100%">
         {props.label && (
            <Text mb="8px" textStyle="body1">
               {props.label}
            </Text>
         )}
         <CInput variant="primary" value={value} ref={ref} onChange={handleChange} {...props} />
      </Box>
   )
})

export default Input
