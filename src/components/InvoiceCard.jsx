import React from 'react'
import { Text, Highlight, useColorModeValue, IconButton, Grid, GridItem } from '@chakra-ui/react'
import { FaChevronRight } from 'react-icons/fa'

import { useDataContext } from 'context/context'

import StatusTag from './StatusTag'

const InvoiceCard = ({ invoice }) => {
   const { openEditInvoice } = useDataContext()
   const bg = useColorModeValue('#fff', 'purpleBlackLight')
   const color = useColorModeValue('purpleBlackLight', '#fff')
   const { id, paymentDue, clientName, total, status } = invoice

   return (
      <Grid
         templateColumns="repeat(12, 1fr)"
         bg={bg}
         h="80px"
         w="900px"
         px={8}
         py={4}
         alignItems="center"
         rounded="8px"
         textStyle="body1"
      >
         <GridItem colSpan={3}>
            <Text color={color} fontWeight="extraBold">
               <Highlight query={['#']} styles={{ color: 'greyLight' }}>
                  {`# ${id}`}
               </Highlight>
            </Text>
         </GridItem>
         <GridItem colSpan={2}>
            <Text>{paymentDue}</Text>
         </GridItem>
         <GridItem colSpan={2}>
            <Text>{clientName}</Text>
         </GridItem>
         <GridItem colSpan={2}>
            <Text fontWeight="extrabold" color={color}>
               £ {total}
            </Text>
         </GridItem>
         <GridItem colSpan={2}>
            <StatusTag status={status} />
         </GridItem>
         <GridItem colSpan={1} textAlign="end">
            <IconButton
               bg="transparent"
               icon={<FaChevronRight color="#7c5dfa" />}
               onClick={openEditInvoice}
            />
         </GridItem>
      </Grid>
   )
}

export default InvoiceCard
