import React from 'react'
import { Button,Modal,ModalBody,ModalContent,ModalOverlay
  ,ModalHeader,ModalCloseButton,ModalFooter,FormControl,FormLabel,Input,Text
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
import MobileSignup from '../AuthContext/AuthComponents/MobileAuth/MobileSignup'

const SignUp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
const initialRef = React.useRef(null)
const finalRef = React.useRef(null)

return (
  <>
    <Text onClick={onOpen}>Signup</Text>

    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <MobileSignup />
        </ModalBody>

        <ModalFooter>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
)
}

export default SignUp