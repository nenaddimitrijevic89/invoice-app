import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Center, Spinner, useDisclosure, useToast } from '@chakra-ui/react'

import { useDataContext } from 'context/context'
import Modal from 'components/Modal'
import GoBackButton from 'components/GoBackButton'

import InvoiceDetailsActionHeader from './InvoiceDetailsActionHeader'
import InvoiceDetailsTable from './InvoiceDetailsTable'

const InvoiceDetailsPage = () => {
   const { invoices, onMarkAsPaid, onDelete, onEdit, openEditInvoice } = useDataContext()
   const { isOpen, onClose, onOpen } = useDisclosure()
   const [invoice, setInvoice] = useState()
   const { id } = useParams()
   const navigate = useNavigate()
   const toast = useToast()

   useEffect(() => {
      const filtered = invoices.find(invoice => invoice.id === id)

      if (!filtered) {
         navigate('/')
      }

      setInvoice(filtered)
   }, [id, invoices, navigate])

   const deleteInvoice = () => {
      navigate('/')
      onDelete(invoice.id)
      toast({
         title: 'Invoice deleted.',
         position: 'top-right',
      })
   }

   const editInvoice = () => {
      onEdit(invoice.id)
      openEditInvoice()
   }

   const markAsPaid = () => {
      onMarkAsPaid(invoice.id)
   }

   if (!invoice) return <Spinner size="xl" />

   return (
      <Center>
         <Modal id={invoice.id} isOpen={isOpen} onDelete={deleteInvoice} onClose={onClose} />
         <Box mt={10}>
            <GoBackButton />
            <InvoiceDetailsActionHeader
               invoice={invoice}
               editInvoice={editInvoice}
               markAsPaid={markAsPaid}
               onOpen={onOpen}
            />
            <InvoiceDetailsTable invoice={invoice} />
         </Box>
      </Center>
   )
}

export default InvoiceDetailsPage
