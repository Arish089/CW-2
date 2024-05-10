import React, { useEffect,useState } from 'react'
import { Box, useBreakpointValue} from '@chakra-ui/react'

import { Navbar_dropdown } from '../../Utilities/NavbarDropdown'
import Advertisement from '../../Utilities/Advertisement'
import FeaturedBrand from './components/FeaturedBrands'
import Trending from './components/Trending'
import PopularCategories from './components/PopularCategories'
import ProductDetails from './components/ProductDetails'
import DealsDay from './components/DealsDay'
import ShopByConcern from './components/ShopByConcern'
import TataMg from './components/TataMg'
import ComboDeals from './components/ComboDeals'
import Healthconcern from './components/HealthConcern'
import Flashdeals from './components/Flashdeals'
import Ayurved from './components/Ayurveda'
import SecondLastFooter from './components/SecondLastFooter'
import Navbar, { Navbar2 } from '../../components/Navbar'
import Searchbars from '../../components/Searchbars'
import Footer from '../../components/Footer'

const Medicines = () => { 
  return (
    <Box >
      <Navbar_dropdown />
      <Advertisement />
      <FeaturedBrand />
      <Trending />
      <PopularCategories />
      <ProductDetails />
      <DealsDay />
      <ShopByConcern />
      <TataMg />
      <ComboDeals />
      <Healthconcern />
      <Flashdeals />
      <Ayurved />
      <SecondLastFooter/>
    </Box>
  )
}

export default Medicines
//key = nBfQ-lLcJSSIWNMvYyH7PVh55Ky0o5mx0TE5KDX4680