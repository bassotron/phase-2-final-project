import React from 'react'
import ProductCard from './ProductCard'
import Filter from './Filter'
import Search from './Search'


const ProductList = ({ products, setProduct }) => {
  return (
    <div>
      
      <Search products={products} setProduct={setProduct} />
      <Filter products={products} updateproduct={setProduct} />
      {products.map((products) => (
        <ProductCard
          key={products.id}
          title={products.titles}
          price={products.price}
          description={products.description}
          genre={products.genre}
        />
      ))}
    </div>
  )
}

export default ProductList
