import React from 'react'
import { Link } from 'react-router'
function Navbar() {
  return (
    <>
    
    <Link to={'/'}>Homepage</Link>
    <Link to={'/products'}>All Product</Link>
    <Link to={'/products/create'}>create Product</Link>
    
    </>
  )
}

export default Navbar