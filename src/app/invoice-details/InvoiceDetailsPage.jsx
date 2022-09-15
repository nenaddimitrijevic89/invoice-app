import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
   Box,
   Button,
   Center,
   Flex,
   Grid,
   GridItem,
   Highlight,
   HStack,
   IconButton,
   Text,
   useColorModeValue,
   VStack,
} from '@chakra-ui/react'
import { FaChevronLeft } from 'react-icons/fa'

import { useDataContext } from 'context/context'
import StatusTag from 'components/StatusTag'

const InvoiceDetailsPage = () => {
   const { invoices, onMarkAsPaid } = useDataContext()
   const [invoice, setInvoice] = useState()
   const { id } = useParams()

   const colorLight = useColorModeValue('purpleBlackLight', '#fff')
   const colorDark = useColorModeValue('purpleBlackLight', 'greyLight')
   const bgLight = useColorModeValue('#fff', 'purpleBlackDark')
   const bgMedium = useColorModeValue('bgLight', 'purpleBlackLight')
   const bgDark = useColorModeValue('greyLight', 'greyBlack')

   useEffect(() => {
      const filtered = invoices.find(invoice => invoice.id === id)
      setInvoice(filtered)
   }, [id, invoices])

   if (!invoice) return

   return (
      <Center>
         <Box mt={10}>
            <Link to="/">
               <HStack>
                  <IconButton bg="transparent" icon={<FaChevronLeft color="#7c5dfa" />} />
                  <Text textStyle="h3">Go back</Text>
               </HStack>
            </Link>
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
                  <Text color="greyLight">Status</Text>
                  <StatusTag status={invoice.status} />
               </HStack>
               <HStack>
                  <Button variant="button3">Edit</Button>
                  <Button variant="button5">Delete</Button>
                  <Button onClick={() => onMarkAsPaid(invoice.id)}>Mark as Paid</Button>
               </HStack>
            </Flex>
            <Box p={8} rounded={8} bg={bgLight} w="900px" textStyle="body1">
               <Flex justify="space-between" color={colorDark}>
                  <VStack align="start" spacing={4}>
                     <Text textStyle="h2" color={colorLight}>
                        <Highlight query={['#']} styles={{ color: 'greyDark' }}>
                           {`# ${id}`}
                        </Highlight>
                     </Text>
                     <Text>{invoice.description}</Text>
                  </VStack>
                  <VStack align="end">
                     <Text>{invoice.senderAddress.street}</Text>
                     <Text>{invoice.senderAddress.city}</Text>
                     <Text>{invoice.senderAddress.postCode}</Text>
                     <Text>{invoice.senderAddress.country}</Text>
                  </VStack>
               </Flex>
               <Grid templateColumns="repeat(12, 1fr)" color={colorDark} my={8}>
                  <GridItem colSpan={4}>
                     <Flex flexDir="column" justify="space-between" h="100%">
                        <Box>
                           <Text>Payment Date</Text>
                           <Text textStyle="h3" color={colorLight} mt={4}>
                              {invoice.createdAt}
                           </Text>
                        </Box>
                        <Box>
                           <Text>Payment Due</Text>
                           <Text textStyle="h3" color={colorLight} mt={4}>
                              {invoice.paymentDue}
                           </Text>
                        </Box>
                     </Flex>
                  </GridItem>
                  <GridItem colSpan={3}>
                     <VStack align="left">
                        <Text>Bill to</Text>
                        <Text textStyle="h3" color={colorLight} py={2}>
                           {invoice.clientName}
                        </Text>
                        <Text>{invoice.clientAddress.street}</Text>
                        <Text>{invoice.clientAddress.city}</Text>
                        <Text>{invoice.clientAddress.postCode}</Text>
                        <Text>{invoice.clientAddress.country}</Text>
                     </VStack>
                  </GridItem>
                  <GridItem colSpan={5}>
                     <Text color={colorLight}>Sent to</Text>
                     <Text textStyle="h3" color={colorLight} mt={4}>
                        {invoice.clientEmail}
                     </Text>
                  </GridItem>
               </Grid>
               <Grid
                  templateColumns="repeat(12, 1fr)"
                  color={colorDark}
                  bg={bgMedium}
                  p={8}
                  rounded="8px 8px 0 0"
               >
                  <GridItem colSpan={6}>
                     <Text mb={4}>Item Name</Text>
                     {invoice.items.map((item, i) => (
                        <Text key={`${item.name}_${i}`} textStyle="h3" color={colorLight} mb={2}>
                           {item.name}
                        </Text>
                     ))}
                  </GridItem>
                  <GridItem colSpan={1} align="center">
                     <Text mb={4}>Qty</Text>
                     {invoice.items.map((item, i) => (
                        <Text key={`${item.quantity}_${i}`} textStyle="h3" mb={2}>
                           {item.quantity}
                        </Text>
                     ))}
                  </GridItem>
                  <GridItem colSpan={2} align="end">
                     <Text mb={4}>Price</Text>
                     {invoice.items.map((item, i) => (
                        <Text key={`${item.price}_${i}`} textStyle="h3" mb={2}>
                           {item.price}
                        </Text>
                     ))}
                  </GridItem>
                  <GridItem colSpan={3} align="end">
                     <Text mb={4}>Total</Text>
                     {invoice.items.map((item, i) => (
                        <Text key={`${item.total}_${i}`} textStyle="h3" color={colorLight} mb={2}>
                           {item.total}
                        </Text>
                     ))}
                  </GridItem>
               </Grid>
               <Flex
                  bg={bgDark}
                  color={colorDark}
                  p={8}
                  rounded="0 0 8px 8px"
                  justify="space-between"
                  align="center"
               >
                  <Text>Amount Due</Text>
                  <Text textStyle="h1" color={colorLight}>
                     £ {invoice.total}
                  </Text>
               </Flex>
            </Box>
         </Box>
      </Center>
   )
}

export default InvoiceDetailsPage
