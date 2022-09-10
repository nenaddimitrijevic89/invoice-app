import React, { useCallback, useEffect, useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'

import { fetchData } from 'services/dataService'

import { DataContext } from './context'

const DataProvider = ({ children }) => {
   const [data, setData] = useState([])
   const [type, setType] = useState('')
   const { isOpen, onToggle } = useDisclosure()

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
         const d = {
            id: Math.random(),
            clientName: invoice,
         }
         setData([d, ...data])
      },
      [data]
   )

   const providerValues = {
      invoices: data,
      isOpen,
      type,
      saveInvoice,
      openCreateInvoice,
      openEditInvoice,
   }

   return <DataContext.Provider value={providerValues}>{children}</DataContext.Provider>
}

export default DataProvider
