import React from 'react'
import { Flex, Text, Highlight, useColorModeValue } from '@chakra-ui/react'

const InvoiceCard = ({ invoice }) => {
   const bg = useColorModeValue('#fff', 'purpleBlackLight')
   const color = useColorModeValue('purpleBlackLight', '#fff')
   const { id, paymentDue, clientName, total, status } = invoice

   return (
      <Flex
         bg={bg}
         h="80px"
         w="900px"
         px={8}
         py={4}
         justify="space-between"
         alignItems="center"
         rounded="8px"
         textStyle="body1"
      >
         <Text color={color} fontWeight="extraBold">
            <Highlight query={['#']} styles={{ color: 'greyLight' }}>
               {`# ${id}`}
            </Highlight>
         </Text>
         <Text>{paymentDue}</Text>
         <Text>{clientName}</Text>
         <Text fontStyle="h1" color={color}>
            £ {total}
         </Text>
         <Text>{status}</Text>
      </Flex>
   )
}

export default InvoiceCard
