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
   let date = new Date(created)
   date.setDate(date.getDate() + Number(payment))

   const month = date.getUTCMonth() + 1
   const day = date.getUTCDate()
   const year = date.getUTCFullYear()

   return `${year}-${month}-${day}`
}
