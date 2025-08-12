import React from 'react'
import star from '../assets/star.png'
import { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'
import { useNavigate } from 'react-router-dom'
export default function Generatebtn() {
   const{user,setShowLogin} = useContext(Appcontext);
 const navigate= useNavigate();
  const onClickhandler=()=>{
    if(user){
    navigate('/result')
    }
    else{
      setShowLogin(true);
    }

  }
  return (
    <div className='flex flex-col justify-center items-center my-20' >
      <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold mb-5 whitespace-nowrap text-center'>
        See the magic 
      </h1>
      
      <button onClick={onClickhandler} className='flex items-center gap-2 p-3  bg-black text-white px-4 sm:px-6 lg:px-1.5 rounded-full hover:scale-105 transition-all duration-700'>
        Generate image
        <img src={star}  className='h-6'/>
      </button>
    </div>
  )
}
