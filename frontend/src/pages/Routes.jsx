import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Auth from './Auth'
import Home from './Home'
import ProtectedRouter from '../protectedRouter/protectedRouter.jsx'

function Index() {
  return (
    <>
    <Routes>
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/*" element={<ProtectedRouter Component={Home} />} />
    </Routes>
    </>
  )
}

export default Index