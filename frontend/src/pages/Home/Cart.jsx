import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import CartCards from '../../components/CartCards'
import CartHistory  from '../../components/CartHistory';
import axios from 'axios';

function Cart() {
  
  let [cart,setCart] = useState([]);
  let [loading,setLoading] = useState(false);
  let fetchedData = async () => {
    setLoading(true);
    let token = localStorage.getItem('token');
    console.log(token)
    await axios.get('https://deploy-mern-app-01-ecommerce-backend.vercel.app/cart/carts',{
      headers : {
        "Authorization" : ` Bearer ${token}`
      }
    })
    .then((res)=> {
      setCart(res.data.cart.cart)
      console.log(cart)
    })
    .catch((err)=> console.log("err : ",err))
    setLoading(false)
  }
  useEffect(()=>{
    fetchedData();
  },[])
  return (
  <div className='mx-10'>
    <Navbar></Navbar>
    <div className="grid grid-cols-12  pt-10">
      <div className='sm:col-span-4 ml-10 hidden sm:block'>
      {
        loading ?
        <div className='w-full ml-52 mt-10 text-5xl' >
<span className="loading loading-dots loading-lg"></span>
        </div>
        :
        cart.map(item => (
          <CartCards item={item}></CartCards>
        ))
      }
      </div>
      <div className='sm:col-span-8 col-span-12 mx-10 sm:ml-10'>
      <CartHistory cart={cart}></CartHistory>
      </div>
    </div>
  </div>
  )
}

export default Cart