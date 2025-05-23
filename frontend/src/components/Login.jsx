import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { isAdmin } from '../redux/adminSlice';
let url = 'https://deploy-mern-app-01-ecommerce-backend.vercel.app/users/login'
function Login() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
    let [data,setData] = useState({
    email : '',
    password : ''
  })
  let handleChange = (e) => {
    let {name,value} = e.target; 
    setData({
      ...data,
      [name] : value
    })
  }
  let handleLogin = async(e) => {
    e.preventDefault();
    if(!data.email || !data.password){
      window.toastify("Fill all fields")
    }
    else{

      await axios.post(url,data)
      .then(res => {
        navigate('/shop');
        dispatch(login());
        if(data.email == 'admin@gmail.com' && data.password == 'admin123'){
          dispatch(isAdmin(true));
      }
      localStorage.setItem("token",res.data.token);
      window.toastify('Login Successfully!','success')
      })
      .catch(err =>{ 
        console.log("Error : ",err.response.data)
        window.toastify(err.response.data || 'Something went wrong','error')
      })
    } 
  }
  return (
    <div className='lg:h-[100vh]  flex items-center'>
    <form
    onSubmit={handleLogin}
    className='lg:mr-12'>
      <h3 className='font-semibold text-xl tracking-tight my-2'>Login Your Account</h3>
      <input 
      onChange={handleChange}
      name='email'
      type="email" className='bg-[#E0E6EC] p-2 border-2 border-transparent w-full outline-none mb-3' placeholder='Email' />
      <input
      onChange={handleChange}
      name='password'
      type="password" className='bg-[#E0E6EC] p-2 border-2 border-transparent w-full outline-none mb-3' placeholder='Password' />
      <button className='bg-blue-500 px-5 py-2 text-white font-medium tracking-wider text-sm rounded-3xl'>Login</button>
    </form>
    </div>
  )
}

export default Login