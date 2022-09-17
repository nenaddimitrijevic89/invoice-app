import React, { useEffect, useState } from 'react'
import { Button, HStack, Text, VStack, Flex, Box } from '@chakra-ui/react'
import { useForm, Controller, useFieldArray } from 'react-hook-form'
import { FaPlus } from 'react-icons/fa'

import { useDataContext } from 'context/context'
import { defaultValues } from 'models/default-values'
import { DRAFT, options, PENDING } from 'utils/constants'
import Input from 'components/Input'
import Select from 'components/Select'
import FieldItemLabels from 'components/FieldItemLabels'
import FieldItem from 'components/FieldItem'
import InvoiceActionBar from 'components/InvoiceActionBar'

const CreateInvoice = () => {
   const { onClose, saveInvoice } = useDataContext()
   const [triggerSave, setTriggerSave] = useState(false)
   const [status, setStatus] = useState('')

   const {
      control,
      handleSubmit,
      watch,
      setValue,
      formState: { errors },
      reset,
      clearErrors,
   } = useForm({
      defaultValues,
   })
   const { fields, append, remove } = useFieldArray({
      control,
      name: 'items',
   })
   const items = watch('items')

   useEffect(() => {
      items?.forEach((item, i) => {
         if (item?.price && item?.quantity) {
            const total = Number(item.price) * Number(item.quantity)
            setValue(`items.${i}.total`, total)
         }
      })
   }, [items, setValue, triggerSave])

   const onSubmit = handleSubmit(values => {
      saveInvoice(values, status)
      reset({ ...defaultValues })
      onClose()
   })

   const onDiscard = () => {
      reset({ ...defaultValues })
      onClose()
   }

   const onCalculateTotal = () => {
      clearErrors('items')
      setTriggerSave(trigger => !trigger)
   }

   const rules = status === PENDING ? { required: true } : { required: false }

   return (
      <form onSubmit={onSubmit}>
         <VStack spacing={5} align="start" p="50px 40px 200px 160px">
            <Text textStyle="h1">New Invoice</Text>
            <Text textStyle="h3" color="purpleLight">
               Bill From
            </Text>
            <Controller
               name="senderAddress.street"
               control={control}
               rules={rules}
               render={({ field }) => <Input label="Street Address" errors={errors} {...field} />}
            />
            <HStack>
               <Controller
                  name="senderAddress.city"
                  control={control}
                  rules={rules}
                  render={({ field }) => <Input label="City" errors={errors} {...field} />}
               />
               <Controller
                  name="senderAddress.postCode"
                  control={control}
                  rules={rules}
                  render={({ field }) => <Input label="Post Code" errors={errors} {...field} />}
               />
               <Controller
                  name="senderAddress.country"
                  control={control}
                  rules={rules}
                  render={({ field }) => <Input label="Country" errors={errors} {...field} />}
               />
            </HStack>
            <Text textStyle="h3" color="purpleLight" pt={5}>
               Bill To
            </Text>
            <Controller
               name="clientName"
               control={control}
               rules={rules}
               render={({ field }) => <Input label="Client's Name" errors={errors} {...field} />}
            />
            <Controller
               name="clientEmail"
               control={control}
               rules={rules}
               render={({ field }) => <Input label="Client's Email" errors={errors} {...field} />}
            />
            <Controller
               name="clientAddress.street"
               control={control}
               rules={rules}
               render={({ field }) => <Input label="Street Address" errors={errors} {...field} />}
            />
            <HStack>
               <Controller
                  name="clientAddress.city"
                  control={control}
                  rules={rules}
                  render={({ field }) => <Input label="City" errors={errors} {...field} />}
               />
               <Controller
                  name="clientAddress.postCode"
                  control={control}
                  rules={rules}
                  render={({ field }) => <Input label="Post Code" errors={errors} {...field} />}
               />
               <Controller
                  name="clientAddress.country"
                  control={control}
                  rules={rules}
                  render={({ field }) => <Input label="Country" errors={errors} {...field} />}
               />
            </HStack>
            <HStack w="100%">
               <Controller
                  name="createdAt"
                  control={control}
                  rules={rules}
                  render={({ field }) => (
                     <Input label="Invoice Date" type="date" errors={errors} {...field} />
                  )}
               />
               <Controller
                  name="paymentTerms"
                  control={control}
                  rules={rules}
                  render={({ field }) => (
                     <Select label="Payment Terms" options={options} errors={errors} {...field} />
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
                  errors={errors}
               />
            ))}
            {fields.length > 0 && <Button onClick={onCalculateTotal}>Calculate total</Button>}
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
                  <Button variant="button6" type="reset" onClick={onDiscard}>
                     Discard
                  </Button>
               </Box>
               <Box>
                  <Button variant="button4" mr={3} type="submit" onClick={() => setStatus(DRAFT)}>
                     Save as Draft
                  </Button>
                  <Button variant="primary" type="submit" onClick={() => setStatus(PENDING)}>
                     Save & Send
                  </Button>
               </Box>
            </Flex>
         </InvoiceActionBar>
      </form>
   )
}

export default CreateInvoice
