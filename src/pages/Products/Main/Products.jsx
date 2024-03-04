import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaRupeeSign } from 'react-icons/fa';
import { SimpleGrid, Image,Text,Card,CardBody,CardFooter,ButtonGroup,Button,Divider,Heading,Stack } from '@chakra-ui/react'
const Featured = [
    {
      "image_url": "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600090672/cropped/zulvh6fdr7bukuu18zhq.jpg",
      "name": "Accu-Chek Active Test Strip",
      "desc": "box of 50 Test Strips",
      "mrp": 975,
      "off": 12,
      "price": 858,
      "review": 4270,
      "star": 4.3,
      "id": 1
    },
    {
      "image_url": "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1638444070/nwhioxrxmwjkaxitryag.jpg",
      "name": "Tata 1mg BIS Approved FFP2 Masks",
      "desc": "box of 5 masks",
      "mrp": 400,
      "off": 45,
      "price": 220,
      "review": 47,
      "star": 4.5,
      "id": 2
    },
    {
      "image_url": "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1649963207/sbafi3nw8ndlrnvaj0qm.jpg",
      "name": "Tata 1mg Multivitamins & Multimineral Supplement",
      "desc": "bottle of 15 tablet",
      "mrp": 99,
      "off": 10,
      "price": 89,
      "review": 40,
      "star": 4.8,
      "id": 3
    },
    {
      "image_url": "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1638792149/kqupivjrbrq0ctcywfcs.jpg",
      "name": "Nicotex Sugar Free Mint Plus Chewing Gum",
      "desc": "box of 25 chewing gum",
      "mrp": 223,
      "off": 15,
      "price": 190,
      "review": 142,
      "star": 4.1,
      "id": 4
    },
    {
      "image_url": "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1637324194/gc3u9gfc331wtsipnljl.jpg",
      "name": "Tata 1mg Calcium + Vitamin and Am",
      "desc": "bottle of 50 Tablet",
      "mrp": 595,
      "off": 60,
      "price": 238,
      "review": 865,
      "star": 4.2,
      "id": 5
    },
    {
      "image_url": "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1640867751/ll16prunudl5wg9dkjyo.jpg",
      "name": "Mamaearth Onion Hair Oil",
      "desc": "bottle of 150ml oil",
      "mrp": 399,
      "off": 20,
      "price": 319,
      "review": 148,
      "star": 4,
      "id": 6
    },
    {
      "image_url": "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600202758/cropped/n4ucau55t2b6uh7vxcbz.png",
      "name": "MuscleBlaze Whey Gold Whey Powder Chocolate",
      "desc": "box of 4.4 lb Powder",
      "mrp": 8669,
      "off": 9,
      "price": 7881,
      "review": 427,
      "star": 3.9,
      "id": 7
    },
    {
      "image_url": "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600204507/cropped/jczeebil5hqmqtawsl13.jpg",
      "name": "Swadeshi Giloy Vati(Tablet) ",
      "desc": "box of 150 Tablet",
      "mrp": 234,
      "off": 3,
      "price": 210,
      "review": 256,
      "star": 4.1,
      "id": 8
    },
    {
      "image_url": "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1612767898/sebt72otrs6a2gnqfpcb.jpg",
      "name": "Protinex Health Tasty Chocolate Powder ",
      "desc": "Tin of 250gm Powder",
      "mrp": 380,
      "off": 4,
      "price": 362,
      "review": 460,
      "star": 4.3,
      "id": 9
    },
    {
      "image_url": "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1602161356/cxy73xcilxrlms7wycwi.jpg",
      "name": "Nicotex 14mg Patch",
      "desc": "Packet of 7 transderals Patc",
      "mrp": 699,
      "off": 15,
      "price": 594,
      "review": 70,
      "star": 3.9,
      "id": 10
    },
    {
      "image_url": "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600770640/cropped/yv3ybkbq0crpmervjudj.jpg",
      "name": "The Man Compney Argan Beard Oil",
      "desc": "bottle of 30ml oil",
      "mrp": 350,
      "off": 7,
      "price": 323,
      "review": 42,
      "star": 3.3,
      "id": 11
    },
    {
      "image_url": "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600261612/cropped/epdft2hdjosihgy3onxj.jpg",
      "name": "AS-IT-IS Whey Protien Concentrate",
      "desc": "packet of 1000gm powder",
      "mrp": 2249,
      "off": 18,
      "price": 1844,
      "review": 410,
      "star": 4,
      "id": 12
    },
    {
      "image_url": "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1602161412/kyaakhdi6eokjptpe24k.jpg",
      "name": "Nicotex 21mg Patch",
      "desc": "packet of 7 transderals",
      "mrp": 875,
      "off": 10,
      "price": 755,
      "review": 30,
      "star": 3.2,
      "id": 13
    },
    {
      "image_url": "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1624431535/jmgnubbowtvtsodfj2rk.jpg",
      "name": "Naselin Saline Spray",
      "desc": "bottle of 20ml nasal spary",
      "mrp": 46,
      "off": 3,
      "price": 44,
      "review": 9,
      "star": 4,
      "id": 14
    },
    {
      "image_url": "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1601297355/cczrit2fih8ydtv6zfam.jpg",
      "name": "Naselin Saline Spray",
      "desc": "bottle of 10ml nasal spary",
      "mrp": 75,
      "off": 4,
      "price": 71,
      "review": 10,
      "star": 4.3,
      "id": 15
    },
    {
      "image_url": "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600204470/cropped/p2sgsoxnec3ibe2yzwjf.jpg",
      "name": "Swadeshi Special Chyawanprash",
      "desc": "jar of 1kg Paste",
      "mrp": 330,
      "off": 10,
      "price": 297,
      "review": 970,
      "star": 3.8,
      "id": 16
    },
    {
      "image_url": "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1612853374/myadq5zcwsrzepyibkc5.jpg",
      "name": "Protinex Original Nutritional Drink",
      "desc": "Tin of 400gm Powder",
      "mrp": 615,
      "off": 9,
      "price": 560,
      "review": 670,
      "star": 4.4,
      "id": 17
    },
    {
      "image_url": "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1640866859/mrx1uoqqizxrg0cx7ghc.jpg",
      "name": "Mamaearth Onion Hair Mask",
      "desc": "jar of 200ml Mask",
      "mrp": 599,
      "off": 20,
      "price": 479,
      "review": 81,
      "star": 4.1,
      "id": 18
    },
    {
      "image_url": "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600772142/cropped/tqgisvv30tpxqrxcz5ld.jpg",
      "name": "The Man Company Charcoal Face Scrub",
      "desc": "tube of 100gm scrub",
      "mrp": 349,
      "off": 27,
      "price": 349,
      "review": 1466,
      "star": 4.2,
      "id": 19
    },
    {
      "image_url": "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600220567/cropped/ubgtztgs4xp2xakp9muz.jpg",
      "name": "Himalaya Gentle Baby Soap 75gm(Buy 3 Get 1 Free)",
      "desc": "box of 4 Soaps",
      "mrp": 165,
      "off": 9,
      "price": 149,
      "review": 157,
      "star": 4.4,
      "id": 20
    }
  ]
const Products = () => {


  return (
    <SimpleGrid columns={3} gap={12}>
       {Featured.map((elem)=>{
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
    <ButtonGroup spacing='2'>
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