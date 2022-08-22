import React from 'react'

function Search({ products, setProduct}) {
  

  const searchProduct = event => {
	event.preventDefault();
    const value = event.target.value.toLowerCase();
    const searchedProduct = products.filter(product => (`${product.titles}`.toLowerCase().includes(value)));
    setProduct(searchedProduct)
  }

  return (
    <div>
        <input type="text" value={products.titles} onChange={searchProduct}  placeholder="Search" style={{width: '250px'}}/>
    </div>
  )
}

export default Search;
