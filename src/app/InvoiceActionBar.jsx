import React from 'react'
import { Box, Button, Flex, useColorModeValue } from '@chakra-ui/react'

const InvoiceActionBar = ({ type }) => {
   const bg = useColorModeValue('bgLight', 'bgDark')
   const shadow = useColorModeValue('#f2f2f2', '#0e0e18')
   const isCreate = type === 'create'

   return (
      <Flex
         w="50vw"
         h="120px"
         pos="fixed"
         align="center"
         p="0 60px 0 160px"
         bg={bg}
         bottom={0}
         boxShadow={`-15px -20px 20px 5px ${shadow}`}
         rounded="0 30px 0 0"
      >
         {isCreate ? (
            <Flex w="100%" justify="space-between">
               <Box>
                  <Button variant="button6">Discard</Button>
               </Box>
               <Box>
                  <Button variant="button4" mr={3}>
                     Save as Draft
                  </Button>
                  <Button variant="primary">Save & Send</Button>
               </Box>
            </Flex>
         ) : (
            <Box>
               <Button variant="button4" mr={3}>
                  Cancel
               </Button>
               <Button variant="primary">Save Changes</Button>
            </Box>
         )}
      </Flex>
   )
}

export default InvoiceActionBar
