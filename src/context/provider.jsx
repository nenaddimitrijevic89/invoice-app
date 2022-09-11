import React, { useCallback, useEffect, useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'

import { fetchData } from 'services/dataService'
import { generateID, paymentDueFormat } from 'utils/helpers'

import { DataContext } from './context'

const DataProvider = ({ children }) => {
   const [data, setData] = useState([])
   const [type, setType] = useState('')
   const { isOpen, onToggle, onClose } = useDisclosure()

   useEffect(() => {
      fetchData(setData)
   }, [])

   const openCreateInvoice = () => {
      setType('create')
      onToggle()
   }

   const openEditInvoice = () => {
      setType('edit')
      onToggle()
   }

   const saveInvoice = useCallback(
      invoice => {
         const newInvoice = {
            ...invoice,
            id: generateID(),
            status: 'pending',
            paymentDue: paymentDueFormat(invoice.createdAt, invoice.paymentDue),
         }
         console.log({ invoice })
         setData([newInvoice, ...data])
         onClose()
      },
      [data, onClose]
   )

   const providerValues = {
      invoices: data,
      isOpen,
      type,
      saveInvoice,
      openCreateInvoice,
      openEditInvoice,
      onClose,
   }

   return <DataContext.Provider value={providerValues}>{children}</DataContext.Provider>
}

export default DataProvider
