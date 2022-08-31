import React from 'react'

function Filter({ products, setProduct }) {
	const filterProducts= event => {
		const value = event.target.value;
		const filteredProducts = products.filter(product => (`${product.genre}`.includes(value)));
		setProduct(filteredProducts)
  }
  return (
    <div>
      <select onChange={filterProducts}>
        <option key={products.id} value="" defaultValue>
          All
        </option>
        <option>jewelery</option>
        <option>men's clothing</option>
        <option>women's clothing</option>
        <option>shoes</option>
      </select>
    </div>
  )
}

export default Filter
