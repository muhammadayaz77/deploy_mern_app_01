import React from 'react'
import Card from './Card'

function CardSection({loading,products}) {
 
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
        <Card item={item}></Card>
      ))
      }
    </div>
    </>
  )
}

export default CardSection