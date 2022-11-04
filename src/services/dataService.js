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
