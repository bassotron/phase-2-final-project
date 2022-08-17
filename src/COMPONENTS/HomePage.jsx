import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
position: flex center;
margin-top: 50px;
padding-top: 50px;
  
`


const HomePage = ({handleAddProduct}) => {
  
  function handleSubmit(event) {
    event.preventDefault()
    handleAddProduct(event)
  }
  
  return (
    <Container>
  <form onSubmit={handleSubmit}>
  <label>Add Product</label><br></br>
  <label for="titles">Product Name:</label><br></br>
  <input type="text" id="title" name="title"></input><br></br>
  <label for="price">Price:</label><br></br>
  <input type="text" id="price" name="price"></input><br></br>
  <label for="description">Description:</label><br></br>
  <input type="text" id="description" name="description"></input><br></br>
  <label for="price">Image URL:</label><br></br>
  <input type="text" id="image" name="image"></input><br></br>
  <button>Submit</button>
</form>
    </Container> 
  )
}

export default HomePage
