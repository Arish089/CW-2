import React,{useState} from 'react'
import { Button,Modal,ModalBody,ModalContent,ModalOverlay
,ModalHeader,ModalCloseButton,ModalFooter,FormControl,FormLabel,Input,Text,Tabs,
Tab,TabList,TabPanel,TabPanels
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import MobileSignin from '../AuthContext/AuthComponents/MobileAuth/MobileSignin'
import EmailSignin from '../AuthContext/AuthComponents/EmailAuth/EmailSignin'

const LogIn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
const initialRef = React.useRef(null)
const finalRef = React.useRef(null)
//const [show, setShow] = useState(false)


const handleShow = ()=>{
  setShow(true)
}
return (
  <>
    <Text onClick={onOpen}>Signin</Text>

    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Login to your account</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
        <Tabs variant='soft-rounded' colorScheme='green'>
  <TabList>
    <Tab>Mobile No.</Tab>
    <Tab>Email/Password</Tab>
  </TabList>
  <TabPanels pt={5}>
    <TabPanel>
      <MobileSignin />
    </TabPanel>
    <TabPanel>
      <EmailSignin />
    </TabPanel>
  </TabPanels>
</Tabs>
        </ModalBody>

        <ModalFooter>
          <Button onClick={onClose} >Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
)
}

export default LogIn