import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './COMPONENTS/HomePage';
import NavBar from './COMPONENTS/NavBar';
import ProductCard from './COMPONENTS/products/ProductCard';
import ProductList from './COMPONENTS/products/ProductList'
import './App.css';
import ShoppingCart from './COMPONENTS/ShoppingCart';
import Announcements from './COMPONENTS/Announcements';
import Slider from './COMPONENTS/Slider';


function App() {
  return (
    <Router>
      <Announcements />
      <NavBar />
      <Slider />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductCard />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/cart" element={<ShoppingCart />} />
        
          </Routes>
        </Router>
  );
}

export default App;
