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
import { useTranslation } from 'react-i18next'
import { FaChevronDown, FaPlusCircle } from 'react-icons/fa'

import { useDataContext } from 'context/context'
import { CLEAR, DRAFT, PAID, PENDING } from 'utils/constants'

const menuListItems = [PAID, PENDING, DRAFT, CLEAR]

const InvoiceListActionHeader = ({ invoices }) => {
   const { openCreateInvoice, onFilterStatus, status, onSetStatus } = useDataContext()
   const { t } = useTranslation()

   const color = useColorModeValue('#000', '#fff')

   const filterByStatus = status => {
      onSetStatus(status)
      onFilterStatus(status)
   }

   const statusText = status === CLEAR || status === '' ? t('common.filter') : t(`common.${status}`)

   const hasInvoices = invoices.length > 0

   return (
      <Flex justify="space-between" my={10} w={{ base: '100%', lg: '900px' }}>
         <VStack align="start">
            <Text textStyle="h1">{t('invoices')}</Text>
            <Text textStyle="body1">
               {hasInvoices
                  ? t('description.totalInvoices', { number: invoices.length })
                  : t('noInvoices')}
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
                  {menuListItems.map(item => (
                     <MenuItem key={item} onClick={() => filterByStatus(item)}>
                        {t(`common.${item}`)}
                     </MenuItem>
                  ))}
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
