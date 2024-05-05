import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext/FirebaseAuthContext'
import { Navigate } from 'react-router-dom'
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'
import { Box, Flex,Text } from '@chakra-ui/react'

const PrivateRoute = ({children}) => {
  const {CurrentUser} = useContext(AuthContext)
  //console.log(CurrentUser );
  
  if(!CurrentUser){
    return(<Flex justifyContent='space-around' w='20%' m='auto' alignItems='center' h={100} fontSize={32} >
     <Box _hover={{color:'red'}}><LogIn /></Box> | <Box _hover={{color:'red'}}><SignUp /></Box>
     </Flex>)
  }
  return children
}

export default PrivateRoute