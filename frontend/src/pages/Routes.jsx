import React from 'react'
import { Navigate, Route,Routes } from 'react-router-dom'
import Auth from './Auth/Index.jsx'
import Home from './Home/Index.jsx'
import { useSelector } from 'react-redux'
import ProtectedRouter from '../protectedRouter.jsx'
import Shop from './Home/Shop.jsx'
import Owner from './Owner/Owner.jsx'
import Cart from './Home/Cart.jsx'
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