import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Box, Button,Image, Flex, Img,Text,Input,Divider,Heading,Spacer } from '@chakra-ui/react'
import { FaStar,FaRupeeSign, FaPlus, FaMinus, FaChevronRight, FaQuestionCircle } from 'react-icons/fa'
import {InfoOutlineIcon} from '@chakra-ui/icons'
import {BsTicket, BsQuestionCircle, BsHouse, BsTrash} from 'react-icons/bs'
import {Link} from 'react-router-dom'

const Cart = () => {
const [cartProd,setCartProd] = useState([])
const [total,setTotal] = useState(0)
const [isChecked, setIsChecked] = useState(false)
const [discount, setDiscount] = useState(0)
const [mrp, setMrp] = useState(0)

const fetchCart= async ()=>{
  try {
    const resp = await axios.get(`http://localhost:8080/cart`)
    const data = await resp.data;
    console.log(data);
    var pri = 0;
    var disc = 0;
    var retailPrice = 0;
    data?.map((element)=>{
      
      pri += element.price * element.count 
      retailPrice += element.mrp * element.count 
      disc += (element.mrp - element.price) * element.count
    })
  setTotal(pri)
  setDiscount(disc);
  setMrp(retailPrice);
  setCartProd(data)
  console.log(data)

  } catch (error) {
    console.log(error);
  }}
  
useEffect(()=>{
  fetchCart()
return ()=>{
}
},[])


const handleDeleteProd = async(id)=>{
  try {
    const resp = await axios({
      method:"delete",
      baseURL: `http://localhost:8080`,
      url: `/cart/delete/${id}`
    })
    const data = await resp.data
    console.log(data);
    fetchCart()
  } catch (error) {
    console.log(error);
  }
}

const handleUpdateProd = async(id)=>{
  try {
    const resp = await axios({
      method:"patch",
      baseURL: `http://localhost:8080`,
      url: `/cart/update/${id}`
    })
    const data = await resp.data
    console.log(data);
    fetchCart()
  } catch (error) {
    console.log(error);
  }
}

const handleRemove = async(id)=>{
  try {
    const resp = await axios({
      method:"delete",
      baseURL: `http://localhost:8080`,
      url: `/cart/remove/${id}`
    })
    const data = await resp.data
    console.log(data);
    fetchCart()
  } catch (error) {
    console.log(error);
  }
}
  return (
    <Flex direction='column' justifyContent='center' alignItems='center' mb={32}>
      {cartProd.length > 0 &&
        <>
     <Box margin='auto' w={{lg:"90%"}} p={{base:4,lg:8}}>
      <Text fontWeight='semibold' fontSize={20}>{cartProd.length} items added</Text>
      <Text fontWeight='semibold' fontSize={12} color='darkgray'>Items not requiring prescription</Text>
      
      <Flex direction={{base:'column',md:'row'}} justifyContent='center' h='auto'> 
        <Box w={{md:'60%'}} px={10}>
      {cartProd.map((elem, index)=>{
        return(
            <Flex key={index} direction={{base:'column', lg:'row'}}  alignItems='center' gap={8}  py={4}>
              <Image
        src={elem.image_url}
        alt={elem.desc}
        borderRadius='lg'
        w={16} h={16}
        />
        
        <Box>
        <Text fontWeight='semibold' fontSize={16}>{elem.name}</Text>
        <Text fontWeight='medium' color='gray' fontSize={12}>{elem.desc}</Text>
        <Text decoration='underline' cursor='pointer' _hover={{color:'red.400'}} onClick={()=>handleRemove(elem._id)}>Remove</Text>
        </Box>

        <Spacer />

        <Box width={{lg:'30%'}}>
        <Flex  justifyContent='space-around'>
          <Flex alignItems='center'>
      <FaRupeeSign size={14}/>
      <Text fontWeight='bold' fontSize='lg'>{elem.price * elem.count}</Text>
      </Flex>
      <Flex alignItems='center'>
      <FaRupeeSign size={14} />
      <Text fontWeight='semibold' color='lightslategray' fontSize={{base:'md',lg:'lg'}} decoration='line-through'>{elem.mrp * elem.count}</Text>
      </Flex>
      <Text fontWeight='semibold' color='green.400' fontSize={{base:'md',lg:'lg'}}>{elem.off}% off</Text>
      </Flex>

        <Flex gap={4} border='1px solid red' p={2} alignItems='center'>
      <Text fontWeight='bold' color='red.400' onClick={()=>handleDeleteProd(elem._id)}>
        {elem.count > 1 ?<FaMinus size={12} /> :<BsTrash size={16}/> }</Text>
      <Spacer />
      <Text fontWeight='bold' >{elem.count}</Text>
      <Spacer />
      <Text fontWeight='bold' color='red.400' ><FaPlus size={12} onClick={()=>handleUpdateProd(elem._id)}/></Text>
      </Flex>

        </Box>
        
            </Flex>
        )
      })}
      </Box>
      <Divider orientation='vertical'/>

      <Flex w={{md:'40%'}} direction='column' px={10}>
      <Flex direction='column' gap={4}>
        <Text w='fit-content' bgColor='red.700' px={1} rounded='md' fontStyle='oblique' fontWeight='semibold' color='white'>Care Plan</Text>
        <Text fontWeight='semibold' fontSize='17px'>You can save extra &#8377; 109 on this order</Text>
        <Box>
          <Text color='red.800' fontWeight='semibold'>Become a careplan member</Text>
          <Text fontSize={14} color='grey'>3 months membership for only <b style={{fontSize:'16px', color:'black'}} >₹165</b> <span style={{textDecoration:'line-through'}}>₹549</span> <span style={{color:'green'}}>70% off</span></Text>
        </Box>
        <Flex gap={2} w='auto'>
          <Button bg='white' color='red.500' border='1px solid red' _hover={{bg:'red.100'}}>Know more</Button>
          <Button bg='red.400' color='white' border='1px solid red' _hover={{bg:'red.500'}}>Add membership</Button>
        </Flex>
      <Divider borderColor='darkgray'/>
      <Flex alignItems='center' justifyContent='space-between' py={2} >
        <Flex alignItems='center' gap={2}>
        <BsTicket size={20}/>
      <Text fontWeight='semibold' fontSize='17px'> Apply coupon</Text>
      </Flex>
      <FaChevronRight color='gray'/>
      </Flex>
      <Divider border='4px solid lightGray' />
      </Flex>

      <Flex direction='column' gap={2} py={7}>
        <Flex alignItems='center' justifyContent='space-between' fontSize='17px'>
        Check the health of your vital organs <InfoOutlineIcon boxSize={5}/>
        </Flex>
        <Flex alignItems='flex-start' gap={1}>
          <input style={{marginTop:'6px'}} type='checkbox' checked={isChecked} onChange={(e)=>
            setIsChecked(e.target.checked)
          }/>
          {!isChecked ?
          <Box><Text fontSize={16}>
          Book Good Health Silver Package for just ₹649</Text> 
         <Text fontSize='14px'>Get the tests done easily from your home. This package will help you in identifying potential disorders and deficiencies at an early stage.</Text> 
          <Text color='green' fontSize='14px'>Pay later on home sample collection </Text>
          </Box>
          : <Box>
          <Text fontSize={16}>Thank you for your interest</Text>
           <Text fontSize='14px'> Our team will call you to book a slot as per your convenience.</Text>
           <Text color='green' fontSize='14px'>Pay later on home sample collection</Text>
            </Box>}
        </Flex>
        </Flex>

      <Divider border='4px solid lightGray' />

      <Flex fontWeight='semibold' direction='column' py={6} gap={2} fontSize={14}>
        <Heading>Bill Summary</Heading>
        <Flex  color='grey' justifyContent='space-between'>
        <Text >item total (MRP)</Text>
        <Text  >&#8377;{mrp}</Text>
        </Flex>
        <Flex justifyContent='space-between'>
        <Flex alignItems='center' gap={2}>
          <Text color='green'>Total discount </Text>
          <BsQuestionCircle /></Flex>
        <Text color='green' fontWeight='semibold'>&#8377;{discount}</Text>
        </Flex>
        <Flex justifyContent='space-between'>
        <Text color='green'>Shipping fee</Text>
        <Text color='green'>As per delivery address</Text>
        </Flex>
        <Divider border='1px solid lightgray'/>
        <Flex justifyContent='space-between'>
        <Text fontWeight='bold' fontSize={18}>To be paid</Text>
        <Text fontWeight='bold' fontSize={18}>&#8377;{total}</Text>
        </Flex>
      </Flex>

        <Divider border='4px solid lightGray' />

      <Flex py={6} justifyContent='space-between'>
        <Flex alignItems='normal' gap={3}>
          <Box mt={1}><BsHouse size={20}/></Box>
          <Box>
          <Text fontWeight='bold' fontSize='17px'>Delivering to</Text>
          <Text fontSize={14}> deoghar</Text>
          </Box>    
        </Flex>

        <Flex color='tomato' alignItems='center' fontWeight='semibold' _hover={{textDecoration:'underline'}}>
          <Link to='/address'>Add address</Link>
          </Flex>
          
      </Flex>
      <Divider border='4px solid lightGray' />
      </Flex>
      
      </Flex>
      
     </Box>
     
     <Heading display='flex' alignItems='center' my={2}>Total Bill :<FaRupeeSign />{total}</Heading>
     <Button colorScheme='teal' w={200} h={12} fontSize={20} my={2}>Checkout</Button>
</>
      }

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