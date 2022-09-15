import React, { useState } from 'react'
import {
   Box,
   Button,
   Center,
   Flex,
   Menu,
   MenuButton,
   MenuItem,
   MenuList,
   Text,
   useColorModeValue,
   VStack,
} from '@chakra-ui/react'
import { FaChevronDown, FaPlusCircle } from 'react-icons/fa'

import { useDataContext } from 'context/context'
import InvoiceCard from 'components/InvoiceCard'

const InvoiceList = () => {
   const { invoices, openCreateInvoice } = useDataContext()
   const color = useColorModeValue('#000', '#fff')
   const [status, setStatus] = useState('clear')

   return (
      <Center>
         <Box>
            <Flex justify="space-between" my={10}>
               <VStack>
                  <Text textStyle="h1">Invoices</Text>
                  <Text textStyle="body1">{`There are ${invoices.length} total invoice`}</Text>
               </VStack>
               <Box>
                  <Menu>
                     <MenuButton
                        px={10}
                        py={2}
                        transition="all 0.2s"
                        color={color}
                        _hover={{}}
                        _active={{}}
                        _expanded={{}}
                        _focus={{}}
                        bg="transparent"
                        as={Button}
                        rightIcon={<FaChevronDown color="#7c5dfa" />}
                     >
                        {status === 'clear' ? 'Filter by status' : status}
                     </MenuButton>
                     <MenuList textStyle="h3Light">
                        <MenuItem onClick={() => setStatus('paid')}>Paid</MenuItem>
                        <MenuItem onClick={() => setStatus('pending')}>Pending</MenuItem>
                        <MenuItem onClick={() => setStatus('draft')}>Draft</MenuItem>
                        <MenuItem onClick={() => setStatus('clear')}>Clear</MenuItem>
                     </MenuList>
                  </Menu>
                  <Button onClick={openCreateInvoice} leftIcon={<FaPlusCircle />}>
                     New Invoice
                  </Button>
               </Box>
            </Flex>
            <VStack spacing={4} mb={14}>
               {invoices &&
                  invoices.map((invoice, i) => (
                     <InvoiceCard invoice={invoice} key={`${invoice.id}_${i}`} />
                  ))}
            </VStack>
         </Box>
      </Center>
   )
}

export default InvoiceList
