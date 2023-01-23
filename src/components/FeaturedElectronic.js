import React from 'react'
import styled from 'styled-components'
import { formatPrice } from "../utils/helpers"

const FeaturedElectronic = ({name, price, image, url}) => {
     return (
      <Wrapper> 
        <div className='f-container'>
              <div>{name}</div>
              <div>{formatPrice(price)}</div>
              <img src={image} />
              <a href={url}><span className="span">CLICK TO BUY</span></a>
        </div>
        </Wrapper>
  )
}

const Wrapper = styled.div`
border: 1vw solid red;
position: relative;
margin-top: 90vh;
margin-left: 15vw;
width: 68vw;
height: 25vh;
.f-container{
text-align: center;
text-transform: uppercase;
line-height: 3vh;
  img{
    position: absolute;
    max-height: 18vh;
    max-width: 18vw;
    bottom: 5vh;
    margin-left: -9vw;
  }
  a{
    z-index: 2;
    position: absolute;
    border: .1vw solid black;
    margin-top: -9.55vh;
    height:26vh;
    width: 70vw;
    margin-left: -35.5vw;
    text-decoration: none;
    
    span{
      background: white;
      box-shadow: 0 0 10px black;
      position: absolute;
      color: black;
      border: 1vw solid black;
      margin-top: 21vh;
      margin-left: -15vw;
      transition: .5s;
    }
  }
}
a:hover > span{
  transform: scale(1.3);
}

`


export default FeaturedElectronic
