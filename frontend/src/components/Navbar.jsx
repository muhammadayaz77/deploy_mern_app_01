import React from 'react'
import { logout } from '../redux/authSlice'
import { useDispatch } from 'react-redux'

function Navbar() {
  let dispatch = useDispatch();
  let handleLogout = () => {
  dispatch(logout())
      localStorage.removeItem('token');
      window.toastify("Logout Successfully",'success')
  }
  return (
    <div className='flex justify-between mx-10 my-5'>
              <h1 className='text-zinc-600 font-bold text-3xl'>Scatch</h1>
      <button 
      onClick={handleLogout}
      className='btn btn-error'>Logout</button>
    </div>
  )
}

export default Navbar