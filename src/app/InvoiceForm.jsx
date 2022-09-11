import React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'

import { useDataContext } from 'context/context'
import CreateInvoice from './CreateInvoice'
import EditInvoice from './EditInvoice'

const InvoiceForm = () => {
   const { isOpen, type } = useDataContext()
   const bg = useColorModeValue('bgLight', 'bgDark')
   const isCreate = type === 'create'

   return (
      <Box display={isOpen ? 'block' : 'none'}>
         <Box pos="fixed" h="100vh" w="50vw" bg={bg} overflow="scroll">
            {isCreate ? <CreateInvoice /> : <EditInvoice />}
         </Box>
      </Box>
   )
}

export default InvoiceForm
