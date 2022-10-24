import React from 'react'
import { Link } from 'react-router-dom'
import { HStack, IconButton, Text } from '@chakra-ui/react'
import { FaChevronLeft } from 'react-icons/fa'

const GoBackButton = () => {
   return (
      <Link to="/">
         <HStack>
            <IconButton bg="transparent" icon={<FaChevronLeft color="#7c5dfa" />} />
            <Text textStyle="h3">Go back</Text>
         </HStack>
      </Link>
   )
}

export default GoBackButton
