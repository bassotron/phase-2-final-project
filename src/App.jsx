import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './COMPONENTS/HomePage';
import NavBar from './COMPONENTS/NavBar';
import ProductList from './COMPONENTS/products/ProductList'
import ShoppingCart from './COMPONENTS/products/ShoppingCart';




function App() {

  const [products, setProducts] = useState([])
  
  

  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        
      })
  }, [])

const productsMapped = products.map((products) => 
console.log(products)
)


function handleAddProduct() {

  
  fetch('http://localhost:3000/items', {
    method: 'POST',
    body: JSON.stringify({
      // Add parameters here
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
     .then((response) => response.json())
     .then((data) => {
        setProducts(data);
        // Handle data
     })
     .catch((err) => {
        console.log(err.message);
     });
}




    
  return (
    <Router>
      
      <NavBar />
      
      <Routes>
        <Route path="/" element={<HomePage productForm={handleAddProduct} />} />} />
        <Route path="/products" element={<ProductList card={productsMapped} />} />
        <Route path="/cart" element={<ShoppingCart />} />
        
          </Routes>
        </Router>

  );
}

export default App;
