import Invoice from 'models/Invoice'

export const fetchData = async setData => {
   try {
      const response = await fetch('data.json', {
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
         },
      })
      const data = await response.json()
      const mapped = data.map(invoice => new Invoice(invoice))

      setData(mapped)
   } catch (err) {
      console.error(err)
   }
}

class InvoiceService {
   async fetchInvoices(callback) {
      try {
         const response = await fetch('data.json', {
            headers: {
               'Content-Type': 'application/json',
               Accept: 'application/json',
            },
         })
         const data = await response.json()
         const mapped = data.map(invoice => new Invoice(invoice))

         callback(mapped)
      } catch (err) {
         //TODO: Return error for toast message
         console.error(err)
      }
   }
}

export const invoiceService = new InvoiceService()
