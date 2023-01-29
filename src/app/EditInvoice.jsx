import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Highlight, HStack, Text, useToast, VStack } from '@chakra-ui/react'
import { useForm, Controller, useFieldArray } from 'react-hook-form'
import { FaPlus } from 'react-icons/fa'

import { useDataContext } from 'context/context'
import { OPTIONS } from 'utils/constants'
import { successToastProps } from 'shared/toastConfig'
import Input from 'components/Input'
import Select from 'components/Select'
import FieldItemLabels from 'components/FieldItemLabels'
import FieldItem from 'components/FieldItem'
import InvoiceActionBar from 'components/InvoiceActionBar'

const EditInvoice = () => {
   const { onClose, invoiceForEdit, saveEditedInvoice } = useDataContext()
   const { t } = useTranslation()
   const [triggerSave, setTriggerSave] = useState(false)
   const [hasItem, setHasItem] = useState(false)
   const toast = useToast()

   const {
      control,
      handleSubmit,
      watch,
      setValue,
      formState: { errors },
      reset,
   } = useForm()
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

   useEffect(() => {
      reset({ ...invoiceForEdit })
   }, [invoiceForEdit, reset])

   const onSubmit = handleSubmit(values => {
      if (fields.length === 0) {
         setHasItem(true)
      } else {
         setHasItem(false)
         setTriggerSave(triggerSave => !triggerSave)
         saveEditedInvoice(values)
         onClose()
         toast({
            title: t('toast.invoiceCompleted'),
            ...successToastProps,
         })
      }
   })

   const onCancel = () => {
      reset({ ...invoiceForEdit })
      onClose()
   }

   const rules = { required: true }

   return (
      <form onSubmit={onSubmit}>
         <VStack spacing={5} align="start" p="50px 40px 200px 160px">
            <Text textStyle="h1">
               <Highlight query={['#']} styles={{ color: 'greyDark' }}>
                  {`Edit #${invoiceForEdit.id}`}
               </Highlight>
            </Text>
            <Text textStyle="h3" color="purpleLight">
               {t('billFrom')}
            </Text>
            <Controller
               name="senderAddress.street"
               control={control}
               rules={rules}
               render={({ field }) => (
                  <Input label="Street Address" errors={errors?.senderAddress?.street} {...field} />
               )}
            />
            <HStack>
               <Controller
                  name="senderAddress.city"
                  control={control}
                  rules={rules}
                  render={({ field }) => (
                     <Input label="City" errors={errors?.senderAddress?.city} {...field} />
                  )}
               />
               <Controller
                  name="senderAddress.postCode"
                  control={control}
                  rules={rules}
                  render={({ field }) => (
                     <Input label="Post Code" errors={errors?.senderAddress?.postCode} {...field} />
                  )}
               />
               <Controller
                  name="senderAddress.country"
                  control={control}
                  rules={rules}
                  render={({ field }) => (
                     <Input label="Country" errors={errors?.senderAddress?.country} {...field} />
                  )}
               />
            </HStack>
            <Text textStyle="h3" color="purpleLight" pt={5}>
               {t('billTo')}
            </Text>
            <Controller
               name="clientName"
               control={control}
               rules={rules}
               render={({ field }) => (
                  <Input label="Client's Name" errors={errors?.clientName} {...field} />
               )}
            />
            <Controller
               name="clientEmail"
               control={control}
               rules={rules}
               render={({ field }) => (
                  <Input label="Client's Email" errors={errors?.clientEmail} {...field} />
               )}
            />
            <Controller
               name="clientAddress.street"
               control={control}
               rules={rules}
               render={({ field }) => (
                  <Input label="Street Address" errors={errors?.clientAddress?.street} {...field} />
               )}
            />
            <HStack>
               <Controller
                  name="clientAddress.city"
                  control={control}
                  rules={rules}
                  render={({ field }) => (
                     <Input label="City" errors={errors?.clientAddress?.city} {...field} />
                  )}
               />
               <Controller
                  name="clientAddress.postCode"
                  control={control}
                  rules={rules}
                  render={({ field }) => (
                     <Input label="Post Code" errors={errors?.clientAddress?.postCode} {...field} />
                  )}
               />
               <Controller
                  name="clientAddress.country"
                  control={control}
                  rules={rules}
                  render={({ field }) => (
                     <Input label="Country" errors={errors?.clientAddress?.country} {...field} />
                  )}
               />
            </HStack>
            <HStack w="100%">
               <Controller
                  name="createdAt"
                  control={control}
                  rules={rules}
                  render={({ field }) => (
                     <Input
                        label="Invoice Date"
                        type="date"
                        errors={errors?.createdAt}
                        isDisabled={!!invoiceForEdit?.createdAt}
                        {...field}
                     />
                  )}
               />
               <Controller
                  name="paymentTerms"
                  control={control}
                  rules={rules}
                  render={({ field }) => (
                     <Select
                        label="Payment Terms"
                        options={OPTIONS}
                        errors={errors?.paymentTerms}
                        {...field}
                     />
                  )}
               />
            </HStack>
            <Text textStyle="h2" color="greyDark" pt={5}>
               {t('itemList')}
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
            <Button
               border={hasItem ? '1px solid' : ''}
               borderColor="redDark"
               variant="button3"
               w="100%"
               leftIcon={<FaPlus />}
               type="button"
               onClick={() => append({ name: '', quantity: '', price: '', total: '' })}
            >
               {t('addNewItem')}
            </Button>
         </VStack>

         <InvoiceActionBar>
            <Button variant="button4" mr={3} type="reset" onClick={onCancel}>
               {t('common.cancel')}
            </Button>
            <Button
               variant="primary"
               type="submit"
               onClick={() => setTriggerSave(trigger => !trigger)}
            >
               {t('common.saveChanges')}
            </Button>
         </InvoiceActionBar>
      </form>
   )
}

export default EditInvoice
