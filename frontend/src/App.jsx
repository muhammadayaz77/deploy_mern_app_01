import React, { useEffect } from 'react'
import './App.css'
import Routes from './pages/Routes'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { login, logout } from './redux/authSlice';
import './config/Global'

import 'react-toastify/dist/ReactToastify.css'
import Toast from './components/Toast';
import { isAdmin } from './redux/adminSlice';
let url = 'https://deploy-mern-app-01-ecommerce-backend.vercel.app/users/home';

function App() {
  let {isAdminExist} = useSelector(state => state.admin);
  let dispatch = useDispatch();
  let fetchedData = async() => {
    let token = localStorage.getItem('token');
    await axios.get(url,{
      headers : {
        Authorization : `Bearer ${token}`
      }
    })
    .then(res => {
      // console.log(res); 
      dispatch(login())

    })
    .catch(err =>  {
      console.log(err);
      dispatch(logout())
    })
  }
  let getVerifyAdmin = async() => {
    let token = localStorage.getItem('token');
    await axios.get('https://deploy-mern-app-01-ecommerce-backend.vercel.app/auth/verify-admin',{
      headers : {
        Authorization : `Bearer ${token}`
      }
    })
    .then(res => {
      dispatch(isAdmin(res.data.isadmin));
    })
    .catch(err => {
      console.log(err)
      // dispatch(isAdmin(false));
    })
  }
  useEffect(() => {
    const fetchData = async () => {
      
      await fetchedData() ;
      await getVerifyAdmin();  

    };
    fetchData();
  }, [isAdminExist]);
  
  return (
    <>
    <Routes></Routes>
    <Toast></Toast>
    </>
  )
}

export default App