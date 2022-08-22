import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ products, updateProduct }) => {
  

  return (
    <div>
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
