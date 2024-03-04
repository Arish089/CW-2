import { Heading,Flex,SimpleGrid,Box,FormControl,Center,Input,Button,Spacer,
  Accordion,AccordionButton,AccordionItem,AccordionPanel,HStack,AccordionIcon,Img, UnorderedList,ListItem, Link, Icon,Grid,GridItem } from '@chakra-ui/react'
import React, { useState } from 'react'
import SignUp from './SignUp'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'
import { FaApple, FaCcAmex, FaCcMastercard, FaCcVisa, FaGooglePlay, FaLock, FaMedium,FaShieldAlt, FaWallet } from 'react-icons/fa'
import netbanking from "C:/Users/arish/OneDrive/Desktop/netbanking.png"
import { FaRupeeSign } from 'react-icons/fa'



const Footer = () => {
  const [mob,setMob] = useState('')
  const [index,setIndex] = useState([-1])
  return (
    <div style={{paddingTop:"20px"}}>
      <hr />
      <Heading textAlign='center' fontWeight={500} fontSize={25} mb={10}>INDIA'S LARGEST HEALTHCARE PLATFORM</Heading>
      <Flex justifyContent='center' alignItems='center'>
        <SimpleGrid columns={3} gap={{base:5,md:20,lg:40}} pb={{base:12,md:0}}>
          <Box h={100} textAlign='center'>
            <Box fontWeight='700' fontSize={34}>260m+</Box>
            <Box>Visitors</Box>
          </Box>
          <Box h={100} textAlign='center'>
            <Box fontWeight='700' fontSize={34}>31m+</Box>
            <Box >Orders Delivered</Box>
          </Box>
          <Box h={100} textAlign='center'>
            <Box fontWeight='700' fontSize={34}>1800+</Box>
            <Box >Cities</Box>
          </Box>
        </SimpleGrid>
      </Flex>
      <hr style={{width:'90%',margin:'auto'}}/>
      <Flex justifyContent='center' m='auto' w='48%' alignItems='center'gap={{base:1,md:8}} py={6}>
        <Box fontSize={19} >
          Get the link to download App
        </Box>
        <Box display='flex'>
          <FormControl display='flex' gap={2}>
            <Input type='number'
            bg='gray.100' placeholder='Enter your mobile no' w={{base:150,md:300}}
             value={mob}
             onChange={(e)=>setMob(e.target.value)}/>
            <Button bg='red.400' color='white' py={{base:1,md:5}} px={{base:1,md:6}} >Send link</Button>
          </FormControl>
        </Box>
      </Flex>
      <hr />
      <Box px={20} py={16} bg='orange.50'>
        <Flex justifyContent='space-around'>
          <Box pl={8}>
            <b>Know Us</b> 
            <UnorderedList >
              <ListItem><Link _hover={{textDecoration:'none'}} href=''>About Us</Link></ListItem>
              <ListItem><Link _hover={{textDecoration:'none'}} href=''>Contact Us</Link></ListItem>
              <ListItem><Link href='' _hover={{textDecoration:'none'}}>Press Coverage</Link></ListItem>
              <ListItem><Link href='' _hover={{textDecoration:'none'}}>Careers</Link></ListItem>
              <ListItem><Link href='' _hover={{textDecoration:'none'}}>Business Partnership</Link></ListItem>
              <ListItem><Link href='' _hover={{textDecoration:'none'}}>Become a Health Partner</Link></ListItem>
              <ListItem><Link href='' _hover={{textDecoration:'none'}}>Corporate Governance</Link></ListItem>
            </UnorderedList>
          </Box>
          <Spacer />
          <Box>
           <b>Our Policies</b> 
            <UnorderedList >
              <ListItem><Link _hover={{textDecoration:'none'}} href=''>Privacy Policy</Link></ListItem>
              <ListItem><Link _hover={{textDecoration:'none'}} href=''>Terms and Conditions</Link></ListItem>
              <ListItem><Link href='' _hover={{textDecoration:'none'}}>Editorial Policy</Link></ListItem>
              <ListItem><Link href='' _hover={{textDecoration:'none'}}>Return Policy</Link></ListItem>
              <ListItem><Link href='' _hover={{textDecoration:'none'}}>IP Policy</Link></ListItem>
              <ListItem><Link href='' _hover={{textDecoration:'none'}}>Grievance Redressal Policy</Link></ListItem>
              <ListItem><Link href='' _hover={{textDecoration:'none'}}>Corporate Governance</Link></ListItem>
            </UnorderedList>
          </Box>
          <Spacer />
          <Box>
           <b>Our Services</b> 
            <UnorderedList >
              <ListItem><Link _hover={{textDecoration:'none'}} href=''>Order Medicines</Link></ListItem>
              <ListItem><Link _hover={{textDecoration:'none'}} href=''>Book Lab tests</Link></ListItem>
              <ListItem><Link href='' _hover={{textDecoration:'none'}}>Consult a Doctor</Link></ListItem>
              <ListItem><Link href='' _hover={{textDecoration:'none'}}>Ayurveda Articles</Link></ListItem>
              <ListItem><Link href='' _hover={{textDecoration:'none'}}>Hindi Articles</Link></ListItem>
              <ListItem><Link href='' _hover={{textDecoration:'none'}}>Care Plan</Link></ListItem>
            </UnorderedList>
          </Box>
          <Spacer />
          <Box>
           <b>Connect</b> 
            <UnorderedList pr={{base:2,md:0}}>
              <ListItem><Box _hover={{textDecoration:'none'}} href='' >Social Links</Box>
              <Flex gap={1} direction={{base:'column',md:'row'}}>
              <Link href='https://twitter.com/1mgofficial' target='_blank'><AiFillTwitterCircle size={26} /></Link>
              <Link href='https://www.instagram.com/1mgofficialpage/' target='_blank'><AiFillInstagram size={26}/></Link>
              <Link href='https://www.facebook.com/1mgOfficial' target='_blank'><AiFillFacebook size={26}/></Link>
              <Link href='https://www.youtube.com/c/1mgofficial' target='_blank'><AiFillYoutube size={26}/></Link>
              <Link href='https://www.linkedin.com/company/1mg' target='_blank'><AiFillLinkedin size={26}/></Link>
              <Link href='https://medium.com/1mgofficial' target='_blank'><FaMedium size={26}/></Link>
              </Flex>
              </ListItem>
              <ListItem><Box _hover={{textDecoration:'none'}} href='' pr={{base:2,md:0}}>Want daily dose of health?</Box>
              <Button mr={{base:8,md:0}} bg='green.500' color='white' _hover={{bg:'green.300'}} p={1}><SignUp /></Button>
              </ListItem>
            </UnorderedList>
          </Box>
          <Spacer />
          <Box display={{base:'none',lg:'flex'}} flexDirection={{lg:'column'}}>
            <Box fontWeight='bold'>Download App</Box>
           <Flex direction='column'>
          <Button
      leftIcon={<Icon as={FaGooglePlay} boxSize={6} />}
      colorScheme="teal"
      variant="solid"
      size="lg"
      onClick={() => window.open("https://play.google.com/store/search?q=tata+1mg&c=apps", "_blank")}
    >
      Get it on Google Play
    </Button>  
    <Button
      leftIcon={<Icon as={FaApple} boxSize={6} />}
      colorScheme="black"
      variant="solid"
      size="lg"
      color="white" // Text color set to white
      bg="black"    // Background color set to black
      onClick={() => window.open("https://apps.apple.com/in/app/tata-1mg-healthcare-app/id554578419", "_blank")}
    >
      Download on the App Store
    </Button>
    </Flex>
          </Box>
        </Flex>
      </Box>
      <Box display={{base:'flex',lg:'none'}} flexDirection={{base:'column'}}>
            <Box fontWeight='bold'>Download App</Box>
           <Flex direction='column'>
          <Button
      leftIcon={<Icon as={FaGooglePlay} boxSize={6} />}
      colorScheme="teal"
      variant="solid"
      size="lg"
      onClick={() => window.open("https://play.google.com/store/search?q=tata+1mg&c=apps", "_blank")}
    >
      Get it on Google Play
    </Button>  
    <Button
      leftIcon={<Icon as={FaApple} boxSize={6} />}
      colorScheme="black"
      variant="solid"
      size="lg"
      color="white" // Text color set to white
      bg="black"    // Background color set to black
      onClick={() => window.open("https://apps.apple.com/in/app/tata-1mg-healthcare-app/id554578419", "_blank")}
    >
      Download on the App Store
    </Button>
    </Flex>
          </Box>
      <hr style={{width:'90%',margin:'auto'}}/>
      <Box bg='orange.50' >
        
      <Flex display={{base:'none'}} justifyContent="center">
      <Box width="30%" p={4}>
      <Grid
  h='200px'
  w='350px'
  templateRows='repeat(3, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={1}
>
  <GridItem rowSpan={3} colSpan={2} pt={10} px={2}>
    <Icon  boxSize={{base:'16',md:36}} color="green.500" ><FaShieldAlt /> </Icon>
  </GridItem>
  <GridItem colSpan={3} rowSpan={1}  fontSize='26px' fontWeight='bold' pt={5} >Reliable</GridItem>
  <GridItem colSpan={3} rowSpan={2} color='#767676' fontSize='12px'>
  All products displayed on Tata 1mg are procured from verified and licensed pharmacies. All labs listed on the platform are accredited
  </GridItem>
</Grid>
      </Box>
      <Box width="30%" p={4}>
      <Grid
  h='200px'
  w='350px'
  templateRows='repeat(3, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={1}
>
  <GridItem rowSpan={3} colSpan={2} pt={10} px={2}>
  <Icon boxSize={{base:'16',md:36}} color="green.500" ><FaLock /> </Icon>
  </GridItem>
  <GridItem colSpan={3} rowSpan={1}  fontSize='26px' fontWeight='bold' pt={5} >Secure</GridItem>
  <GridItem colSpan={3} rowSpan={2} color='#767676' fontSize='12px'>
  Tata 1mg uses Secure Sockets Layer (SSL) 128-bit encryption and is Payment Card Industry Data Security Standard (PCI DSS) compliant
  </GridItem>
</Grid>
      </Box>
      <Box width="30%" p={4}>
      <Grid
  h='200px'
  w='350px'
  templateRows='repeat(3, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={1}
>
  <GridItem rowSpan={3} colSpan={2} pt={10} px={2}>
  <Icon boxSize={{base:'16',md:36}} color="green.500" ><FaWallet /> </Icon>
  </GridItem>
  <GridItem colSpan={3} rowSpan={1}  fontSize='26px' fontWeight='bold' pt={5} >Affordable</GridItem>
  <GridItem colSpan={3} rowSpan={2} color='#767676' fontSize='12px'>
  Find affordable medicine substitutes, save up to 50% on health products, up to 80% off on lab tests and free doctor consultations.
  </GridItem>
</Grid>
      </Box>
    </Flex>
    </Box>
    <hr />
    <Accordion display={{md:'block'}} index={index} onClick={()=>{setIndex(index == [-1] ? 0: -1)}} py={5} bg='orange.50'>
  <AccordionItem >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' color='black' fontWeight='bold'>
          Know more about Tata 1mg
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} pt={8}>
    <b> Access medical and health information</b>
    <br />
Tata 1mg provides you with medical information which is curated, written and verified by experts, accurate and trustworthy. Our experts create high-quality content about medicines, diseases, lab investigations, Over-The-Counter (OTC) health products, Ayurvedic herbs/ingredients, and alternative remedies.
 <br /><br />

<b>Order medicines online</b><br />
Get free medicine home delivery in over 1800 cities across India. You can also order Ayurvedic, Homeopathic and other Over-The-Counter (OTC) health products. Your safety is our top priority. All products displayed on Tata 1mg are procured from verified and licensed pharmacies.
<br /><br />

<b>Book lab tests</b>
<br /> Book any lab tests and preventive health packages from certified labs and get tested from the comfort of your home. Enjoy free home sample collection, view reports online and consult a doctor online for free.
<br /><br />

<b>Consult a doctor online</b><br />
Got a health query? Consult doctors online from the comfort of your home for free. Chat privately with our registered medical specialists to connect directly with verified doctors. Your privacy is guaranteed.
<br /><br />
    </AccordionPanel>
  </AccordionItem>
  </Accordion>
  <hr />
  <Flex py={{md:10}} pl={{md:1}} pb={{base:24}}>
    <Box color='#536971'>© 2024 Tata 1mg. All rights reserved. All medicines are dispensed in compliance with the Drugs and Cosmetics Act, 1940 and Drugs and Cosmetics Rules, 1945.
       We do not process requests for Schedule X and habit forming drugs.</Box>
       <Spacer />
       <Box>
      <Box display='flex'><FaCcMastercard size={36}/><FaCcVisa size={36}/><FaCcAmex size={36}/></Box>
      <Box display='flex'><Img src='https://cdn.iconscout.com/icon/free/png-512/free-payment-rupay-card-pay-bank-transaction-51318.png?f=webp&w=256' width={12} />
      <Img src='https://cdn.iconscout.com/icon/free/png-256/free-netbanking-credit-debit-bank-transaction-card-32270.png' w={12}/>
      <Icon mt={3} boxSize={8}><FaRupeeSign/></Icon>
      </Box>
      </Box>
  
  </Flex>
    </div>
  )
}

export default Footer