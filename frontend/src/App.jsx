import React, { useEffect } from 'react'
import './App.css'
import Routes from './pages/Routes'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from './redux/authSlice';
let url = 'http://localhost:3000/users/home';

function App() {
  // let user = useSelector(state => state.auth.isAuthenticated)
  let dispatch = useDispatch();
  useEffect(()=>{
    let token = localStorage.getItem('token');
    if(token){

      axios.get(url,{
        headers : {
          Authorization : `Bearer ${token}`,
        }
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
    }
    else
    console.log('no token bro')
    },[])
  return (
    <>
    <Routes></Routes>
    </>
  )
}

export default App