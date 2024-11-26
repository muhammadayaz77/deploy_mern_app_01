import React from 'react'
import { Route,Routes } from 'react-router'
import AuthSection from './AuthSection'


function Index() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<AuthSection />} />
      <Route path='/*' element={<>Page not found</>} />
    </Routes>
    </>
  )
}

export default Index