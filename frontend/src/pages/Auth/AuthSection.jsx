import React from 'react'
import Register from '../../components/Register'

function AuthSection() {
  return (
    <div className='grid grid-cols-2 min-h-[100vh] w-full bg-while'>
      <div className='px-[150px] relative'>
        <Register />
        <h1 className='text-zinc-600 font-bold text-3xl absolute top-5 left-[115px]'>Scatch</h1>
      </div>
    </div>
  )
}

export default AuthSection