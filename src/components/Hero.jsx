import React from 'react'

function Hero() {
  return (
    <div className='w-[85%] flex justify-between mx-auto  my-20'>
      <div className='w-auto'>
        <h1 className='font-bold text-3xl'>Designer Blogs</h1>
       <div>
        <input className='border border-gray-300 mt-14 rounded-full outline-none pl-2 h-10 w-[300px]' type="text" name="" id="" placeholder='Enter your blogs...'/>
        <button className='bg-black text-white rounded-full w-[100px] h-10 -ml-12'>Subscribe</button>
       </div>
      </div>
      <div className='w-[400px] h-[100px] text-justify'>
        <p className='text-[20px] font-bold text-slate-500'>
          New product features, the latest in technology solutions and updates.
        </p>
      </div>
    </div>
  )
}

export default Hero