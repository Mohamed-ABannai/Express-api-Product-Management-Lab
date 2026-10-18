import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'
function updateProductPage() {

  const BaseURL=import.meta.env.VITE_BACKEND_URL
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price:0,
    quantity:0
  })
  const navigate = useNavigate()
  const { id } = useParams()

 async function getProduct(){

    const response = await axios.get(`${BaseURL}/products/${id}`)
    setFormData(response.data)
  }

  useEffect(()=>{
    getProduct()
  },[])

  async function handleSubmit(event) {
    event.preventDefault()
    const response= await axios.put(`${BaseURL}/products/${id}`,formData)
    navigate(`/products/${id}`)
  }

  
  function handleChange(event) {

    setFormData({ ...formData, [event.target.name]: event.target.value })

  }

  return (
    <>
    <h3>update product</h3>
    
    <form onSubmit={handleSubmit}>
    <label htmlFor="title">title: </label>
    <input type="text"
    name='title'
    id='title'
    onChange={handleChange}
    value={formData.title}
    />

    <label htmlFor="description">description: </label>
    <input type="text"
    name='description'
    id='description'
    onChange={handleChange}
    value={formData.description}
    />

    <label htmlFor="category">category: </label>
    <select name="category" id="category" onChange={handleChange} value={formData.category}>
        <option value="electronics">electronics</option>
        <option value="food">food</option>
        <option value="clothing">clothing</option>
        <option value="furniture">furniture</option>
        <option value="other">other</option>
    </select>

    <label htmlFor="quantity">quantity: </label>
    <input type="number"
    name='quantity'
    id='quantity'
    onChange={handleChange}
    value={formData.quantity}
    />

    <label htmlFor="price">price: </label>
    <input type="text"
    name='price'
    id='price'
    onChange={handleChange}
    value={formData.price}
    />
    <br />
    <button>update Product</button>

    </form>
    
    </>
  )
}

export default updateProductPage