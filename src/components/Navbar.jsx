import React, { useContext } from 'react';
import { Icon, Spacer } from '@chakra-ui/react'
import {Link} from "react-router-dom"
import {Flex,Box, Image} from "@chakra-ui/react"
import LogIn from './LogIn'
import SignUp from './SignUp'
import "../App.css"
import {FiShoppingCart} from "react-icons/fi"
import {AiOutlineHome} from "react-icons/ai"
import { FaFlask, FaSignInAlt, FaUserMd } from 'react-icons/fa';
import {IoIosHeart} from 'react-icons/io'
import { AuthContext } from '../AuthContext/FirebaseAuthContext';
import Logout from './Logout';

const Navbar = () => {
  const {CurrentUser} = useContext(AuthContext)

  return (
    <Flex className='nav' borderBottom="2px solid whitesmoke">
      <Box>
        <Flex>
      <Box  px={2} h={70} pt={2}>
        <Link to='/'><Image src='https://www.1mg.com/images/tata_1mg_logo.svg'/></Link>
      </Box>
      <Spacer />
      <Box  px={4} h={70} pt={4} fontWeight="bold">
        <Link to='/'>MEDICINES</Link>
      </Box>
      <Spacer />
      <Box  px={4} h={70} pt={4} fontWeight="bold">
      <Link to='/labtests'>LAB TESTS</Link>
      </Box>
      <Spacer />
      <Box  px={4} h={70} pt={4} fontWeight="bold">
        <Link to='/doctors'>CONSULT DOCTORS</Link>
        </Box>
        <Spacer />
      <Box  px={4} h={70} pt={4} fontWeight="bold">
      <Link to='/cancerCare'>CANCER CARE</Link>
      </Box>
      <Spacer />
      <Box  px={4} h={70} pt={4} fontWeight="bold">
      <Link to='/ayurveda'>AYURVEDA</Link>
      </Box>
      <Spacer />
      <Box  px={4} h={70} pt={4} fontWeight="bold">
      <Link to='/carePlan'>CARE PLAN</Link>
      </Box>
      </Flex>

      </Box>

      <Spacer />
      <Box >
        <Flex>
        <Box  px={4} h={70} pt={4} fontWeight="semibold">
          {CurrentUser ? <Logout /> :
          <Flex >
          <Link mx={2} ><LogIn /></Link>
          |
          <Link mx={2} ><SignUp /></Link>
          </Flex>}
        </Box>
        <Spacer />
        <Box  px={4} h={70} pt={4} fontWeight="semibold">
          <Link to='/offers'>Offers</Link>
        </Box>
        <Spacer />
        <Box  px={4} h={70} pt={4} fontWeight="semibold">
          <Link to='/cart'>
          <Icon as={FiShoppingCart} boxSize={6}>Cart</Icon>
          </Link>
        </Box>
        <Spacer />
        <Box  px={4} h={70} pt={4} fontWeight="semibold">
          <Link to='/help'>Need help?</Link>
          </Box>
          </Flex>
      </Box>
    </Flex>
  )
}

export default Navbar

const Navbar2 = ()=>{
  return(
    <Box p={4} py={2} position="fixed" bg='white' bottom="0" left="0" right="0" className='nav2'>
      <Flex>
        <Box>
          <Link to='/'>
          <Box pl={1}><AiOutlineHome size={28}/></Box>
          Home 
          </Link>
        </Box>
        <Spacer />
        <Box ml={{base:2,md:0}}>
        <Link to='/doctors'>
          <Box pl={{base:2,md:10}} ><FaUserMd size={28}/></Box>Consult Doctors 
          </Link>
        </Box>
        <Spacer />
        <Box>
        <Link to='/carePlan'>
          <Box pl={{md:4}}><IoIosHeart size={28} /></Box>
          Care Plan 
          </Link>
        </Box>
        <Spacer />
        <Box>
        <Link to='/labtests'>
          <Box pl={{md:4}}><FaFlask size={28}/></Box>
          Lab Tests 
          </Link>
        </Box>
        <Spacer />
        <Box>
        <Link to='/'>
          <Box pl={{md:7}}><FaSignInAlt size={28}/></Box>
          Login | Signup
          </Link>
        </Box>
        <Spacer />
        <Box pr={4}>
        <Link to='/cart'>
        <FiShoppingCart size={28}/><Box pl={1}>Cart</Box>  
          </Link>
        </Box>
      </Flex>
    </Box>
  )
}

export {Navbar2}