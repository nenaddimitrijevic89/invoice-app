import React from 'react'
import { Grid, GridItem, IconButton } from '@chakra-ui/react'
import { FaTrashAlt } from 'react-icons/fa'

import Input from './Input'
import { Controller } from 'react-hook-form'

const FieldItem = ({ control, index, rules, remove }) => {
   return (
      <Grid templateColumns="repeat(12, 1fr)" gap={2} alignItems="center">
         <GridItem colSpan={4}>
            <Controller
               name={`items.${index}.name`}
               control={control}
               rules={rules}
               render={({ field }) => <Input {...field} />}
            />
         </GridItem>
         <GridItem colSpan={1}>
            <Controller
               name={`items.${index}.quantity`}
               control={control}
               rules={rules}
               render={({ field }) => <Input type="number" px={2} {...field} />}
            />
         </GridItem>
         <GridItem colSpan={3}>
            <Controller
               name={`items.${index}.price`}
               control={control}
               rules={rules}
               render={({ field }) => <Input type="number" {...field} />}
            />
         </GridItem>
         <GridItem colSpan={3}>
            <Controller
               name={`items.${index}.total`}
               control={control}
               render={({ field }) => (
                  <Input isReadOnly bg="transparent" border="none" {...field} />
               )}
            />
         </GridItem>
         <GridItem colSpan={1}>
            <IconButton
               type="button"
               onClick={() => remove(index)}
               variant="unstyled"
               fontSize="24px"
               icon={<FaTrashAlt />}
            />
         </GridItem>
      </Grid>
   )
}

export default FieldItem
