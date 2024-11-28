import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar';
import FilterSection from '../../components/FilterSection';
import CardSection from '../../components/CardSection';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login,logout } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';

function Shop() {
  // let navigate = useNavigate();
  // let dispatch = useDispatch();
  // let fetchedData = async() => {
  //   let token = localStorage.getItem('token');
  //   console.log(token)
  //   if(token){
  //     await axios.get(url,{
  //       headers : {
  //         "Authorization" : `Bearer ${token}`,
  //       }
  //     })
  //     .then(res => {
  //     dispatch(login());
  //     console.log(res)
  //     })
  //     .catch(err => {
  //     console.log(err) 
  //     navigate('/auth');
  //     dispatch(logout());
  //     })
  //   }
  //   else
  //   dispatch(logout());
  // }
  // useEffect(()=>{
  //   fetchedData();
  //   },[])
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-12">
        <div className='sm:col-span-2 ml-10 hidden sm:block'>
        <FilterSection></FilterSection>
        </div>
        <div className='sm:col-span-10 col-span-12 mx-10 sm:ml-10'>
        <CardSection></CardSection>
        </div>
      </div>
    </div>
  )
}

export default Shop