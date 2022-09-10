import React from 'react'
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

export const ColorModeSwitcher = props => {
   const { toggleColorMode } = useColorMode()
   const SwitchIcon = useColorModeValue(FaMoon, FaSun)
   const text = useColorModeValue('dark', 'light')
   const color = useColorModeValue('#ea924a', '#fff')

   return (
      <IconButton
         size="md"
         fontSize="lg"
         aria-label={`Switch to ${text} mode`}
         variant="ghost"
         color="current"
         onClick={toggleColorMode}
         icon={<SwitchIcon color={color} />}
         {...props}
      />
   )
}
