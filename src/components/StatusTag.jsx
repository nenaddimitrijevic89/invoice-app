import React from 'react'
import { Flex, Tag, TagLabel, TagLeftIcon, useColorModeValue } from '@chakra-ui/react'
import { GoPrimitiveDot } from 'react-icons/go'

import { PAID, PENDING } from 'utils/constants'

const StatusTag = ({ status }) => {
   const draftColor = useColorModeValue('purpleBlackLight', 'greyLight')
   const draftBg = useColorModeValue('#f4f1f8', '#2a2c43')
   const color = status === PAID ? 'green' : status === PENDING ? 'orange' : draftColor
   const bg = status === PAID ? 'greenOpacity' : status === PENDING ? 'orangeOpacity' : draftBg

   return (
      <Tag size="lg" w="100%" h={12} variant="subtle" color={color} bg={bg}>
         <Flex justify="center" w="100%">
            <TagLeftIcon as={GoPrimitiveDot} />
            <TagLabel fontWeight="bold">{status}</TagLabel>
         </Flex>
      </Tag>
   )
}

export default StatusTag
