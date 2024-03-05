import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Box, Button,Image, Flex, Img,Link,Text,Card,CardBody,CardFooter,ButtonGroup,Divider,Heading,Stack, Spacer, SimpleGrid } from '@chakra-ui/react'
import { FaStar,FaRupeeSign } from 'react-icons/fa'

const Cart = () => {
const [cartProd,setCartProd] = useState([])


  const fetchCartProd =async ()=>{
    try {
      const resp = await axios.get(`http://localhost:3000/Cart`)
      console.log(resp.data);  
      setCartProd(resp.data)
    } catch (error) {
      console.log(error);
    }
    
  }

useEffect(()=>{
  fetchCartProd()
},[])

  return (
    <Flex direction='column' justifyContent='center' alignItems='center' mb={32}>
      <SimpleGrid w='60%' columns={3} gap={4} py={32}>
      {cartProd.length > 0 ?
      cartProd?.map((elem)=>{
        return(
          <>
          <Box key={elem.id}>
                 <Card maxW='sm' key={elem.id} boxShadow='lg' h={360}>
  <CardBody >
    <Image
      src={elem.image_url}
      alt={elem.desc}
      borderRadius='lg'
      w={20} h={28}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{elem.name}</Heading>
      <Text color='blue.600' fontSize='2xl' display='flex' alignItems='center' gap={2}>
       <FaRupeeSign /> {elem.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
  </CardFooter>
</Card>
          </Box>
          <Spacer/>
          
          </>
       )
      }):

     <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap={4}>
      <Img src='https://www.1mg.com/images/online_consultation/empty-cart-icon.svg' h={32}/>
      <Text fontWeight='bold'>Oops!</Text>
      <Text fontWeight='semibold'>Looks Like there is no item in the cart yet.</Text>
      <Link href='/'>
      <Button colorScheme='teal'>
        ADD MEDICINES
      </Button>
      </Link>
     </Box> }
     
     </SimpleGrid>
     <Button colorScheme='teal' w={200} h={12} fontSize={20}>Checkout</Button>
    </Flex>
  )
}

export default Cart