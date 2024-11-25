import React from 'react'
import { Route,Routes } from 'react-router'
import Auth from './Auth'
import Home from './Home'

// import Home from './Home'
// import Home from './Home'

function Index() {
  return (
    <>
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/auth/*" element={<Auth />} />
    </Routes>
    </>
  )
}

export default Index