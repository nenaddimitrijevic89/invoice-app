import React from 'react'
import {
   Button,
   Modal as CModal,
   ModalBody,
   ModalContent,
   ModalFooter,
   ModalOverlay,
   Text,
   useColorModeValue,
} from '@chakra-ui/react'

const Modal = ({ id, isOpen, onDelete, onClose }) => {
   const colorLight = useColorModeValue('purpleBlackLight', '#fff')
   const colorDark = useColorModeValue('purpleBlackLight', 'greyLight')
   const bg = useColorModeValue('#fff', 'purpleBlackDark')

   return (
      <CModal
         closeOnOverlayClick={true}
         isOpen={isOpen}
         onClose={onClose}
         isCentered
         motionPreset="slideInBottom"
         size="xl"
      >
         <ModalOverlay />
         <ModalContent bg={bg} rounded={8} p={8}>
            <ModalBody pb={6}>
               <Text textStyle="h2" color={colorLight} mb={5}>
                  Confirm Deletion
               </Text>
               <Text textStyle="body1" color={colorDark}>
                  Are you sure you want to delete invoice # {id}? This action cannot be undone.
               </Text>
            </ModalBody>

            <ModalFooter>
               <Button variant="button3" onClick={onClose} mr={3}>
                  Cancel
               </Button>
               <Button variant="button5" onClick={onDelete}>
                  Delete
               </Button>
            </ModalFooter>
         </ModalContent>
      </CModal>
   )
}

export default Modal
