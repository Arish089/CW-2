import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Box,Flex, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Image, Heading, Text, Radio, RadioGroup, Button, Select } from '@chakra-ui/react';
import { ChevronRightIcon} from '@chakra-ui/icons';
import {FaArrowTrendUp, FaStar } from 'react-icons/fa6'
import {BsStopwatch } from 'react-icons/bs'

const SingleProduct = () => {
  const {id} = useParams();

  const [address, setAddress] = useState([])
  const [singleAddress, setSingleAddress] = useState({})
  const [singleProd, setSingleProd] = useState({})
  const [timer,setTimer] = useState({hour:8, min:0, sec:0})

  const [currentDateTime, setCurrentDateTime] = useState(new Date())

  const getAddresses = async ()=>{
    try {
      const resp = await axios.get(`http://localhost:8080/address`);
      const data = await resp.data
      console.log(data);
      setAddress(data)
    } catch (error) {
      console.log(error);
    }
  }

  const getSingleProd = async()=>{
    try {
      const resp = await axios.get(`http://localhost:8080/product/${id}`)
      const data = await resp.data
      console.log(data);
      setSingleProd(data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getSingleProd();
    getAddresses()

    const intervalId = setInterval(() => {
      setTimer(timer => {
        if (timer.hour === 0 && timer.min === 0 && timer.sec === 0) {
          clearInterval(intervalId);
          
          return timer;
        }

        let newSeconds = timer.sec - 1;
        let newMinutes = timer.min;
        let newHours = timer.hour;

        if (newSeconds < 0) {
          newMinutes -= 1;
          newSeconds += 60;
        }

        if (newMinutes < 0) {
          newHours -= 1;
          newMinutes += 60;
        }
        return {
          hour:newHours,
          min: newMinutes,
          sec: newSeconds
        };
      });
    }, 1000);
console.log(timer.sec);
    return () => clearInterval(intervalId);

  }, []);

  const handleCart = async()=>{
    try {
      const resp = await axios({
        method:"POST",
        baseURL: `http://localhost:8080`,
        url: `/cart/addToCart`,
        data: singleProd 
      })
      const data =  resp.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  
    const options = {
    weekday: 'long', // Full day of the week (e.g., Monday)
    month: 'long', // Full month name (e.g., January)
    day: 'numeric', // Numeric day (e.g., 1)
  };
  const formattedDate = currentDateTime.toLocaleDateString(undefined, options);

  return (
    <Box w='85%' m='auto'>
      <Box p={3}>
      <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Personal Care</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>{singleProd.name}</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
      </Box>

      <Flex direction={{base:'column', lg:'row'}} justifyContent='space-between' w='100%'>
        
        <Flex direction='column' gap={2} wrap='wrap'>
          <Heading >{singleProd.name}</Heading>
          
          <Flex direction='column' color='red.400' gap={8}>
            <Flex bg='green' w='fit-content' color='white' alignItems='center' px={2}>{singleProd.star}<FaStar  color='white'/></Flex>
            <Text fontWeight='semibold' fontSize={18}>{singleProd.review} reviews</Text>
          </Flex>
          <Box fontSize={20} fontWeight='semibold'>
            Pack Size (1)
            <Text  fontWeight='normal'>{singleProd.desc}</Text>
          </Box>

          <Box >
          <Image src={singleProd.image_url} m='auto'/>
        </Box>
        
        </Flex>
        
        <Flex direction='column' gap={6} w={{base:'auto',lg:'40%'}}>
          <Flex direction='column' boxShadow='md' rounded='md' w='100%' >

            <Flex bg="green.50"  w='100%' py={2} alignItems='center' fontSize={12} gap={2} px={4}>
              <FaArrowTrendUp color='green'/>1,439 people bought this recently</Flex>

              <Flex direction='column'  gap={5} p={4}>
              <RadioGroup>
              <Flex direction='column' gap={5}  >
                <Radio size='lg' colorScheme='red' value='1'>
                  <Flex alignItems='center' gap={2}>
                <Text fontWeight='bold' fontSize='20px' opacity='0.8'>&#8377;{singleProd.price}</Text>
                <Text fontWeight='bold' fontSize='18px' opacity='0.6' textDecoration='line-through'>&#8377;{singleProd.mrp}</Text>
                <Text bg='green.100' color='green.600' px={2}>{singleProd.off}% off</Text>
                  </Flex>
                </Radio>

                <Radio size='lg' colorScheme='red' value='2'>
                  <Flex alignItems='center' gap={1}>
                  <Text fontWeight='bold' fontSize='20px' opacity='0.8'>&#8377;{singleProd.price}</Text>
                  <Text fontSize='15px' fontWeight='normal'>+ free shipping with</Text>
                  <Text w='fit-content' fontSize={12} bgColor='red.700' px={1} rounded='md' fontStyle='oblique' fontWeight='semibold' color='white'>Care Plan</Text>
                  </Flex>
                  </Radio>

                </Flex>
                </RadioGroup>

                <Text fontSize='13px' opacity='0.8'>Inclusive of all taxes</Text>
                <Flex gap={1}>
                <BsStopwatch size={20}/>
                <Text fontWeight='bold' fontStyle='oblique'>Sale Ends in</Text>
                <Text color='green.500' fontWeight='bold' fontStyle='oblique'>
                  {timer.hour.toString().padStart(2, '0')}:{timer.min.toString().padStart(2, '0')}:{timer.sec.toString().padStart(2, '0')}
                  </Text> 
                </Flex>
                <Button bg='red.400' color='white' onClick={handleCart}>Add to Cart</Button>
                </Flex>
          </Flex>

          <Box shadow='md' p={4} rounded='md'>
            <Flex alignItems='center' gap={1}>
            <Text fontSize={18} fontWeight='semibold'>Get it delivered by </Text>
            <Text color='green.400' fontSize={18} fontWeight='bold'>{formattedDate}</Text>
            </Flex>
            <br />
            <Text  color='gray'>Delivering to:</Text>
            <Select fontWeight='semibold'>{address.map((elem)=>{
              return(<>
              <option value={elem._id}>
                {elem.name? elem.name:elem.city}&nbsp;
               {elem.pincode}
              </option>
              </>)
            })}</Select>
          </Box>

          <Box>
            <Image src='https://onemg.gumlet.io/e8610bb6-86b0-4042-b0e1-bcc006e10760_1714565901.jpg?w=410&h=94&format=auto'/>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default SingleProduct;