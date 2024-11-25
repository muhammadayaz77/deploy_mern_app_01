import React from 'react'
import Home from './Home'
import About from './About'
import { Route,Routes } from 'react-router'

function Index() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/*' element={<>Page not found</>} />
    </Routes>
    </>
  )
}

export default Index