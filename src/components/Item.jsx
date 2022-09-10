import React from 'react'
import { Grid, GridItem, IconButton } from '@chakra-ui/react'
import { FaTrashAlt } from 'react-icons/fa'

import Input from './Input'

const Item = () => {
   return (
      <Grid templateColumns="repeat(12, 1fr)" gap={2} alignItems="center">
         <GridItem colSpan={4}>
            <Input />
         </GridItem>
         <GridItem colSpan={1}>
            <Input type="number" pl={3} />
         </GridItem>
         <GridItem colSpan={3}>
            <Input type="number" />
         </GridItem>
         <GridItem colSpan={3}>
            <Input isReadOnly bg="transparent" border="none" />
         </GridItem>
         <GridItem colSpan={1}>
            <IconButton variant="unstyled" fontSize="24px" icon={<FaTrashAlt />} />
         </GridItem>
      </Grid>
   )
}

export default Item
