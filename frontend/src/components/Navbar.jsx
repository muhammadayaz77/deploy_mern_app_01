import React from 'react'
import { logout } from '../redux/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Navbar() {
  let dispatch = useDispatch();
  let {isAdminExist} = useSelector(state => state.admin);
  console.log(isAdminExist)
  let handleLogout = () => {
  dispatch(logout())
      localStorage.removeItem('token');
      window.toastify("Logout Successfully",'success')
  }
  return (
    <div className='flex items-center justify-between mx-10 my-5'>
              <h1 className='text-zinc-600 font-bold text-3xl'>Scatch</h1>

      <div className='flex gap-5'>
        <Link to='/shop'>Shop</Link>
        {
          !isAdminExist && <Link to='/owner'>Owner</Link>
        }
        <Link to='/cart'>Cart</Link>
      </div>
      <button 
      onClick={handleLogout}
      className='btn btn-error'>Logout</button>
    </div>
  )
}

export default Navbar