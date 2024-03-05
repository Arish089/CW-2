import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaRupeeSign } from 'react-icons/fa';
import { SimpleGrid, Image,Text,Card,CardBody,CardFooter,ButtonGroup,Button,Divider,Heading,Stack } from '@chakra-ui/react'
import data from "../../../db.json"



const Products = () => {

  const items = data.featured
  return (
    <SimpleGrid columns={{base:1,sm:2,md:3}} gap={{base:2,sm:6,md:12}}>
       {items.map((elem)=>{
        return(
            <Card maxW='sm' key={elem.id} boxShadow='lg'>
  <CardBody >
    <Image
      src={elem.image_url}
      alt={elem.desc}
      borderRadius='lg'
      w={32} h={40}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{elem.name}</Heading>
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
      <Button variant='ghost' colorScheme='blue'>
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