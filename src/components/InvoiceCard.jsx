import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
   Text,
   Highlight,
   useColorModeValue,
   IconButton,
   Grid,
   GridItem,
   Tooltip,
} from '@chakra-ui/react'
import { FaChevronRight } from 'react-icons/fa'

import StatusTag from './StatusTag'

const InvoiceCard = ({ invoice }) => {
   let navigate = useNavigate()
   const { id, paymentDue, clientName, total, status } = invoice

   const color = useColorModeValue('purpleBlackLight', '#fff')
   const bg = useColorModeValue('#fff', 'purpleBlackLight')

   return (
      <Grid
         templateColumns="repeat(12, 1fr)"
         bg={bg}
         h="80px"
         w="900px"
         px={8}
         py={4}
         alignItems="center"
         rounded={8}
         textStyle="body1"
      >
         <GridItem colSpan={2}>
            <Text color={color} textStyle="h3">
               <Highlight query={['#']} styles={{ color: 'greyDark' }}>
                  {`# ${id}`}
               </Highlight>
            </Text>
         </GridItem>
         <GridItem colSpan={2}>
            <Text>{paymentDue}</Text>
         </GridItem>
         <GridItem colSpan={3}>
            <Text>{clientName}</Text>
         </GridItem>
         <GridItem colSpan={2}>
            <Text textStyle="h3" color={color}>
               £ {total}
            </Text>
         </GridItem>
         <GridItem colSpan={2}>
            <StatusTag status={status} />
         </GridItem>
         <GridItem colSpan={1} textAlign="end">
            <Tooltip label="View invoice details">
               <IconButton
                  bg="transparent"
                  icon={<FaChevronRight color="#7c5dfa" />}
                  onClick={() => navigate(`/invoice/${id}`)}
               />
            </Tooltip>
         </GridItem>
      </Grid>
   )
}

export default InvoiceCard
