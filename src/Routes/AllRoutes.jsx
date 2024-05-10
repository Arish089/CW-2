import React from 'react'
import {Route, Routes, useLocation} from "react-router-dom"
import Medicines from '../pages/Medicines/Medicines' 
import LabTests from '../pages/LabTests'
import ConsultDoctors from '../pages/ConsultDoctors'
import CancerCare from '../pages/CancerCare'
import Ayurveda from '../pages/Ayurveda'
import CarePlan from '../pages/CarePlan'
import Offers from '../pages/Offers'
import Cart from '../pages/Cart'
import Help from '../pages/Help'
import MainProducts from '../pages/Products/MainProducts'
import PrivateRoute from './PrivateRoute'
import SingleProduct from '../pages/SingleProduct'
import Payment from '../pages/Payment'
import Success from '../pages/Success'
import Failed from '../pages/Failed'
import SearchResults from '../pages/SearchResults'
import Navbar, { Navbar2 } from '../components/Navbar'
import Footer from '../components/Footer'
import Searchbars from '../components/Searchbars'
import { useBreakpointValue } from '@chakra-ui/react'


const AllRoutes = () => {
  const showTopNavbar = useBreakpointValue({base: false, md:true})
  const location = useLocation();
  const excludeNavbarFooter =
    location.pathname !== '/failed' &&
    location.pathname !== '/success';
  return (
    <div>
      {showTopNavbar && excludeNavbarFooter&& <Navbar/>}
      {excludeNavbarFooter && location.pathname !=='/payment' && <Searchbars />}
      <Routes>
        <Route path='/' element={<Medicines/>} />
        <Route path='/labtests' element={<LabTests/>} />
        <Route path='/doctors' element={<ConsultDoctors/>} />
        <Route path='/cancerCare' element={<CancerCare />} />
        <Route path='/ayurveda' element={<Ayurveda />} />
        <Route path='/carePlan' element={<CarePlan/>} />
        <Route path='/offers' element={<Offers />} />

        <Route path='/cart' element={
        <PrivateRoute>
        <Cart />
        </PrivateRoute>} />

        <Route path='/search/:searchProd' element={
        <PrivateRoute>
        <SearchResults />
        </PrivateRoute>} />

        <Route path='/help' element={<Help />} />
        <Route path='/products' element={
        <PrivateRoute>
        <MainProducts />
        </PrivateRoute>
      }/>
      <Route path='/products/:id' element={
      <PrivateRoute>
        <SingleProduct />
      </PrivateRoute>}/>

      <Route path='/payment' element={
      <PrivateRoute>
        <Payment />
      </PrivateRoute>}/>

      <Route path='/failed' element={
      <PrivateRoute>
        <Failed />
      </PrivateRoute>}/>

      <Route path='/success' element={
      <PrivateRoute>
        <Success />
      </PrivateRoute>}/>

      </Routes>
      {excludeNavbarFooter && <Footer />}
      {!showTopNavbar && excludeNavbarFooter &&<Navbar2 />}
    </div>
  )
}

export default AllRoutes