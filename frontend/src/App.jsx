import React, { useEffect } from 'react'
import './App.css'
import Routes from './pages/Routes'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { login, logout } from './redux/authSlice';
import './config/Global'

import 'react-toastify/dist/ReactToastify.css'
import Toast from './components/Toast';
let url = 'http://localhost:3000/users/home';

function App() {
  let isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  let dispatch = useDispatch();
  let fetchedData = async() => {
    let token = localStorage.getItem('token');
    await axios.get(url,{
      headers : {
        Authorization : `Bearer ${token}`
      }
    })
    .then(res => {
      console.log(res); 
      dispatch(login())

    })
    .catch(err =>  {
      console.log(err);
      dispatch(logout())
    })
  }
  useEffect(()=>{
    fetchedData();
  },[]);
  
  return (
    <>
    <Routes></Routes>
    <Toast></Toast>
    </>
  )
}

export default App