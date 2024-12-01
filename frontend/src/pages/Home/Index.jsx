import React from 'react'
import Home from './Home'
import { Route,Routes,Navigate } from 'react-router'
import { useSelector } from 'react-redux'
import Shop from './Shop'

function Index() {
  let isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return (
    <>
    <Routes>
      {/* <Route path='/' element={<Home />} /> */}
      <Route path='/' element={<Shop />} />
      <Route path='/*' element={<>Page not found</>} />
    </Routes>
    </>
  )
}

export default Index