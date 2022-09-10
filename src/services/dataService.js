export const fetchData = async setData => {
   try {
      const response = await fetch('data.json', {
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
         },
      })
      const data = await response.json()
      setData(data)
   } catch (err) {
      console.error(err)
   }
}
