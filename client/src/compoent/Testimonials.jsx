import React from 'react'
import { testimonials } from '../assets/stepdata'

export default function Testimonials() {
  return (
    <div className='flex flex-col items-center justify-center my-24 py-12 px-4'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-5 whitespace-nowrap text-center'>
        Customer Testimonials
      </h1>

      <p className='text-gray-500 text-center mb-12'>
        Turn your imagination into visuals
      </p>

      <div className='flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 w-full'>
        {
          testimonials.map((item, index) => (
            <div
              key={index}
              className='bg-white/20 rounded-lg shadow-md border w-full sm:w-96 cursor-pointer hover:scale-[1.02] transition-all'
            >
              <div className='flex flex-col items-center p-4'>
                <img src={item.avatar} className='rounded-full w-14' alt="" />
                <h2 className='text-xl font-semibold mt-2'>{item.name}</h2>
                <p className='text-gray-500 mb-2 text-sm'>{item.title}</p>
                <p className='text-center text-sm text-gray-700'>{item.feedback}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
