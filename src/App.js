import '@fontsource/spartan'
import React from 'react'
import { ChakraProvider, Box } from '@chakra-ui/react'

import SideBar from 'app/SideBar'
import InvoiceForm from 'app/InvoiceForm'
import InvoiceList from 'app/InvoiceList'

import { myTheme } from './theme'

function App() {
   return (
      <ChakraProvider theme={myTheme}>
         <Box>
            <SideBar />
            <InvoiceForm />
            <Box>
               <InvoiceList />
            </Box>
         </Box>
      </ChakraProvider>
   )
}

export default App
