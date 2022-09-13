import React, { useEffect, useState } from 'react'
import { Button, HStack, Text, VStack, Flex, Box } from '@chakra-ui/react'
import { useForm, Controller, useFieldArray } from 'react-hook-form'
import { FaPlus } from 'react-icons/fa'

import { useDataContext } from 'context/context'
import Input from 'components/Input'
import Select from 'components/Select'
import FieldItemLabels from 'components/FieldItemLabels'
import FieldItem from 'components/FieldItem'
import InvoiceActionBar from 'components/InvoiceActionBar'

const CreateInvoice = () => {
   const { onClose, saveInvoice } = useDataContext()
   const [triggerSave, setTriggerSave] = useState(false)
   const [status, setStatus] = useState('')

   const { control, handleSubmit, watch, setValue } = useForm()
   const { fields, append, remove } = useFieldArray({
      control,
      name: 'items',
   })
   const items = watch('items')

   useEffect(() => {
      items?.forEach((item, i) => {
         console.log(item.price, item.quantity)
         if (item?.price && item?.quantity) {
            const total = Number(item.price) * Number(item.quantity)
            setValue(`items.${i}.total`, total)
         }
      })
   }, [items, setValue, triggerSave])

   const onSubmit = handleSubmit(values => {
      saveInvoice(values, status)
   })

   const rules = status === 'pending' ? { required: true } : { required: false }

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
               rules={rules}
               render={({ field }) => <Input label="Street Address" {...field} />}
            />
            <HStack>
               <Controller
                  name="senderAddress.city"
                  control={control}
                  rules={rules}
                  render={({ field }) => <Input label="City" id="city" {...field} />}
               />
               <Controller
                  name="senderAddress.postCode"
                  control={control}
                  rules={rules}
                  render={({ field }) => <Input label="Post Code" {...field} />}
               />
               <Controller
                  name="senderAddress.country"
                  control={control}
                  rules={rules}
                  render={({ field }) => <Input label="Country" {...field} />}
               />
            </HStack>
            <Text textStyle="h3" color="purpleLight" pt={5}>
               Bill To
            </Text>
            <Controller
               name="clientName"
               control={control}
               rules={rules}
               render={({ field }) => <Input label="Client's Name" {...field} />}
            />
            <Controller
               name="clientEmail"
               control={control}
               rules={rules}
               render={({ field }) => <Input label="Client's Email" {...field} />}
            />
            <Controller
               name="clientAddress.street"
               control={control}
               rules={rules}
               render={({ field }) => <Input label="Street Address" {...field} />}
            />
            <HStack>
               <Controller
                  name="clientAddress.city"
                  control={control}
                  rules={rules}
                  render={({ field }) => <Input label="City" {...field} />}
               />
               <Controller
                  name="clientAddress.postCode"
                  control={control}
                  rules={rules}
                  render={({ field }) => <Input label="Post Code" {...field} />}
               />
               <Controller
                  name="clientAddress.country"
                  control={control}
                  rules={rules}
                  render={({ field }) => <Input label="Country" {...field} />}
               />
            </HStack>
            <HStack w="100%">
               <Controller
                  name="createdAt"
                  control={control}
                  rules={rules}
                  render={({ field }) => <Input label="Invoice Date" type="date" {...field} />}
               />
               <Controller
                  name="paymentTerms"
                  control={control}
                  rules={rules}
                  render={({ field }) => (
                     <Select
                        label="Payment Terms"
                        placehoder="Select payment term..."
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
            <FieldItemLabels />
            {fields.map((item, index) => (
               <FieldItem
                  key={item.id}
                  control={control}
                  index={index}
                  rules={rules}
                  remove={remove}
               />
            ))}
            {fields.length > 0 && (
               <Button onClick={() => setTriggerSave(trigger => !trigger)}>save item</Button>
            )}
            <Button
               variant="button3"
               w="100%"
               leftIcon={<FaPlus />}
               type="button"
               onClick={() => append({ name: '', quantity: '', price: '', total: '' })}
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
                  <Button variant="button4" mr={3} type="submit" onClick={() => setStatus('draft')}>
                     Save as Draft
                  </Button>
                  <Button variant="primary" type="submit" onClick={() => setStatus('pending')}>
                     Save & Send
                  </Button>
               </Box>
            </Flex>
         </InvoiceActionBar>
      </form>
   )
}

export default CreateInvoice
