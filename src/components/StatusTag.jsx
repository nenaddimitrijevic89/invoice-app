import React from 'react'
import { Tag, TagLabel, TagLeftIcon, useColorModeValue } from '@chakra-ui/react'
import { BsDot } from 'react-icons/bs'

const StatusTag = ({ status }) => {
   const draftColor = useColorModeValue('purpleBlackLight', 'greyLight')
   const draftBg = useColorModeValue('#f4f1f8', '#2a2c43')
   const color = status === 'paid' ? 'green' : status === 'pending' ? 'orange' : draftColor
   const bg = status === 'paid' ? 'greenOpacity' : status === 'pending' ? 'orangeOpacity' : draftBg

   return (
      <Tag size="lg" w="100%" h="48px" variant="subtle" color={color} bg={bg}>
         <TagLeftIcon boxSize="24px" as={BsDot} />
         <TagLabel fontWeight="bold">{status}</TagLabel>
      </Tag>
   )
}

export default StatusTag
