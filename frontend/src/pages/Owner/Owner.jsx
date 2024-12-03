import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import CreateOwner from './CreateOwner'
import AllProduct from './AllProduct';

function Owner() {
  let [nav,setNav] = useState('createProduct');
  return (
    <div className="min-h-screen bg-gray-100 py-2 px-8">
      <Navbar></Navbar>
      <div className="grid grid-cols-12">
    <div className="col-span-3 flex justify-start flex-col items-start pl-10 gap-3 mt-3">
        <p onClick={() => setNav('AllProduct')} className={`${nav == 'AllProduct' && 'font-bold'} select-none`}>All Products</p>
        <p onClick={() => setNav('createProduct')} className={`${nav == 'createProduct' && 'font-bold'} select-none`}>Create New Product</p>
    </div>
    <div className='col-span-9'>
      {
        nav == 'createProduct' ? <CreateOwner />
        :
        <AllProduct />
      }
    </div>
    </div>
      </div>
  )
}

export default Owner