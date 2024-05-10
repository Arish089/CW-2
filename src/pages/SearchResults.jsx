import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading';
import Error from '../components/Error';
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, SimpleGrid, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { FaRupeeSign, FaStar } from 'react-icons/fa';

const SearchResults = () => {

    const {searchProd} = useParams()

    const [prods, setProds] = useState([])
    const [error, setError] = useState(false);
const [loading, setLoading] = useState(false)

const FetchSearch = async ()=>{
    setLoading(true)
    try {
      const resp = await axios({
        method:'get',
        baseURL: `https://cw-2-back-end.onrender.com/product`,
        url:`/search`,
        params:{
        searchProd: searchProd
      }
      })
      const finalresp = await resp.data
     // console.log(resp.data);
      setProds(finalresp)
      //setTotalPages(finalresp.total_pages)
    } catch (error) {
     console.log(error);
     setError(true) 
    }finally{
        setLoading(false)
    }
  }

  useEffect(()=>{
    if(searchProd.trim() !== ""){
        FetchSearch()
        }else{
          setProds([])
        }
  },[searchProd])

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

  return (
    <>
  {loading && <Loading />}
  {error && <Error />}
    <SimpleGrid columns={{base:1,sm:2,md:3}} gap={{base:2,sm:6,md:12}} my={10} mx={5}>
       { prods.length <= 0 ?
        <Text fontWeight='semibold' fontSize={24}>No such Product found</Text>
       :
       prods.map((elem)=>{
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
    </> )
}

export default SearchResults