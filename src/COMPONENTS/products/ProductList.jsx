import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ card }) => {
  
  
    




  return (
	<div>
    
    
    <div><ProductCard key={card.id} title={card.titles} price={card.price} description={card.description} image={card.image} /></div>



  </div>
  )
}

export default ProductList