import React from 'react'
import {
   Button,
   HStack,
   Text,
   VStack,
   Flex,
   Box,
   Grid,
   GridItem,
   IconButton,
} from '@chakra-ui/react'
import { useForm, Controller, useFieldArray } from 'react-hook-form'
import { FaPlus, FaTrashAlt } from 'react-icons/fa'

import { useDataContext } from 'context/context'
import Input from 'components/Input'
import Select from 'components/Select'
import ItemLabels from 'components/ItemLabels'

import InvoiceActionBar from './InvoiceActionBar'

const CreateInvoice = () => {
   const { onClose, saveInvoice } = useDataContext()
   const { control, handleSubmit } = useForm()

   const { fields, append, remove } = useFieldArray({
      control,
      name: 'items',
   })

   const onSubmit = handleSubmit(values => {
      saveInvoice(values)
   })

   return (
      <form onSubmit={onSubmit}>
         <VStack spacing={5} align="start" p="50px 40px 140px 160px">
            <Text textStyle="h1">New Invoice</Text>
            <Text textStyle="h3" color="purpleLight">
               Bill From
            </Text>
            <Controller
               name="senderAddress.street"
               control={control}
               ref={null}
               render={({ field }) => <Input label="Street Address" {...field} />}
            />
            <HStack>
               <Controller
                  name="senderAddress.city"
                  control={control}
                  render={({ field }) => <Input label="City" id="city" {...field} />}
               />
               <Controller
                  name="senderAddress.postCode"
                  control={control}
                  render={({ field }) => <Input label="Post Code" {...field} />}
               />
               <Controller
                  name="senderAddress.country"
                  control={control}
                  render={({ field }) => <Input label="Country" {...field} />}
               />
            </HStack>
            <Text textStyle="h3" color="purpleLight" pt={5}>
               Bill To
            </Text>
            <Controller
               name="clientName"
               control={control}
               render={({ field }) => <Input label="Client's Name" {...field} />}
            />
            <Controller
               name="clientEmail"
               control={control}
               render={({ field }) => <Input label="Client's Email" {...field} />}
            />
            <Controller
               name="clientAddress.street"
               control={control}
               render={({ field }) => <Input label="Street Address" {...field} />}
            />
            <HStack>
               <Controller
                  name="clientAddress.city"
                  control={control}
                  render={({ field }) => <Input label="City" {...field} />}
               />
               <Controller
                  name="clientAddress.postCode"
                  control={control}
                  render={({ field }) => <Input label="Post Code" {...field} />}
               />
               <Controller
                  name="clientAddress.country"
                  control={control}
                  render={({ field }) => <Input label="Country" {...field} />}
               />
            </HStack>
            <HStack w="100%">
               <Controller
                  name="createdAt"
                  control={control}
                  render={({ field }) => <Input label="Invoice Date" type="date" {...field} />}
               />
               <Controller
                  name="paymentDue"
                  control={control}
                  render={({ field }) => (
                     <Select
                        label="Payment Terms"
                        options={[
                           { label: 'Next 30 days', value: 30 },
                           { label: 'Next 10 days', value: 10 },
                        ]}
                        {...field}
                     />
                  )}
               />
            </HStack>
            <Text textStyle="h2" color="greyDark" pt={5}>
               Item List
            </Text>
            <ItemLabels />
            {fields.map((item, index) => (
               <Grid templateColumns="repeat(12, 1fr)" gap={2} alignItems="center" key={item.id}>
                  <GridItem colSpan={4}>
                     <Controller
                        render={({ field }) => <Input {...field} />}
                        name={`test.${index}.name`}
                        control={control}
                     />
                  </GridItem>
                  <GridItem colSpan={1}>
                     <Controller
                        render={({ field }) => <Input type="number" pl={3} {...field} />}
                        name={`test.${index}.quantity`}
                        control={control}
                     />
                  </GridItem>
                  <GridItem colSpan={3}>
                     <Controller
                        render={({ field }) => <Input type="number" {...field} />}
                        name={`test.${index}.price`}
                        control={control}
                     />
                  </GridItem>
                  <GridItem colSpan={3}>
                     <Controller
                        render={({ field }) => (
                           <Input isReadOnly bg="transparent" border="none" {...field} />
                        )}
                        name={`test.${index}.price`}
                        control={control}
                     />
                  </GridItem>
                  <GridItem colSpan={1}>
                     <IconButton
                        type="button"
                        onClick={() => remove(index)}
                        variant="unstyled"
                        fontSize="24px"
                        icon={<FaTrashAlt />}
                     />
                  </GridItem>
               </Grid>
            ))}
            <Button
               variant="button3"
               w="100%"
               leftIcon={<FaPlus />}
               type="button"
               onClick={() => append({ name: '', quantity: null, price: null, total: null })}
            >
               Add New Item
            </Button>
         </VStack>

         <InvoiceActionBar>
            <Flex w="100%" justify="space-between">
               <Box>
                  <Button variant="button6" onClick={onClose}>
                     Discard
                  </Button>
               </Box>
               <Box>
                  <Button variant="button4" mr={3}>
                     Save as Draft
                  </Button>
                  <Button variant="primary" type="submit">
                     Save & Send
                  </Button>
               </Box>
            </Flex>
         </InvoiceActionBar>
      </form>
   )
}

export default CreateInvoice
