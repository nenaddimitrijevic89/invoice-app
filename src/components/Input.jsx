import { forwardRef } from 'react'
import { Text, Input as CInput, Box } from '@chakra-ui/react'

const Input = forwardRef((props, ref) => {
   return (
      <Box w="100%">
         {props.label && (
            <Text mb="8px" textStyle="body1">
               {props.label}
            </Text>
         )}
         <CInput variant="primary" ref={ref} {...props} />
      </Box>
   )
})

export default Input
