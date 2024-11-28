import React from 'react'

function FilterSection() {
  return (
    <div>
      <p>Sorted by <select className='text-sm border-2 border-zinc-500 outline-none' name="" id="">
        <option value="">Popular</option>
        <option value="">Discount</option>
        <option value="">Male</option>
        <option value="">Female</option>
        /</select></p>

        <div className='mt-16 text-sm font-semibold space-y-3'>
          <p>New Products</p>
          <p>Discount Products</p>
          <p>All Products</p>
        </div>
        <div className='mt-16 text-sm font-semibold space-y-3'>
          <p>Filter by : </p>
          <p>Availability</p>
          <p>Discount</p>
        </div>
    
    </div>
  )
}

export default FilterSection