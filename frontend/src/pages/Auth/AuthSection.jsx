import React from 'react'
import Register from '../../components/Register'
import Login from '../../components/Login'
import Or from '../../components/Or'

function AuthSection() {
  return (
    <div className='grid grid-cols-12 min-h-[100vh] w-[80%] mx-auto'>
      <div className='px-[50px] relative col-span-5'>
        <Register />
        <h1 className='text-zinc-600 font-bold text-3xl absolute top-7 left-[10px]'>Scatch</h1>
      </div>
      <div className='col-span-2 flex justify-center items-center'>
      <Or></Or>
      </div>
      <div className='px-[50px] col-span-5'>
        <Login />
      </div>
    </div>
  )
}

export default AuthSection