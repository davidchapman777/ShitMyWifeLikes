import styled from "styled-components"
import { formatPrice } from "../utils/helpers"



const FashionProduct = ({ name, price, image, url }) => {
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
height: 19.5vh;
width: 11.3vw;
margin-top: 9vh;
margin-left: 11.5vw;
border: 2px solid black;
transition: .5s;
a{
  display: block;
  text-decoration: none;
  color:black;
  position: relative;
  top: -32vh;
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
    max-width: 20vw;
    max-height: 20vh;
    top: -10vh;
}


`
const Background = styled.div`
background: white;
height: 20vh;
width: 20vh;
position: relative;
top: 29vh;
left: 11.5vw;
box-shadow: 0 0 30px white;
filter: blur(2px);
transition: .5s;

`

export default FashionProduct