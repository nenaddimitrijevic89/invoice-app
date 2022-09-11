import { createContext, useContext } from 'react'

export const DataContext = createContext({
   data: [],
   isOpen: false,
   saveInvoice: () => {
      throw new Error('setData() either not implemented or not used within DataProvider')
   },
   openCreateInvoice: () => {
      throw new Error('onToggle() either not implemented or not used within DataProvider')
   },
   openEditInvoice: () => {
      throw new Error('onToggle() either not implemented or not used within DataProvider')
   },
   onClose: () => {
      throw new Error('onToggle() either not implemented or not used within DataProvider')
   },
})

export const useDataContext = () => {
   return useContext(DataContext)
}
