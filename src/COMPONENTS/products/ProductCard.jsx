import React from 'react'

const ProductCard = (props) => {
  return (
    <div>
      
      <h3>Title:{props.title}</h3>
      <h5>Price:{props.price}</h5>
      <p>
        <strong>Description:{props.description}</strong>
      </p>
      <button>Add to cart</button>
    </div>
  )
}

export default ProductCard
