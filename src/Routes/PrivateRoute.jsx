import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext/FirebaseAuthContext'
import { Navigate } from 'react-router-dom'
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'
import { Box, Flex,Text, useBreakpointValue } from '@chakra-ui/react'
import Navbar, { Navbar2 } from '../components/Navbar'
import Footer from '../components/Footer'

const PrivateRoute = ({children}) => {
  const {CurrentUser} = useContext(AuthContext)
  const showTopNavbar = useBreakpointValue({base: false, md:true})
  //console.log(CurrentUser );
  
  if(!CurrentUser){
    return(
      <>
      {showTopNavbar && <Navbar />}
    <Flex direction='column'>
      <Text textAlign='center' fontSize={24} fontWeight='semibold'>
        Please login for further access.
      </Text>
      <Flex justifyContent='space-around' w='20%' m='auto' alignItems='center' h={100} fontSize={32} >
     <Box _hover={{color:'red'}}><LogIn /></Box> | <Box _hover={{color:'red'}}><SignUp /></Box>
     </Flex>
    </Flex>
    
    <Footer />
    {!showTopNavbar && <Navbar2/>}
    </>
    )
  }
  return children;
}

export default PrivateRoute