import React from 'react'
import { logout } from '../redux/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { logoutAdmin } from '../redux/adminSlice';

function Navbar() {
  let navigate = useNavigate(); 
  let dispatch = useDispatch();
  let {isAdminExist} = useSelector(store => store.admin);
  console.log(isAdminExist);
  let handleLogout = () => {
  dispatch(logout())
  dispatch(logoutAdmin());
    navigate('/auth');
      localStorage.removeItem('token');
      window.toastify("Logout Successfully",'success');
  }
  
  // console.log(isAdminExist)
  return (
    <div className='flex items-center justify-between mx-10 my-5'>
              <h1 className='text-zinc-600 font-bold text-3xl'>Scatch</h1>

      <div className='flex gap-5'>
        {
          isAdminExist ? <Link to='/owner'>Owner</Link> : 
          <>
          <Link to='/shop'>Shop</Link>
          <Link to='/cart'>Cart</Link>
          </>
        }
      </div>
      <button 
      onClick={handleLogout}
      className='btn btn-error'>Logout</button>
    </div>
  )
}

export default Navbar