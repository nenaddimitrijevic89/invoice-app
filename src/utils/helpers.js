const generateTwoRandomLetters = () => {
   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

   return `${alphabet[Math.floor(Math.random() * alphabet.length)]}${
      alphabet[Math.floor(Math.random() * alphabet.length)]
   }`
}

const generateFourRandomNumbers = () => {
   return Math.floor(1000 + Math.random() * 9000)
}

export const generateID = () => {
   const letters = generateTwoRandomLetters()
   const numbers = generateFourRandomNumbers()

   return `${letters}${numbers}`
}

export const paymentDueFormat = (created, payment) => {
   if (!created || !payment) {
      return ' '
   }
   let date = new Date(created)
   date.setDate(date.getDate() + Number(payment))

   const month = date.getUTCMonth() + 1
   const day = date.getUTCDate()
   const year = date.getUTCFullYear()

   return `${year}-${month}-${day}`
}

export const prepareInvoiceAttachment = invoice => {
   const [invoiceId, encodedInvoiceData] = invoice.split('__')
   const invoiceData = JSON.parse(Buffer.from(encodedInvoiceData, 'base64').toString())

   const invoiceEnd = '======== КРАЈ ФИСКАЛНОГ РАЧУНА ========='
   const journal = invoiceData.journal.replace(invoiceEnd, '')
   const qrCodeSrc = `data:image/png;base64,${invoiceData.verificationQRCode}`

   return `<div id=${invoiceId}>
               <pre style="margin: 0px;" width="315px">${journal}</pre>
               <img style="margin: 0px auto;" width="315px" src="${qrCodeSrc}" />
               <pre style="margin: 30px 0px;" width="315px">${invoiceEnd}</pre>
           </div>
           `
}
