import React from 'react'
import { Flex, Box, Heading, Text } from '@chakra-ui/react'
import { FaCheckCircle,FaCross, FaTimes } from 'react-icons/fa'

const Failed = () => {
  return (
    <Flex direction='column' justifyContent='center' alignItems='center'>
      
      <Box shadow='lg'w={{base:'300px',sm:'400px',md:"500px",lg:"600px"}} textAlign='center' rounded='lg'>
      <Box bg='red.500' color='white'fontSize={24}  roundedTop='lg' fontWeight='semibold'>Transaction status</Box>
      <Flex direction='column' gap={4} p={10}>
      <Heading>Error!!</Heading>
        <Flex textAlign='center' justifyContent='center' alignItems='center' gap={2}>
        <Text fontSize={24} fontWeight='semibold'>Transaction failed!</Text>
        <FaTimes color='red' size={32}/>
        </Flex>
        <Text textAlign='center' fontSize={20} color='red.500' fontWeight='semibold'>Unable to fetch order_Id</Text>
      </Flex>
        
      </Box>
    </Flex>
  )
}

export default Failed