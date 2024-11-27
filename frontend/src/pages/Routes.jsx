import React from 'react'
import { Navigate, Route,Routes } from 'react-router-dom'
import Auth from './Auth'
import Home from './Home'
import { useSelector } from 'react-redux'
// import ProtectedRouter from '../protectedRouter/protectedRouter.jsx'

function Index() {
  let isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return (
    <>
    <Routes>
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/*" element={<Home />} />
    </Routes>
    </>
  )
}

export default Index