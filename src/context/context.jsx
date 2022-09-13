import { createContext, useContext } from 'react'

export const DataContext = createContext({
   data: [],
   isOpen: false,
   type: '',
   saveInvoice: () => {
      throw new Error('setData() either not implemented or not used within DataProvider')
   },
   openCreateInvoice: () => {
      throw new Error('openCreateInvoice() either not implemented or not used within DataProvider')
   },
   openEditInvoice: () => {
      throw new Error('openEditInvoice() either not implemented or not used within DataProvider')
   },
   onClose: () => {
      throw new Error('onClose() either not implemented or not used within DataProvider')
   },
   onFilterStatus: () => {
      throw new Error('onFilterStatus() either not implemented or not used within DataProvider')
   },
})

export const useDataContext = () => {
   return useContext(DataContext)
}
