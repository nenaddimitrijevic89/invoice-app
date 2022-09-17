import React from 'react'
import { Box, Grid, GridItem, IconButton } from '@chakra-ui/react'
import { ErrorMessage } from '@hookform/error-message'
import { FaTrashAlt } from 'react-icons/fa'

import Input from './Input'
import { Controller } from 'react-hook-form'

const FieldItem = ({ control, index, rules, remove, errors }) => {
   return (
      <Grid templateColumns="repeat(12, 1fr)" gap={2} alignItems="center">
         <GridItem colSpan={4}>
            <Controller
               name={`items.${index}.name`}
               control={control}
               rules={rules}
               render={({ field }) => (
                  <Box
                     rounded={8}
                     border={!!errors?.items?.[index]?.name ? '1px solid' : ''}
                     borderColor="redDark"
                  >
                     <Input {...field} />
                  </Box>
               )}
            />
         </GridItem>
         <GridItem colSpan={1}>
            <Controller
               name={`items.${index}.quantity`}
               control={control}
               rules={rules}
               render={({ field }) => (
                  <Box
                     rounded={8}
                     border={!!errors?.items?.[index]?.quantity ? '1px solid' : ''}
                     borderColor="redDark"
                  >
                     <Input type="number" {...field} />
                  </Box>
               )}
            />
         </GridItem>
         <GridItem colSpan={3}>
            <Controller
               name={`items.${index}.price`}
               control={control}
               rules={rules}
               render={({ field }) => (
                  <Box
                     rounded={8}
                     border={!!errors?.items?.[index]?.price ? '1px solid' : ''}
                     borderColor="redDark"
                  >
                     <Input type="number" {...field} />
                  </Box>
               )}
            />
         </GridItem>
         <GridItem colSpan={3}>
            <Controller
               name={`items.${index}.total`}
               control={control}
               rules={rules}
               render={({ field }) => (
                  <Box
                     pos="relative"
                     rounded={8}
                     border={!!errors?.items?.[index]?.total ? '1px solid' : ''}
                     borderColor="redDark"
                     color="redDark"
                  >
                     <Input isReadOnly bg="transparent" border="none" {...field} />
                     <Box pos="absolute" bottom="0" left="2">
                        <ErrorMessage
                           errors={errors}
                           name={`items.${index}.total`}
                           message="Add and calculate!"
                        />
                     </Box>
                  </Box>
               )}
            />
         </GridItem>
         <GridItem colSpan={1}>
            <IconButton
               type="button"
               onClick={() => remove(index)}
               variant="unstyled"
               fontSize={20}
               icon={<FaTrashAlt />}
            />
         </GridItem>
      </Grid>
   )
}

export default FieldItem
