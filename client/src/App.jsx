import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './compoent/Navbar'
import Footer from './compoent/Footer'
import Login from './compoent/Login'
import { Appcontext } from './context/Appcontext'
import { useContext } from 'react'
 import { ToastContainer } from 'react-toastify';
export default function App() {
  const {showLogin} = useContext(Appcontext);
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b
     from-teal-50 to-orange-50' >
      <ToastContainer
        position="buttom-right"

        />
      <Navbar/>

      {/* Conditional rendering of Login component */}
      {/* If showLogin is true, render the Login component */}
      {/* Otherwise, render the main content */}
      {showLogin &&<Login/>}
     <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/result' element={<Result/>}/>
       <Route path='/buy' element={<BuyCredit/>}/>
      
     </Routes>
     <Footer/>
    </div>
  )
}
