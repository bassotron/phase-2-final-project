import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './COMPONENTS/HomePage'
import NavBar from './COMPONENTS/NavBar'
import ProductList from './COMPONENTS/products/ProductList'
import ShoppingCart from './COMPONENTS/products/ShoppingCart'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
      })
  }, [])

  const onAddProduct = (newProduct) => {
    setProducts([...products, newProduct])
  }
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage onAddProduct={onAddProduct} />} />
        <Route
          path="/products"
          element={
            <ProductList products={products} setProduct={setProducts}  />
          }
        />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  )
}

export default App
