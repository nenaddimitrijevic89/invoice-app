import AppError from 'models/AppError'
import Invoice from 'models/Invoice'

class InvoiceService {
   url = {
      invoices: 'data.json',
   }

   async fetchInvoices(callback) {
      try {
         const response = await fetch(this.url.invoices, {
            headers: {
               'Content-Type': 'application/json',
               Accept: 'application/json',
            },
         })
         const data = await response.json()
         const mapped = data.map(invoice => new Invoice(invoice))

         callback(mapped)
      } catch (error) {
         return new AppError({
            title: 'Error',
            message: 'Something went wrong',
            error,
         })
      }
   }
}

export const invoiceService = new InvoiceService()
