import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/authSlice';
let url = 'https://deploy-mern-app-01-ecommerce-backend.vercel.app/users/register'
function Register() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [data,setData] = useState({
    fullname : '',
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
  let handleRegister = e => {
    e.preventDefault();
    let {fullname,email,password} = data;
    if(!fullname || !email || !password){
      window.toastify('Fill all fields','error');
    }else{

      axios.post(url,data)
      .then(res => {
        console.log(res.data)
        localStorage.setItem("token",res.data)
        dispatch(login()); 
        window.toastify('User created sucessfully','success');
        navigate("/shop");
      })
      .catch(err => {
        window.toastify(err.response.data || 'Something went wrong!','error');
        
        console.log(err.response.data)
        
      })
    }

  }
  return (
    <div className='lg:bg-[#E0E6EC] lg:h-[100vh] lg:mt-0 mt-52 flex items-center'>
    <form 
    onSubmit={handleRegister}
    className='lg:mx-12'>
      <h1 className='text-2xl font-normal tracking-tight'>Welcome to <span className='text-blue-500 font-bold'>Scatch</span></h1>
      <h3 className='font-semibold my-2'>Create Your Account</h3>
      <input 
      onChange={handleChange}
      name='fullname'
      type="text" className='p-2 border-2 border-transparent lg:bg-white bg-[#E0E6EC] w-full outline-none mb-3' placeholder='Full Name' autoComplete='true'/>
      <input 
      onChange={handleChange}
      name='email'
      type="email" className='p-2 border-2 border-transparent lg:bg-white bg-[#E0E6EC] w-full outline-none mb-3' placeholder='Email' autoComplete='true' />
      <input 
      onChange={handleChange}
      name='password'
       autoComplete='true'
      type="password" className='p-2 border-2 border-transparent lg:bg-white bg-[#E0E6EC] w-full outline-none mb-3' placeholder='Password' />
      <button className='bg-blue-500 p-3 py-2 text-white font-medium tracking-wider text-sm rounded-3xl'>Create My Account</button>
    </form>
    </div>
  )
}

export default Register