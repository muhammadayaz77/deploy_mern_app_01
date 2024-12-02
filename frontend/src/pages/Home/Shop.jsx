import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar';
import FilterSection from '../../components/FilterSection';
import CardSection from '../../components/CardSection';
import axios from 'axios';

let url = 'http://localhost:3000/users/shop';

function Shop() {
  // let navigate = useNavigate();
  // let dispatch = useDispatch();
  
  let [products,setProducts] = useState([]);
  let [loading,setLoading] = useState(false);
  let fetchedData = async() => {
    setLoading(true);
    let token = localStorage.getItem('token');
    if(token){
      await axios.get(url,{
        headers : {
          "Authorization" : `Bearer ${token}`,
        }
      })
      .then(res => {
      setProducts(res.data.product);
      console.log(products)
      })
      .catch(err => {
      console.log(err) 
      // navigate('/auth');
      })
    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchedData();
    },[])
  
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-12">
        <div className='sm:col-span-2 ml-10 hidden sm:block'>
        <FilterSection></FilterSection>
        </div>
        <div className='sm:col-span-10 col-span-12 mx-10 sm:ml-10'>
        <CardSection loading={loading} products={products}></CardSection>
        </div>
      </div>
    </div>
  )
}

export default Shop