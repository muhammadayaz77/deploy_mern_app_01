import React from 'react'
import Navbar from '../../components/Navbar'

function Cart() {
  return (
  <div className='mx-10'>
    <Navbar></Navbar>
    <div className="grid grid-cols-12  pt-10">
      <div className='sm:col-span-4 ml-10 hidden sm:block'>
      sec 1
      </div>
      <div className='sm:col-span-8 col-span-12 mx-10 sm:ml-10'>
      sec 2
      </div>
    </div>
  </div>
  )
}

export default Cart