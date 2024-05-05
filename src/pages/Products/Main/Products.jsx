import { useEffect, useState } from 'react'
import axios from 'axios'
import { FaStar } from "react-icons/fa";
import { FaRupeeSign } from 'react-icons/fa';
import { SimpleGrid, Image,Text,Card,CardBody,CardFooter,ButtonGroup,Button,Divider,Heading,Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Products = () => {
const [items,setItems] = useState([]); 
const [cartItems, setCartItems] = useState({});

const getProducts = async(ele)=>{
  setCartItems(ele)
  try {
    const resp = await axios.get(`http://localhost:8080/product`)
    const data = await resp.data
    console.log(data);
    setItems(data)
  } catch (error) {
    console.log(error);
  }
}

useEffect(()=>{
getProducts()
},[])

const handleCart = async(elem)=>{
  try {
    const resp = await axios({
      method:"POST",
      baseURL: `http://localhost:8080`,
      url: `/cart/addToCart`,
      data: elem 
    })
    const data =  resp.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}



return (
    <SimpleGrid columns={{base:1,sm:2,md:3}} gap={{base:2,sm:6,md:12}}>
       {items.map((elem)=>{
        return(
          
            <Card maxW='sm' key={elem.id}  boxShadow='lg' _hover={{transform:"scale(1.02)"}}>
  <CardBody >
    <Image
      src={elem.image_url}
      alt={elem.desc}
      borderRadius='lg'
      w={32} h={40}
    />
    <Stack mt='6' spacing='3'>
    <Link to={`/products/${elem._id}`} ><Heading size='md'>{elem.name}</Heading></Link>
      <Text display='flex' alignItems='center' gap={2}>
      <FaStar />{elem.star}
      </Text>
      <Text color='blue.600' fontSize='2xl' display='flex' alignItems='center' gap={2}>
       <FaRupeeSign /> {elem.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing={{base:'0',lg:'2'}} display={{base:'block',lg:'flex'}}>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue' onClick={()=>handleCart(elem)}>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
     )
       })}

    </SimpleGrid>
  )
}

export default Products
/**
          let newHours = Math.floor(timer/3600);
          let newMinutes = Math.floor((timer/60)-(newHours*60)) ;
          let newSeconds = timer - ((newHours*3600) +(newMinutes*60));
        */