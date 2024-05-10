import React,{useState, useEffect} from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { Box,Flex,Text, Heading, Divider, Image, Button, useBreakpointValue } from '@chakra-ui/react'

import axios from 'axios'
import { BsHouse,  BsInfoCircle, BsPhone, BsQuestionCircle } from 'react-icons/bs'
import Loading from '../components/Loading'
import Error from '../components/Error'

const Payment = () => {

const [cartProd,setCartProd] = useState([])
const [total,setTotal] = useState(0)
const [discount, setDiscount] = useState(0)
const [mrp, setMrp] = useState(0)

const [singleAddress, setSingleAddress] = useState([])

const [loading, setLoading] = useState(false); 
const [error, setError] = useState(false);


  const [currentDateTime, setCurrentDateTime] = useState(new Date())
  const [customDate, setCustomDate] = useState(new Date())

  const getAddresses = async ()=>{
    try {
      const resp = await axios.get(`https://cw-2-back-end.onrender.com/address`);
      const data = await resp.data
      //console.log(data);
      setSingleAddress(data[2])
    } catch (error) {
      console.log(error);
    }
  }


  const fetchOrderId = async (amount) => {
    try {
      const response = await axios('https://cw-2-back-end.onrender.com/order/create-order', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        data:{
          name:"Random", amount:amount*100}
      });
      const finalresp = await response.data;
    //  console.log(finalresp);

      var options = {
        "key": "rzp_test_OLXHj88GqSNGal", // Enter the Key ID generated from the Dashboard
        "amount": finalresp.order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": finalresp.order.currency,
        "name": "Tata-1Mg", //your business name
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": finalresp.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "callback_url": "http://localhost:8080/order/payment-verification",
        "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
            "name": "Gaurav Kumar", //your customer's name
            "email": "gaurav.kumar@example.com",
            "contact": "8340194014" //Provide the customer's phone number for better conversion rates 
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open()
    } catch (error) {
      console.error('Error fetching order ID:', error);
    }
  };

const fetchCart= async ()=>{
  setLoading(true)
  try {
    const resp = await axios.get(`https://cw-2-back-end.onrender.com/cart`)
    const data = await resp.data;
    //console.log(data);
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
 // console.log(data)

  } catch (error) {
    console.log(error);
    setError(true)
  }finally{
    setLoading(false)
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
    <>
    {loading && <Loading />}
{error && <Error />}
    <Flex direction={{base:'column',lg:'row'}} w={{base:'95%',lg:'85%'}} alignItems={{base:'center',lg:'normal'}} m='auto' my={5} p={5}>

      <Flex direction='column' gap={6} w={{base:'auto',lg:'45%'}} >

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
               <Link to={`/products/${elem._id}`}><Text fontWeight='bold'>{elem.name}</Text></Link>
                <Text fontSize={12}>{elem.desc}</Text>
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
        
      <Flex direction='column' gap={2} w={{base:'auto',lg:'45%'}} m='auto'>

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
        <Flex key={singleAddress._id} direction='column' gap={2}>
        <Flex gap={2}><BsHouse size={20}/>
        <Text fontSize={16} fontWeight='bold' opacity={0.9}>{singleAddress.address_place}</Text>
          </Flex>
          <Text fontSize={14} fontWeight='semibold' opacity={0.7}>{singleAddress.buliding}, {singleAddress.city}-{singleAddress.pincode}, {singleAddress.state}</Text>
          <Flex alignItems='center' gap={2}><BsPhone />{singleAddress.mobile}</Flex>
          <Button bgColor='tomato' color='white' fontSize={18} _hover={{bgColor:'red.500'}} onClick={()=>fetchOrderId(total)}>Proceed to payment</Button>    
          </Flex>
        
      }
          
      </Flex>
      </Flex>
    </Flex>
    
    </>
  )
}

export default Payment;