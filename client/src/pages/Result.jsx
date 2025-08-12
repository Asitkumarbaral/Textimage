import React, { useContext } from 'react';
import imgage from '../assets/5img.webp';
import { Appcontext } from '../context/Appcontext';

export default function Result() {
   const [img, setImg] = React.useState(imgage);
   const [imgloading, setimgLoading] = React.useState(false);
   const [loading,setloading]=React.useState(false);
   const[input,setInput]=React.useState('');
   const {generateImage}=useContext(Appcontext);
   const onSubmithandler=async(e)=>{
        e.preventDefault();
        setloading(true);
        if(input){
          const image=await generateImage(input);
          setimgLoading(true);
          setImg(image);
        }
        setloading(false);

   }
   
  return (
   
    <form onSubmit={onSubmithandler} className='flex flex-col items-center justify-center min-h-screen gap-6 px-4'>
      <div className='flex flex-col items-center'>
        <div className='relative'>
          <img src={img} alt="Generated result" className='max-w-sm rounded shadow-md' />
          <span className='absolute bottom-0 left-0 h-1 bg-blue-500 w-full transition-all duration-100'/>
        </div>
       <p className={loading ? '' : 'hidden'}>Loading...</p>

      </div>
 { !imgloading && 
      <div className='flex items-center justify-between w-full max-w-xl px-2 py-1 bg-zinc-800 rounded-full'>
        <input
         onChange={(e) => setInput(e.target.value)}
         value={input}
          type="text"
          placeholder='Enter prompt'
          className='flex-1 px-4 py-2 bg-transparent text-white outline-none placeholder-gray-400'
        />
        <button
          type='submit'
          className='text-white bg-zinc-900 px-6 sm:px-10 py-2 rounded-full hover:bg-zinc-700 transition duration-200'
        >
          Generate
        </button>
      </div>
   }

    {imgloading &&  <div className='flex flex-wrap items-center justify-center text-white gap-6 px-4 text-sm mt-10 p-0.5 rounded-full'>
        <p className='text-white' onClick={()=>setimgLoading(false)}>Generate a new image</p>
        <a href={img} download className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'>Download</a>
      </div>
}
    </form>
  );
}
