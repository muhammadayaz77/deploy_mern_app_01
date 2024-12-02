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
let url = 'http://localhost:3000/users/home';

function App() {
  let admin = useSelector(state => state.admin.isAdminExist);
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
    await axios.get('http://localhost:3000/auth/verify-admin',{
      headers : {
        Authorization : `Bearer ${token}`
      }
    })
    .then(res => {
      dispatch(isAdmin(res.data.isAdmin));
      console.log(admin);
    })
    .catch(err => {
      console.log(err)
      // dispatch(isAdmin(false));
    })
  }
  useEffect(() => {
    const fetchData = async () => {
      console.log('loading')
      // await getVerifyAdmin();  
      console.log('midele')

      await fetchedData() ;
      console.log('end')

    };
    fetchData();
  }, [dispatch]);
  
  return (
    <>
    <Routes></Routes>
    <Toast></Toast>
    </>
  )
}

export default App