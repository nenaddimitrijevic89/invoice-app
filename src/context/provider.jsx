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
      (invoice, status) => {
         const newInvoice = {
            ...invoice,
            id: generateID(),
            status,
            paymentDue: paymentDueFormat(invoice.createdAt, invoice.paymentTerms),
            total: invoice.items.reduce((prev, cur) => prev + Number(cur.total), 0),
         }
         console.log({ newInvoice })
         setData([...data, newInvoice])
         onClose()
      },
      [data, onClose]
   )

   const onFilterStatus = status => {
      const filtered = data.filter(invoice => invoice.status === status)
      setData(filtered)
   }

   const providerValues = {
      invoices: data,
      isOpen,
      type,
      saveInvoice,
      openCreateInvoice,
      openEditInvoice,
      onClose,
      onFilterStatus,
   }

   return <DataContext.Provider value={providerValues}>{children}</DataContext.Provider>
}

export default DataProvider
