import React from 'react'
import {
   Box,
   Button,
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
import { CLEAR, DRAFT, PAID, PENDING } from 'utils/constants'

const InvoiceListActionHeader = ({ invoices }) => {
   const { openCreateInvoice, onFilterStatus, status, onSetStatus } = useDataContext()

   const color = useColorModeValue('#000', '#fff')

   const filterByStatus = status => {
      onSetStatus(status)
      onFilterStatus(status)
   }

   const statusText = status === CLEAR || status === '' ? 'Filter by status' : status

   return (
      <Flex justify="space-between" my={10} w="900px">
         <VStack align="start">
            <Text textStyle="h1">Invoices</Text>
            <Text textStyle="body1">
               {invoices.length > 0 ? `There are ${invoices.length} total invoice` : `No invoices`}
            </Text>
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
                  {statusText}
               </MenuButton>
               <MenuList textStyle="h3Light">
                  <MenuItem onClick={() => filterByStatus(PAID)}>Paid</MenuItem>
                  <MenuItem onClick={() => filterByStatus(PENDING)}>Pending</MenuItem>
                  <MenuItem onClick={() => filterByStatus(DRAFT)}>Draft</MenuItem>
                  <MenuItem onClick={() => filterByStatus(CLEAR)}>Clear</MenuItem>
               </MenuList>
            </Menu>
            <Button
               onClick={openCreateInvoice}
               py={2}
               pl={2}
               pr={7}
               leftIcon={<FaPlusCircle fontSize={38} />}
            >
               New Invoice
            </Button>
         </Box>
      </Flex>
   )
}

export default InvoiceListActionHeader
