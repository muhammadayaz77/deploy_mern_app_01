import React from 'react'

function Login() {
  return (
    <div className='lg:h-[100vh]  flex items-center'>
    <div className='lg:mr-12'>
      <h3 className='font-semibold text-xl tracking-tight my-2'>Login Your Account</h3>
      <input type="text" className='bg-[#E0E6EC] p-2 border-2 border-transparent w-full outline-none mb-3' placeholder='Email' />
      <input type="text" className='bg-[#E0E6EC] p-2 border-2 border-transparent w-full outline-none mb-3' placeholder='Password' />
      <button className='bg-blue-500 px-5 py-2 text-white font-medium tracking-wider text-sm rounded-3xl'>Login</button>
    </div>
    </div>
  )
}

export default Login