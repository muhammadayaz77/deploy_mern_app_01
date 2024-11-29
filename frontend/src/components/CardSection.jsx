import React from 'react'
import Card from './Card'

function CardSection({products}) {
  return (
    <>
    <div className='card grid grid-cols-12 sm:mr-[20px] lg:mr-[200px] md:mr-[50px] gap-5'>
      {products.map(item => (
        <Card item={item}></Card>
      ))}
    </div>
    </>
  )
}

export default CardSection