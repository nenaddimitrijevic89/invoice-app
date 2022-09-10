import React, { useState } from 'react'
import { Button, HStack, Text, VStack } from '@chakra-ui/react'
import { FaPlus } from 'react-icons/fa'

import Input from 'components/Input'
import Select from 'components/Select'
import Item from 'components/Item'
import ItemLabels from 'components/ItemLabels'

const CreateInvoice = () => {
   const [items, setItems] = useState([])

   return (
      <VStack spacing={5} align="start">
         <Text textStyle="h1">New Invoice</Text>
         <Text textStyle="h3" color="purpleLight">
            Bill From
         </Text>
         <Input label="Street Address" />
         <HStack>
            <Input label="City" />
            <Input label="Post Code" />
            <Input label="Country" />
         </HStack>
         <Text textStyle="h3" color="purpleLight" pt={5}>
            Bill To
         </Text>
         <Input label="Client's Name" />
         <Input label="Client's Email" />
         <Input label="Street Address" />
         <HStack>
            <Input label="City" />
            <Input label="Post Code" />
            <Input label="Country" />
         </HStack>
         <HStack w="100%">
            <Input label="Invoice Date" type="date" />
            <Select label="Payment Terms" options={['Next 30 days']} />
         </HStack>
         <Text textStyle="h2" color="greyDark" pt={5}>
            Item List
         </Text>
         <ItemLabels />
         {items && items.map((item, i) => <Item key={`random_${i}`} />)}
         <Button
            variant="button3"
            w="100%"
            leftIcon={<FaPlus />}
            onClick={() => setItems([{}, ...items])}
         >
            Add New Item
         </Button>
      </VStack>
   )
}

export default CreateInvoice
