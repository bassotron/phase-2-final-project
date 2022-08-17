import React from 'react'

const ProductCard = ({title, image, price, description}) => {
  return (
	<div>
<div>
  <h1>{title}</h1>
  <img src={image} alt={title}></img>
  <h3>{price}</h3>
  <p>{description}</p>
  <button>Add to cart</button>
  </div>



  </div>
  )
}

export default ProductCard