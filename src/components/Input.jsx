import { forwardRef } from 'react'
import { Text, Input as CInput, Box } from '@chakra-ui/react'

const Input = forwardRef((props, ref) => {
   const clientAddressError = !!props?.errors?.clientAddress
   const senderAddressError = !!props?.errors?.senderAddress

   const error = props?.errors
      ? !!props.errors[props.name] || clientAddressError || senderAddressError
      : false

   return (
      <Box w="100%">
         {props.label && (
            <Text mb={2} textStyle="body1">
               {props.label}
            </Text>
         )}
         <CInput
            variant="primary"
            border={error ? '1px solid' : ''}
            borderColor="redDark"
            ref={ref}
            {...props}
         />
      </Box>
   )
})

export default Input
