import React from 'react'
import Register from './Register'
import Login from './Login'
import { Route,Routes } from 'react-router'


function Index() {
  return (
    <>
    <Routes>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/*' element={<>Page not found</>} />
    </Routes>
    </>
  )
}

export default Index