import React, { useCallback, useEffect, useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'

import { fetchData } from 'services/dataService'
import { generateID, paymentDueFormat } from 'utils/helpers'

import { DataContext } from './context'

const DataProvider = ({ children }) => {
   const [data, setData] = useState([])
   const [reserveData, setReserveData] = useState([])
   const [type, setType] = useState('')
   const { isOpen, onOpen, onClose } = useDisclosure()

   const saveData = data => {
      setData(data)
      setReserveData(data)
   }

   useEffect(() => {
      fetchData(saveData)
   }, [])

   const openCreateInvoice = () => {
      setType('create')
      onOpen()
   }

   const openEditInvoice = () => {
      setType('edit')
      onOpen()
   }

   const saveInvoice = useCallback(
      (invoice, status) => {
         const newInvoice = {
            ...invoice,
            id: generateID(),
            status,
            paymentDue: paymentDueFormat(invoice.createdAt, invoice.paymentTerms),
            total: invoice?.items?.reduce((prev, cur) => prev + Number(cur.total), 0),
         }
         console.log({ newInvoice })
         setData([...data, newInvoice])
         setReserveData([...data, newInvoice])
         onClose()
      },
      [data, onClose]
   )

   const onFilterStatus = status => {
      if (status === 'clear') {
         setData(reserveData)
      } else {
         const filteredData = reserveData.filter(invoice => invoice.status === status)
         setData(filteredData)
      }
   }

   const onMarkAsPaid = id => {
      const updated = data.map(invoice => {
         console.log(invoice.id, id)
         return invoice.id === id
            ? invoice.status === 'pending'
               ? {
                    ...invoice,
                    status: 'paid',
                 }
               : invoice
            : invoice
      })
      console.log({ updated })
      setData(updated)
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
      onMarkAsPaid,
   }

   return <DataContext.Provider value={providerValues}>{children}</DataContext.Provider>
}

export default DataProvider
