import React from 'react'
import Products from './Main/Products'
import Sidebar from './Sidebar/Sidebar'
import { Box, Flex } from '@chakra-ui/react'

const MainProducts = () => {
  return (
    <Flex gap={4} mt={8}>
      <Box display={{base:'none',md:'block'}}><Sidebar/></Box>
      <Box ><Products /></Box>
      </Flex>
  )
}

export default MainProducts