import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate, useParams} from 'react-router'
import { Link } from 'react-router'
function ProductDetails() {
    const BaseURL=import.meta.env.VITE_BACKEND_URL

    const [product, setproduct] = useState(null)
    const { id } = useParams()
    const navigate=useNavigate()

    async function getProduct() {
        const response = await axios.get(`${BaseURL}/products/${id}`)
        setproduct(response.data)
    }

   async  function deleteProduct(productId){

    const response = await axios.delete(`${BaseURL}/products/${productId}`)
    navigate('/products')

  }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <>
        <h1>Product Details</h1>
            {product ? <>
                <h2>title: {product.title}</h2>
                <p>description: {product.description}</p>
                <p>category: {product.category}</p>
                <p>quantity: {product.quantity}</p>
                <p>price: {product.price}</p>
                <button onClick={()=>(deleteProduct(product._id))}>Delete</button>
                <Link to={`/products/${product._id}/edit`}> Edit product</Link>
                
            </> : <p>...Loading</p>}


        </>

    )
}

export default ProductDetails