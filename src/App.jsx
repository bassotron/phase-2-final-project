import HomePage from './COMPONENTS/HomePage';
import NavBar from './COMPONENTS/NavBar';
import ProductCard from './COMPONENTS/products/ProductCard';
import ProductList from './COMPONENTS/products/ProductList'
import './App.css';
import ShoppingCart from './COMPONENTS/ShoppingCart';


function App() {
  return (
    <div className="App">
      <HomePage />
      <NavBar />
      <ProductCard />
      <ProductList />
      <ShoppingCart />


    </div>
  );
}

export default App;
