import React, { useState } from 'react'
import axios from 'axios'
let url = 'http://localhost:3000/users/register'
function Register() {
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
    axios.post(url,data)
    .then(res => {
      console.log(res.data)
      localStorage.setItem("token",res.data)})
    .catch(err => console.log(err))

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
      type="text" className='p-2 border-2 border-transparent lg:bg-white bg-[#E0E6EC] w-full outline-none mb-3    ' placeholder='Full Name' />
      <input 
      onChange={handleChange}
      name='email'
      type="email" className='p-2 border-2 border-transparent lg:bg-white bg-[#E0E6EC] w-full outline-none mb-3' placeholder='Email' />
      <input 
      onChange={handleChange}
      name='password'
      type="password" className='p-2 border-2 border-transparent lg:bg-white bg-[#E0E6EC] w-full outline-none mb-3' placeholder='Password' />
      <button className='bg-blue-500 p-3 py-2 text-white font-medium tracking-wider text-sm rounded-3xl'>Create My Account</button>
    </form>
    </div>
  )
}

export default Register