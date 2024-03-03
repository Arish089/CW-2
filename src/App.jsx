import { useBreakpointValue } from '@chakra-ui/react'
import './App.css'
import AllRoutes from './Routes/AllRoutes'
import Navbar, { Navbar2 } from './components/Navbar'
import Searchbars from './components/Searchbars'
import Footer from './components/Footer'

function App() {
const showTopNavbar = useBreakpointValue({base: false, md:true})  

  return (
    <>
    {showTopNavbar && <Navbar />}
    <Searchbars />
    <AllRoutes />
    <Footer />
    {!showTopNavbar && <Navbar2/>}
    
    </>
  )
}

export default App
