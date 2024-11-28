// ProtectedRoute.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedRouter({ Component }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log("isAuthenticated : ",isAuthenticated);

  if(isAuthenticated == false) return < Navigate to="/auth" />

  return(
    
    <Component />
  )
}

export default ProtectedRouter;
