import styled from "styled-components"
import { formatPrice } from "../utils/helpers"

const BeautyProduct = ({ name, price, image, url }) => {
  return (
      <main>
        <Background></Background>
        <Wrapper>    
              <h1>{name}</h1>
              <h1>{formatPrice(price)}</h1>
              <img src={image} />
              <a href={url}><span className="span">CLICK TO BUY</span></a>
        </Wrapper>
      </main>
  )
}

const Wrapper = styled.div`
position: relative;
text-align: center;
font-size:70%;
text-transform: uppercase;
padding: 1vw;
height: 25vh;
width: 15vw;
margin-top: 9vh;
margin-left: 11.5vw;
border: 2px solid black;
transition: .5s;
word-spacing: .6vw;
a{
  position: absolute;
  display: block;
  text-decoration: none;
  color:black;
  top: 8vh;
  left: 3vw;
  padding-top: 21.5vh;
  width: 11vw;
  
}
.span{
  display: none;
  border: 3px solid black;
  padding:.1vw;
  background: white;
  box-shadow: 0 0 50px white;
  position: relative;
  left:.15vw;
}
:hover{
  transform: scale(1.2);
  .span{
    display: block;
  }
}

img{
  position: relative;
    max-width: 60%;
    max-height: 40%;
    top: 10%;
}
`
const Background = styled.div`
background: white;
height: 29vh;
width: 30vh;
position: relative;
top: 37.9vh;
left: 11.5vw;
box-shadow: 0 0 30px white;
filter: blur(2px);
transition: .5s;
`

export default BeautyProduct