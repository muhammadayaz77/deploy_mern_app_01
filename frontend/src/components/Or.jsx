import React from 'react'
import { useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

function Or() {
  useGSAP(() => {
    gsap.to('#or',{
      rotate : 360,
      repeat : -1,
      duration : 2,
      ease : 'linear'
    })
  })
  return (
    <div id='or' className='bg-blue-500 text-white font-bold w-10 h-10 flex justify-center items-center rounded-full'>
      <div>
      or
      </div>
    </div>
  )
}

export default Or