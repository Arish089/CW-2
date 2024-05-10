import React, { useEffect, useState } from 'react';
import { Spacer,Box, Container,Icon, FormControl, Input,Stack ,Flex, InputGroup,
InputLeftElement, Text, InputRightElement, InputRightAddon, HStack,Button } from '@chakra-ui/react';
import { FaMapMarkerAlt,FaBolt } from 'react-icons/fa'
import {SearchIcon,} from "@chakra-ui/icons"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';
import Error from './Error';

const Searchbars = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchProd, setSearchProd] = useState('');
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [selected,seSelected] = useState('')
  const [show,setShow] = useState(false)

  const navigate = useNavigate()


  // Function for reverse geocoding using HERE Geocoding API
  const reverseGeocode = async (searchQuery) => {
    const apiKey =  'nBfQ-lLcJSSIWNMvYyH7PVh55Ky0o5mx0TE5KDX4680'; // Replace with your actual HERE API key
    const apiUrl = `https://geocode.search.hereapi.com/v1/geocode?q=${encodeURIComponent(searchQuery)}&apiKey=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (response.ok) {
        if (data.items && data.items.length > 0) {
          const city = data.items[0].address.city;
          console.log(city);
          setCity(city);
        } else {
          setCity('City not found');
        }
      } else {
        console.error("Geocoding request failed:", data.error);
      }
    } catch (error) {
      console.error("Error fetching location data:", error);
    }
  };

  // Function to handle search
  
useEffect(()=>{
    if(searchTerm !== ''){
        reverseGeocode(searchTerm)
        }else{
          setCity(null)
        }
  
        
},[searchTerm,city])



useEffect(()=>{            
  if(searchProd.length > 0){
    navigate(`/search/${searchProd}`)
  }},[searchProd])

  return (
    <div>
      {loading && <Loading />}
      {error && <Error />}
      <Flex  spacing={50}>
        <Box>
      <Stack direction={{base:'column', md: 'row'}} spacing='18px'>
        <Box pl={{base:2,md:10}} pt={{base:'3',md:'1'}}>
      <FormControl>
        <InputGroup w={260}>
        <InputLeftElement pointerEvents="none" >
         <Icon boxSize={8} mt={3}> <FaMapMarkerAlt color="gray.500" /></Icon>
           </InputLeftElement>      
<Input type='search'
  w='200px'
  py={2}
  placeholder="Enter your city"
  value={searchTerm}
  onChange={(e)=>{
  setSearchTerm(e.target.value)
  setShow(true);}} />
<InputRightElement>
{ selected.length > 0 &&
<InputRightAddon bg='white' border='1px solid black' py={0} px={1} borderRadius={8}>
{selected}
</InputRightAddon>
}
</InputRightElement>
        </InputGroup>
        </FormControl>
        </Box>

        <Box pt={1} pl={{base:2,md:0}}>
        <FormControl>
          
          <Input type='search'
          w={{base:'300px',md:'500px'}}
          py={2}
          px={2}
          value={searchProd}
          placeholder='Search for Medicined and Health Products'
          onChange={(e)=>{
            setSearchProd(e.target.value)
            navigate(`/search/${searchProd}`)
          }}
          />
          
        </FormControl>
        </Box>

        </Stack>

        </Box>
        <Spacer />

        <Flex>
        <Box display={{base:'none',lg:'flex'}} pt={3} fontSize={15}>
        <Box p={{md:'5px'}}><FaBolt /></Box>QUICK BUY! Get 15% off on medicines*
        </Box>
        <Spacer />
        <Box pt={1} display={{base:'none',lg:'block'}} >
        <Button px={7}  bg='red.400' color='white'>Quick Order</Button>
        </Box>
        </Flex>
        </Flex>
      {city && show && <Box p={5} bg='gray.100' value={city} onClick={()=>{
            seSelected(city)
            setShow(false)}}
            >{city}</Box>}
    </div>
  );
};

export default Searchbars;
