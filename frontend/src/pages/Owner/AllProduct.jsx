import React, { useEffect, useState } from 'react'
import axios from 'axios';
import OwnerCard from './OwnerCards';

let url = 'http://localhost:3000/users/shop';

function AllProduct() {
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
      <p className='text-red-600 my-5'>Delete All</p>
        <OwnerCard loading={loading} products={products} setProducts={setProducts} fetchedData={fetchedData}></OwnerCard>
    </div>
  )
}

export default AllProduct