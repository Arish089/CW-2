import React from 'react'
import Products from './Main/Products'
import Sidebar from './Sidebar/Sidebar'
import { Box, Flex } from '@chakra-ui/react'

const MainProducts = () => {
  return (
    <Flex><Sidebar /><Products /></Flex>
  )
}

export default MainProducts