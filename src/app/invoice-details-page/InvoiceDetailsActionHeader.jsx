import React from 'react'
import { Button, Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react'

import { DRAFT, PAID } from 'utils/constants'
import StatusTag from 'components/StatusTag'

const InvoiceDetailsActionHeader = ({ invoice, editInvoice, markAsPaid, onOpen }) => {
   const colorDark = useColorModeValue('purpleBlackLight', 'greyLight')
   const bgLight = useColorModeValue('#fff', 'purpleBlackDark')

   const disabledEdit = invoice.status === PAID
   const disabledMarkAsPaid = invoice.status === DRAFT || invoice.status === PAID

   return (
      <Flex
         my={5}
         px={8}
         py={6}
         w="900px"
         bg={bgLight}
         rounded={8}
         justify="space-between"
         textStyle="body1"
      >
         <HStack spacing={3}>
            <Text color={colorDark}>Status</Text>
            <StatusTag status={invoice.status} />
         </HStack>
         <HStack>
            <Button variant="button3" onClick={editInvoice} isDisabled={disabledEdit}>
               Edit
            </Button>
            <Button variant="button5" onClick={onOpen}>
               Delete
            </Button>
            <Button onClick={markAsPaid} isDisabled={disabledMarkAsPaid}>
               Mark as Paid
            </Button>
         </HStack>
      </Flex>
   )
}

export default InvoiceDetailsActionHeader
