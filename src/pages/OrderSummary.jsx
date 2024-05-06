import React,{useState, useEffect} from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { Box,Flex,Text, Heading, Divider, Image } from '@chakra-ui/react'

import axios from 'axios'
import { BsHouse, BsInfo, BsInfoCircle, BsQuestionCircle } from 'react-icons/bs'

const OrderSummary = () => {
  const [cartProd,setCartProd] = useState([])
const [total,setTotal] = useState(0)
const [discount, setDiscount] = useState(0)
const [mrp, setMrp] = useState(0)

const [address, setAddress] = useState([])
const [singleAddress, setSingleAddress] = useState([])

const navigate = useNavigate()

  const [currentDateTime, setCurrentDateTime] = useState(new Date())
  const [customDate, setCustomDate] = useState(new Date())

  const getAddresses = async ()=>{
    try {
      const resp = await axios.get(`https://cw-2-back-end.onrender.com/address`);
      const data = await resp.data
      console.log(data);
      setAddress(data)
      setSingleAddress(data[0])
    } catch (error) {
      console.log(error);
    }
  }

const fetchCart= async ()=>{
  try {
    const resp = await axios.get(`https://cw-2-back-end.onrender.com/cart`)
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
  getAddresses()
return ()=>{
}
},[])

const options = {
  //weekday: 'long', // Full day of the week (e.g., Monday)
  day: 'numeric', // Numeric day (e.g., 1)
  month: 'long', // Full month name (e.g., January)
};
const options1 = {
  //weekday: 'long', // Full day of the week (e.g., Monday)
  day: 'numeric' // Numeric day (e.g., 1)
  //month: 'long', // Full month name (e.g., January)
};

const formattedDate = currentDateTime.toLocaleDateString(undefined, options);
const formattedDate1 = customDate.toLocaleDateString(undefined, options1);

useEffect(()=>{
customDate.setDate(customDate.getDate() + 2)

},[])

  return (
    <Flex w='85%' m='auto' p={5}>

      <Flex direction='column' gap={6} w='45%' >

        <Flex alignItems='center' gap={2}>
        <Text fontSize='18px' fontWeight='semibold'>Delivery between {formattedDate} - {formattedDate1}</Text>
        <BsInfoCircle />
        </Flex>
        <Divider border='1px solid lightgray'/>

        <Box>
          {cartProd.map(elem =>
            <Flex key={elem._id} gap={2} alignItems='center' p={1}>
              <Image src={elem.image_url} boxSize={10} />
              <Flex direction='column' p={1} fontSize='14px'>
                <Text fontWeight='bold'>{elem.desc}</Text>
                <Text fontSize={12}>{elem.name}</Text>
              </Flex>
            </Flex>
          )}
          <Link to='/products'><Text textDecoration='underline' fontSize={14}>View all products</Text></Link>
        </Box>
        <Divider border='4px solid lightGray' w='98%' />
        <Text fontSize={12}>
        Tata 1mg is a technology platform to facilitate transaction of business. The products and services are offered for sale by the sellers.
         The user authorizes the delivery personnel to be his agent for delivery of the goods. For details read <span style={{textDecoration:'underline'}}>terms and conditions</span>
        </Text>
        </Flex>
        
      <Flex direction='column' gap={2} w='45%' m='auto'>

      <Flex alignItems='center' justifyContent='space-between'>
        <Flex alignItems='center'>
        <Image src='https://i.pinimg.com/736x/c6/af/99/c6af999ce86ff56bc6196eb616c56cf8.jpg' boxSize={8}/>
        <Text fontSize='18px' fontWeight='semibold'>My Neu coins</Text>
        </Flex>
        <Text fontSize={12} opacity={0.8}>Balance: 0 NeuCoins</Text>
        </Flex>
        <Divider border='1px solid lightgray'/>
        <Flex direction='column' gap={6}>
        <Text fontSize='13px'><span style={{fontWeight:'bold', fontSize:'16px',opacity:'0.9'}}>2.84</span> NeuCoins to be earned on this order*</Text>
         <Divider border='4px solid lightgray'/>
        </Flex>
         

        <Flex fontWeight='semibold' direction='column' py={6} gap={2} fontSize={14}>
        <Text fontSize={22} fontWeight='bold'>Bill Summary</Text>
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

      <Flex py={6} gap={4} direction='column' justifyContent='space-between'>

        <Flex alignItems='normal' justifyContent='space-between' gap={3}>
        <Text fontWeight='bold' fontSize='18px'>Delivering to</Text>
        <Text color='tomato' fontWeight='semibold'>Change</Text>
        </Flex>

        <Divider border='1px solid lightgray'/>

        {
        //address.map(elem => 
        <Flex key={singleAddress._id} direction='column'>
        <Flex ><BsHouse size={20}/>
        <Text fontSize={14} fontWeight='bold' opacity={0.9}> {singleAddress.address_place}</Text>
          </Flex>    
          </Flex>
        //)
      }
          
      </Flex>
      </Flex>
    </Flex>
  )
}

export default OrderSummary