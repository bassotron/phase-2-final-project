import React from 'react'

const ProductCard = (props) => {
  return (
    <div>
      
      <h3>Title:{props.title} {props.id}</h3>
      <h5>Price:{props.price} {props.id}</h5>
      <p>
        <strong>Description:{props.description} {props.id}</strong>
      </p>
      <button>Add to cart</button>
    </div>
  )
}

export default ProductCard
