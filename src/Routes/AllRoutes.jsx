import React from 'react'
import {Route, Routes} from "react-router-dom"
import Medicines from '../pages/Medicines/Medicines' 
import LabTests from '../pages/LabTests'
import ConsultDoctors from '../pages/ConsultDoctors'
import CancerCare from '../pages/CancerCare'
import Ayurveda from '../pages/Ayurveda'
import CarePlan from '../pages/CarePlan'
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'
import Offers from '../pages/Offers'
import Cart from '../pages/Cart'
import Help from '../pages/Help'
import MainProducts from '../pages/Products/MainProducts'
import PrivateRoute from './PrivateRoute'
import SingleProduct from '../pages/SingleProduct'


const AllRoutes = () => {
  return (
    <div>
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
      </Routes>
    </div>
  )
}

export default AllRoutes