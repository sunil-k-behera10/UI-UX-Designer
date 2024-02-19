import React from 'react'
import { MdArrowOutward } from "react-icons/md";

function Imagecontainer() {
  return (
    <div className='mt-8 w-[90%]'>
      <div className='relative mb-10 hover:transform hover:scale-105 duration-300 hover:cursor-pointer'>
          <img src="https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='w-full h-[200px] '/>

          <div className='absolute -mt-16 p-5 font-bold flex justify-between text-white backdrop-blur-lg w-full '>
            <div>
              <h3>Anup Kumar</h3>
              <span>
              20 Oct 2022
              </span>
            </div>
            <h3>
              Design
            </h3>
          </div>
      </div>
      <div>
        <h1 className='underline text-2xl font-bold'>UX review Presentation</h1>
        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vel dolores accusantium doloribus rerum possimus iste. Animi molestias quo ipsam earum ratione omnis, provident ea nisi, sequi a corporis ad.</p>
        <button className='flex gap-2 font-bold'>Read post <span><MdArrowOutward className='pt-1 font-bold text-xl'/></span></button>
      </div>
    </div>
  )
}

export default Imagecontainer