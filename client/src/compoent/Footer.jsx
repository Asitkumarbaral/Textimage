import React from 'react'
import logo from '../assets/logo.jpg'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
export default function Footer() {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
         <img src={logo} alt="" width={100} />
         <p className=' pl-5 flex-1 boarder-1 border-gray-500 text-sm  max-sm:hidden'>Copy right by Asit</p>
          <div className='flex gap-2.5'>
             <img src={facebook} width={30} />
             <img src={instagram} width={30} />
             <img src={twitter}  width={30} />
             
          </div>

    </div>

  )
}
