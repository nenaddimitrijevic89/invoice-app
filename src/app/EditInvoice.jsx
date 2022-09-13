import React from 'react'
import { Box, Button } from '@chakra-ui/react'

import { useDataContext } from 'context/context'
import InvoiceActionBar from 'components/InvoiceActionBar'

const EditInvoice = () => {
   const { onClose } = useDataContext()
   return (
      <Box>
         EditInvoice
         <Box>
            <InvoiceActionBar>
               <Button variant="button4" mr={3} onClick={onClose}>
                  Cancel
               </Button>
               <Button variant="primary" type="submit">
                  Save Changes
               </Button>
            </InvoiceActionBar>
         </Box>
      </Box>
   )
}

export default EditInvoice
