import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'


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
  border: none;
  margin-left: 25px;
  padding: 5px;
`
const Input = styled.input``

const Center = styled.div`
 margin-right: 25px;
 padding: 5px;
 text-align: center;
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const Logo = styled.h1`

  font-weight: bold;
`


const Right = styled.div`
justify-content: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          {' '}
          <Link to="/">Home</Link>
          <SearchContainer>
            <Input />
            <Search style={{color: "gray", fontSize: "14px"}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Flatiron Store</Logo>
          
        </Center>
        <Right>
        <Link to="/products">Products</Link>
          <Badge badgeContent={4} color="primary">
            {' '}
            <Link to="/cart">
              <ShoppingCartOutlined color="action" />
            </Link>
          </Badge>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default NavBar
