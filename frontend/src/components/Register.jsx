import React from 'react'

function Register() {
  return (
    <div className='lg:bg-[#E0E6EC] lg:h-[100vh] lg:mt-0 mt-52 flex items-center'>
    <div className='lg:mx-12'>
      <h1 className='text-2xl font-normal tracking-tight'>Welcome to <span className='text-blue-500 font-bold'>Scatch</span></h1>
      <h3 className='font-semibold my-2'>Create Your Account</h3>
      <input type="text" className='p-2 border-2 border-transparent lg:bg-white bg-[#E0E6EC] w-full outline-none mb-3    ' placeholder='Full Name' />
      <input type="text" className='p-2 border-2 border-transparent lg:bg-white bg-[#E0E6EC] w-full outline-none mb-3' placeholder='Email' />
      <input type="text" className='p-2 border-2 border-transparent lg:bg-white bg-[#E0E6EC] w-full outline-none mb-3' placeholder='Password' />
      <button className='bg-blue-500 p-3 py-2 text-white font-medium tracking-wider text-sm rounded-3xl'>Create My Account</button>
    </div>
    </div>
  )
}

export default Register