import { useEffect, useState } from 'react'
import axios from 'axios'
import { FaStar } from "react-icons/fa";
import { FaRupeeSign } from 'react-icons/fa';
import { SimpleGrid,Box,Center, Image,Text,Card,CardBody,CardFooter,ButtonGroup,Button,Divider,Heading,Stack, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import Loading from '../../../components/Loading';
import Error from '../../../components/Error';

const Products = () => {
  const [page, setPage] = useState(1)
const [items,setItems] = useState([]);
const [loading, setLoading] = useState(false); 
const [error, setError] = useState(false);
const [totalPage, setTotalPage] = useState(0)

const getProducts = async()=>{
  setLoading(true)
  try {
    const resp = await axios.get(`https://cw-2-back-end.onrender.com/product`,{
      params:{
        page:page
      }
    })
    const data = await resp.data
   // console.log(data);
    setItems(data.products)
    setTotalPage(data.totalPages)
  } catch (error) {
    console.log(error);
    setError(true)
  }finally{
setLoading(false)
  }
}

useEffect(()=>{
getProducts()
},[page])

const handleCart = async(elem)=>{
  try {
    const resp = await axios({
      method:"POST",
      baseURL: `https://cw-2-back-end.onrender.com`,
      url: `/cart/addToCart`,
      data: elem 
    })
    const data =  resp.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}


return (<> 
{loading && <Loading />}
{error && <Error />}
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
    <Center my={8}>
      <Flex justifyContent='space-between' w={60}>
        <Button bg='blue.500' color='white' _hover={{bg:'blue.700'}} onClick={()=>setPage(page-1)} isDisabled={page <= 1}>Prev</Button>
        <Text fontSize={28} fontWeight='semibold'>{page}</Text>
        <Button bg='blue.500' color='white'  _hover={{bg:'blue.700'}} onClick={()=>setPage(page+1)} isDisabled={page >= totalPage}>Next</Button>
      </Flex>
      </Center>
    </>
  )
}

export default Products
