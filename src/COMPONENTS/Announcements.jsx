
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
	height: 40px;
	background-color: yellow;
	color: black;
	display:flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	font-weight: bold;

`
const Announcements = () => {
  return (
	<Container>
		Save 10% with code REACT at checkout!
	</Container>
  )
}

export default Announcements