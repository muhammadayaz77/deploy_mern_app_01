import React from 'react'

function Card() {
  return (
    <div className='relative md:col-span-4 col-span-6 lg:col-span-3 border-2 border-black'>
        <div className='h-[250px] bg-fuchsia-400 -z-10'>
           
        </div>
        <div className='bg-red-700 h-[80px] absolute bottom-0 left-0 w-full flex justify-between items-center px-5'>
          <div className='text-sm font-semibold'>
          <p>Name Here</p>
          <p>$ 100</p>
          </div>
          <button className='w-9 h-9 flex justify-center items-center bg-white  rounded-full '>+</button>
        </div>
      </div>
  )
}

export default Card