import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Search } from '@material-ui/icons'

const Container = styled.div`
  height: 60px;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  
`


const Left = styled.div`
display: flex;
align-items: center;
`

const SearchContainer = styled.div`
  border: 1px solid black;
  margin-left: 25px;
  padding: 5px;

`

const Center = styled.div``
const Right = styled.div``

const NavBar = () => {
  return (
    <Container>
      <Wrapper> 
        <Left>
          {' '}
          <Link to="/">Home</Link>
          <SearchContainer>
            input
            <Search/>
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/product">Products</Link>
        </Center>
        <Right>
          {' '}
          <Link to="/cart">Shopping Cart</Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default NavBar
