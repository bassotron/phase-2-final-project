import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
	<div>
    <ul>
      
      <li><Link to="/">Home</Link></li>
      <li><Link to="/product">Products</Link></li>
      <li><Link to="/cart">Shopping Cart</Link></li>

      
    </ul>


  </div>
  )
}

export default NavBar