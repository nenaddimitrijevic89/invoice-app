import React, { useEffect, useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'

import Invoice from 'models/Invoice'
import { invoiceService } from 'services/dataService'
import { generateID, paymentDueFormat } from 'utils/helpers'
import { CLEAR, CREATE, EDIT, PAID, PENDING } from 'utils/constants'

import { DataContext } from './context'

const DataProvider = ({ children }) => {
   const [data, setData] = useState([])
   const [reserveData, setReserveData] = useState([])
   const [invoiceForEdit, setInvoiceForEdit] = useState({})
   const [type, setType] = useState('')
   const [status, setStatus] = useState('')
   const { isOpen, onOpen, onClose } = useDisclosure()

   const saveDataToGlobal = data => {
      setData(data)
      setReserveData(data)
   }

   useEffect(() => {
      invoiceService.fetchInvoices(saveDataToGlobal)
   }, [])

   const openCreateInvoice = () => {
      setType(CREATE)
      onOpen()
   }

   const openEditInvoice = () => {
      setType(EDIT)
      onOpen()
   }

   const saveInvoice = (invoice, status) => {
      onFilterStatus(CLEAR)

      const newInvoice = new Invoice({
         ...invoice,
         id: generateID(),
         status,
         paymentDue: paymentDueFormat(invoice.createdAt, invoice.paymentTerms),
         total: invoice?.items?.reduce((prev, cur) => prev + Number(cur.total), 0),
      })

      setData([...reserveData, newInvoice])
      setReserveData([...reserveData, newInvoice])
   }

   const saveEditedInvoice = invoice => {
      onFilterStatus(CLEAR)

      const updated = reserveData.map(item =>
         item.id === invoice.id
            ? new Invoice({
                 ...invoice,
                 status: PENDING,
                 paymentDue: paymentDueFormat(invoice.createdAt, invoice.paymentTerms),
                 total: Number(
                    invoice?.items?.reduce((prev, cur) => prev + Number(cur.total), 0)
                 ).toFixed(2),
              })
            : item
      )
      setData(updated)
      setReserveData(updated)
   }

   const onFilterStatus = status => {
      setStatus(status)

      if (status === CLEAR) {
         setData(reserveData)
      } else {
         const filteredData = reserveData.filter(invoice => invoice.status === status)
         setData(filteredData)
      }
   }

   const onEdit = id => {
      const filtered = reserveData.find(invoice => invoice.id === id)
      setInvoiceForEdit(filtered)
   }

   const onMarkAsPaid = id => {
      setStatus(CLEAR)

      const updated = reserveData.map(invoice =>
         invoice.id === id
            ? invoice.status === PENDING
               ? {
                    ...invoice,
                    status: PAID,
                 }
               : invoice
            : invoice
      )
      setData(updated)
      setReserveData(updated)
   }

   const onDelete = id => {
      setStatus(CLEAR)

      const filtered = reserveData.filter(invoice => invoice.id !== id)
      setData(filtered)
      setReserveData(filtered)
   }

   const providerValues = {
      invoices: data,
      isOpen,
      type,
      invoiceForEdit,
      status,
      saveInvoice,
      openCreateInvoice,
      openEditInvoice,
      onClose,
      onFilterStatus,
      onMarkAsPaid,
      onDelete,
      onEdit,
      saveEditedInvoice,
      onSetStatus: setStatus,
   }

   return <DataContext.Provider value={providerValues}>{children}</DataContext.Provider>
}

export default DataProvider
