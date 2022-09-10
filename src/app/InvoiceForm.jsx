import React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'

import { useDataContext } from 'context/context'
import CreateInvoice from './CreateInvoice'
import EditInvoice from './EditInvoice'
import InvoiceActionBar from './InvoiceActionBar'

const InvoiceForm = () => {
   const { isOpen, type } = useDataContext()
   const bg = useColorModeValue('bgLight', 'bgDark')
   const isCreate = type === 'create'

   return (
      <Box display={isOpen ? 'block' : 'none'}>
         <Box pos="fixed" h="100vh" w="50vw" p="50px 40px 140px 160px" bg={bg} overflow="scroll">
            {isCreate ? <CreateInvoice /> : <EditInvoice />}
         </Box>
         <InvoiceActionBar type={type} />
      </Box>
   )
}

export default InvoiceForm
