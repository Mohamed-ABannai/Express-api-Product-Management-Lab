import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
function CreateProductPage() {

const BaseURL=import.meta.env.VITE_BACKEND_URL
const [formData,setFormData]=useState({
    title:'',
    description:'',
    category: '' , 
    quantity:0,
    price:0,

})

async function handleChange(event) {
    setFormData({...formData,[event.target.name]:event.target.value})
}
const navigate=useNavigate()

async function handleSubmit(event) {
    event.preventDefault()

    const response= await axios.post(`${BaseURL}/products`,formData)
    navigate('/products')
}

  return (
    <>
    <h1>Create Product</h1>
    
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
    <button>Create Product</button>

    </form>
    
    
    </>
  )
}

export default CreateProductPage