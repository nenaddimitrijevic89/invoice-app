import React from 'react'
import { Grid, GridItem, Text } from '@chakra-ui/react'

const FieldItemLabels = () => {
   return (
      <Grid templateColumns="repeat(12, 1fr)" gap={2} w="100%">
         <GridItem colSpan={4}>
            <Text textStyle="body1">Item Name</Text>
         </GridItem>
         <GridItem colSpan={1}>
            <Text textStyle="body1">Qty</Text>
         </GridItem>
         <GridItem colSpan={3}>
            <Text textStyle="body1">Price</Text>
         </GridItem>
         <GridItem colSpan={3}>
            <Text textStyle="body1">Total</Text>
         </GridItem>
      </Grid>
   )
}

export default FieldItemLabels
