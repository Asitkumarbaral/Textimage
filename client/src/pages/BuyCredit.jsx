import React, { useContext } from 'react';
import { plans } from '../assets/stepdata';
import { Appcontext } from '../context/Appcontext';
export default function BuyCredit() {
  const {user}=useContext(Appcontext);
  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10 px-4 bg-gray-100'>
      <button className='border border-gray-500 px-10 py-2 rounded-full mb-4 hover:bg-gray-300 transition-colors duration-300'>
        Plans
      </button>

      <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10'>
        Choose the Plan
      </h1>

      <div className='flex flex-wrap justify-center items-center gap-6 text-left'>
        {plans.map((item, index) => (
          <div
            key={index}
            className='bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-300 w-full sm:w-[300px] flex flex-col items-center'
          >
            <h2 className='mt-3 mb-1 font-semibold'>{item.name}</h2>
            <p className=''>{item.price}</p>
            <p className='text-gray-600 mb-1 font-medium'>{item.credit} credits</p>
            <p className='text-sm text-center text-gray-500'>{item.description}</p>
            <button className='bg-blue-500 text-white px-10 py-2 rounded-full mt-4 hover:bg-blue-700 transition-colors duration-300'>
              {user ?'Buy Now':"Get started"}
              </button>
          </div>
        ))}
      </div>
    </div>
  );
}
