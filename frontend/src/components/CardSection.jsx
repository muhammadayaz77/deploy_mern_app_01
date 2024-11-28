import React from 'react'
import Card from './Card'

function CardSection() {
  return (
    <>
    <div className='card grid grid-cols-12 sm:mr-[20px] lg:mr-[200px] md:mr-[50px] gap-5'>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
    </>
  )
}

export default CardSection