import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Box, Text, Flex, Heading } from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'
import Loading from '../components/Loading'
import Error from '../components/Error'
import axios from 'axios'

const Success = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const query = searchParams.get('payment_id')

  const ClearCart = async ()=>{
    try {
      const resp = await axios({
        method:"delete",
        baseURL:`https://cw-2-back-end.onrender.com`,
        url:`/cart/clearCart`
      })
      const data = await resp.data;
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(()=>{
    ClearCart()
  },[])
  return (<>
    {loading && <Loading />}
    {error && <Error />}
    <Flex direction='column' justifyContent='center' alignItems='center' py={10}>
      
      <Box shadow='lg' w={{base:'300px',sm:'400px',md:"500px",lg:"600px"}} textAlign='center' rounded='lg' >
      <Box bg='green.300'  color='white'fontSize={24}  roundedTop='lg' fontWeight='semibold'>Transaction status</Box>
      <Flex direction='column' gap={4} p={8}>
      <Heading>Congratulations!!</Heading>
        <Flex textAlign='center' justifyContent='center' alignItems='center' gap={2}>
        <Text fontSize={24} fontWeight='semibold'>Transaction is successful!</Text>
        <FaCheckCircle color='green' size={32}/>
        </Flex>
        <Text textAlign='center' fontSize={20} fontWeight='semibold'>Your order_Id: {query}</Text>
      </Flex>
        
      </Box>
    </Flex>
    </>
  )
}

export default Success