import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router'
function AllProductPage() {

  const BaseURL= import.meta.env.VITE_BACKEND_URL
   
 const [products,setProducts]=useState([])

async function getProducts() {
    
    const response =await axios.get(`${BaseURL}/products`)
    setProducts(response.data)

}

useEffect(()=>{
getProducts()
},[])


  return (


    <>
    
    <h1>All Products page</h1>
    
    {products  ? (<>{products.map((oneProduct)=>
        
        <div key={oneProduct._id}>

            <h2>Name: {oneProduct.title}</h2>
            <p> <Link to={`/products/${oneProduct._id}`}>see product details</Link></p>
            
        </div>

        
        )}</>):<h2>...Loading</h2>}
    
    </>
  )
}

export default AllProductPage