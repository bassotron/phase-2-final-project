import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'




const Container = styled.div`
position: flex center;
margin-top: 50px;
padding-top: 50px;
  
`





const HomePage = ({onAddProduct}) => {

 
 
    const [title, setTitle]  = useState("")
    const [price, setPrice]  = useState("")
    const [category, setCategory]  = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage]  = useState("")
    
    


    function handleAddProduct(e) {
     
     
      e.preventDefault()


     
      fetch('http://localhost:3000/items', {
        method: 'POST',
        body: JSON.stringify({
          titles: title,
          price: price,
          description: description,
          category: category,
          image: image,
    
    
     }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
         .then((response) => response.json())
         .then((product) => {
          onAddProduct(product);
            
         })
         .catch((err) => {
            console.log(err.message);
         });
         setTitle("")
         setPrice("")
         setDescription("")
         setCategory("")
         setImage("")
        }
  
    
  return (
   <Container>
  <form onSubmit={handleAddProduct}>
  <label>Add Product</label><br></br>
  <label>Product Name:</label><br></br>
  <input type="text"
          
          value={title}
          id="title"
          name="title"
          onChange={(e) => setTitle(e.target.value)} /><br></br>
  <label>Price:</label><br></br>
  <input type="text" 
          
          value={price}
          onChange={(e) => setPrice(e.target.value)}></input><br></br>
  <label>Description:</label><br></br>
  <input type="text"
          
          value={description}
          id="description"
          name="description"
          onChange={(e) => setDescription(e.target.value)} /><br></br>
  <label>Category</label><br></br>
  <input type="text"
        
          value={category}
          id="Category"
          name="Category"
          onChange={(e) => setCategory(e.target.value)} /><br></br>
  <label>Image URL</label><br></br>
  <input type="text"
          
          value={image}
          id="image"
          name="image"
          onChange={(e) => setImage(e.target.value)} /><br></br>
          
  <button type="submit">Submit</button>
</form>
</Container>
    
  )
}

export default HomePage
