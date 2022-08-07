import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	background-color: #f8fafc;
	position: relative;
`

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #ccc2c2;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
margin:auto;
opacity: 0.5;
`
const Wrapper = styled.div`
height: 100%;
`

const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
`;
const ImgContainer = styled.div`
height:100vh;
flex:1;
`;
const Image = styled.img`
height: 80%;
`
const InfoContainer = styled.div`
flex:1;
padding: 50px;
`;

const Title = styled.h1`
font-size:40px;
`
const Description = styled.p`
margin: 50px 0px;
font-size:17px;
letter-spacing: 2px;
`
const Button = styled.button`
color: white;
background-color: black;
font-weight: bold;
`

const Slider = () => {
  return (
	<Container>
		<Arrow direction="left">
			<ArrowLeftOutlined />
		</Arrow>
		<Wrapper>
			<Slide>
			<ImgContainer>
			<Image src=""></Image>
			</ImgContainer>
			<InfoContainer>
				<Title>Title</Title>
				<Description>Description of the item from API</Description>
				<Button>ADD TO CART</Button>
			</InfoContainer>
			</ Slide>
		</Wrapper>
		<Arrow direction="right">
			<ArrowRightOutlined />
		</Arrow>

	</Container>
  )
}

export default Slider