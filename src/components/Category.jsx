import React from 'react'

function Category() {
  return (
    <div className='w-[85%] mx-auto'>
      <ul className='flex justify-around mt-3 text-lg font-bold gap-10 border-b text-gray-500'>
        <li className='hover:text-black hover:border-b-2 border-black pb-3 hover:cursor-pointer'>View all</li>
        <li className='hover:text-black hover:border-b-2 border-black pb-2 hover:cursor-pointer'>Design</li>
        <li className='hover:text-black hover:border-b-2 border-black pb-2 hover:cursor-pointer'>Customer</li>
        <li className='hover:text-black hover:border-b-2 border-black pb-2 hover:cursor-pointer'>Support</li>
        <li className='hover:text-black hover:border-b-2 border-black pb-2 hover:cursor-pointer'>Product</li>
        <li className='hover:text-black hover:border-b-2 border-black pb-2 hover:cursor-pointer'>Leadership</li>
        <li className='hover:text-black hover:border-b-2 border-black pb-2 hover:cursor-pointer'>Management</li>
        <li className='hover:text-black hover:border-b-2 border-black pb-2 hover:cursor-pointer'>Interviews</li>
        <li className='hover:text-black hover:border-b-2 border-black pb-2 hover:cursor-pointer'>Promotion</li>
      </ul>
    </div>
  )
}

export default Category