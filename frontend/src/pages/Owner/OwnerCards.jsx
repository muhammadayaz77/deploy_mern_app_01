import React from 'react'
import Cards from './Cards'

function OwnerCard({loading,products,setProducts}) {
 
 
  return (
    <>
    <div className='card grid grid-cols-12 sm:mr-[20px] lg:mr-[200px] md:mr-[50px] gap-5'>
      {
        loading ?
        <div className='w-full ml-52 mt-10 text-5xl' >
<span className="loading loading-dots loading-lg"></span>
        </div>
      :
      products.map(item => (
        <>
        <Cards item={item} data={products} setData={setProducts} ></Cards>
        </>
      ))
      }
    </div>
    </>
  )
}

export default OwnerCard