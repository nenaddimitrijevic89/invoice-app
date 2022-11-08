import Item from './Item'

class Invoice {
   constructor({
      id,
      createdAt,
      paymentDue,
      description,
      paymentTerms,
      clientName,
      clientEmail,
      status,
      senderAddress,
      clientAddress,
      items,
      total,
   }) {
      this.id = id
      this.createdAt = createdAt
      this.paymentDue = paymentDue
      this.description = description
      this.paymentTerms = paymentTerms
      this.clientName = clientName
      this.clientEmail = clientEmail
      this.status = status
      this.senderAddress = {
         street: senderAddress.street,
         city: senderAddress.city,
         postCode: senderAddress.postCode,
         country: senderAddress.country,
      }
      this.clientAddress = {
         street: clientAddress.street,
         city: clientAddress.city,
         postCode: clientAddress.postCode,
         country: clientAddress.country,
      }
      this.items = items?.map(item => new Item(item))
      this.total = total
   }
}

export default Invoice
