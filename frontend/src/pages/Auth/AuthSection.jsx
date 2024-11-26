import React from 'react'
import Register from '../../components/Register'
import Login from '../../components/Login'
import Or from '../../components/Or'

function AuthSection() {
  return (
    <div className='grid grid-cols-12 min-h-[100vh] md:w-[80%] mx-auto'>
      <div className='sm:px-[50px] px-5 relative col-span-12 lg:col-span-5'>
        <Register />
        <h1 className='text-zinc-600 font-bold text-3xl absolute top-7 left-[10px]'>Scatch</h1>
      </div>
      <div className='col-span-12 lg:col-span-2 flex justify-center items-center md:my-0 my-10'>
      <Or></Or>
      </div>
      <div className='sm:px-[50px] px-5 col-span-12 lg:col-span-5'>
        <Login />
      </div>
    </div>
  )
}

export default AuthSection