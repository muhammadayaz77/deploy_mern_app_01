import React from 'react'
import { Navigate, Route,Routes } from 'react-router-dom'
import Auth from './Auth'
import Home from './Home'
import { useSelector } from 'react-redux'
import ProtectedRouter from '../protectedRouter/ProtectedRouter'
import Shop from './Home/Shop'
import Owner from './Owner/Owner'
import Cart from './Home/Cart'
// import ProtectedRouter from '../protectedRouter/protectedRouter.jsx'

function Index() {
  let isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return (
    <>
    <Routes>
      <Route path="/" element={isAuthenticated ? <Auth /> : <Navigate to='/shop' />} />
      <Route path="/auth/*" element={!isAuthenticated ?<Auth /> : <Navigate to='/shop' />} />
      <Route path="/shop/*" element={<ProtectedRouter Component={Shop} />} />
      <Route path="/owner" element={<Owner />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    </>
  )
}

export default Index