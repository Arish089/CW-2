import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Box, Button,Image, Flex, Img,Link,Text,Card,CardBody,CardFooter,ButtonGroup,Divider,Heading,Stack, Spacer, SimpleGrid } from '@chakra-ui/react'
import { FaStar,FaRupeeSign } from 'react-icons/fa'

const Cart = () => {
const [cartProd,setCartProd] = useState([])
const [total,setTotal] = useState(0)

const fetchCart=()=>{
  const storedCartItems = JSON.parse(localStorage.getItem('unit')) || []
 // console.log(storedCartItems);
  var pri = 0;
  storedCartItems?.map((element)=>{
    
    pri += element.price 
  })
  //setTotal(pri)
  //setCartProd(storedCartItems)
}
useEffect(()=>{
  fetchCart()
return ()=>{
}
},[])

  return (
    <Flex direction='column' justifyContent='center' alignItems='center' mb={32}>
      {cartProd.length > 0 &&
      <>
        <SimpleGrid w='60%' columns={3} gap={4} py={32}>
      
      {cartProd?.map((elem,index)=>{
        return(
          <div key={index}>
          <Box>
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
      <Text fontWeight='semibold'>{elem.desc}</Text>
      <Text color='blue.600' fontSize='2xl' display='flex' alignItems='center' gap={2}>
       <FaRupeeSign /> {elem.price}
      </Text>
    </Stack>
  </CardBody>
</Card>
          </Box>
          <Spacer/>
          
          </div>
       )
      }) }
     
      </SimpleGrid>
      <Heading display='flex' alignItems='center' my={2}>Total :<FaRupeeSign />{total}</Heading>
      <Button colorScheme='teal' w={200} h={12} fontSize={20} my={2}>Checkout</Button>
      </>}

     {cartProd.length < 1 && 
      <Box h={400} m='auto' display='flex' flexDirection='column' justifyContent='center' textAlign='center' alignItems='center' gap={4}>
      <Img src='https://www.1mg.com/images/online_consultation/empty-cart-icon.svg' w={40} h={40}/>
      <Text fontWeight='bold'>Your cart is empty</Text>
      <Text fontWeight='semibold'>We have all the medicines and healthcare products that you need.</Text>
      <Link href='/'>
      <Button bg='white' border='1px solid red' borderRadius='0' w={60} color='red.400' _hover={{bg:'red.100'}}>
        Find Medicines
      </Button>
      </Link>
     </Box>}
    </Flex>
  )
}

export default Cart