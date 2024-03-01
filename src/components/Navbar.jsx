import React from 'react';
import { Button, Icon, Link, Spacer } from '@chakra-ui/react'
import {Flex,Box, Image} from "@chakra-ui/react"
import LogIn from './LogIn'
import SignUp from './SignUp'
import "../App.css"
import {FiShoppingCart} from "react-icons/fi"

const Navbar = () => {
  return (
    <Flex className='nav' borderBottom="2px solid whitesmoke">
      <Box>
        <Flex>
      <Box w='auto' px={7} h={70} pt={2}>
        <Link href='/'><Image src='https://www.1mg.com/images/tata_1mg_logo.svg'/></Link>
      </Box>
      
      <Box w='auto' px={4} h={70} pt={4} fontWeight="bold">
        <Link href='/'>MEDICINES</Link>
      </Box>
      
      <Box w='auto' px={4} h={70} pt={4} fontWeight="bold">
      <Link href='/labtests'>LAB TESTS</Link>
      </Box>
      
      <Box w='auto' px={4} h={70} pt={4} fontWeight="bold">
        <Link href='/doctors'>CONSULT DOCTORS</Link>
        </Box>
      
      <Box w='auto' px={4} h={70} pt={4} fontWeight="bold">
      <Link href='/cancerCare'>CANCER CARE</Link>
      </Box>
      
      <Box w='auto' px={4} h={70} pt={4} fontWeight="bold">
      <Link href='/ayurveda'>AYURVEDA</Link>
      </Box>
      
      <Box w='auto' px={4} h={70} pt={4} fontWeight="bold">
      <Link href='/carePlan'>CARE PLAN</Link>
      </Box>
      </Flex>
      </Box>
      <Spacer />
      <Box>
        <Flex>
        <Box w='auto' px={4} h={70} pt={4} fontWeight="semibold">
          <Flex>
          <Link mx={2} ><LogIn /></Link>
          |
          <Link mx={2}><SignUp /></Link>
          </Flex>
        </Box>
        
        <Box w='auto' px={4} h={70} pt={4} fontWeight="semibold">
          <Link href='/offers'>Offers</Link>
        </Box>
        
        <Box w='auto' px={4} h={70} pt={4} fontWeight="semibold">
          <Link href='/cart'>
          <Icon as={FiShoppingCart} boxSize={6}>Cart</Icon>
          </Link>
        </Box>
        
        <Box w='auto' px={4} h={70} pt={4} fontWeight="semibold">
          <Link href='/help'>Need help?</Link>
          </Box>
          </Flex>
      </Box>
    </Flex>
  )
}

export default Navbar