import '@fontsource/spartan'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ChakraProvider, Box } from '@chakra-ui/react'

import InvoiceForm from 'app/InvoiceForm'
import InvoiceDetailsPage from 'app/invoice-details/InvoiceDetailsPage'
import InvoiceList from 'app/InvoiceList'
import SideBar from 'components/SideBar'

import { myTheme } from './theme'

function App() {
   return (
      <Router>
         <ChakraProvider theme={myTheme}>
            <Box>
               <SideBar />
               <InvoiceForm />
               <Routes>
                  <Route path="/" element={<InvoiceList />} />
                  <Route path="/invoice/:id" element={<InvoiceDetailsPage />} />
               </Routes>
            </Box>
         </ChakraProvider>
      </Router>
   )
}

export default App
