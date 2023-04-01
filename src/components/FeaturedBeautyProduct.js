import React from 'react'
import styled from 'styled-components'
import { formatPrice } from "../utils/helpers"

const FeaturedBeautyProduct = ({name, price, image, url}) => {
    return (
      <Wrapper> 
        <div className='f-container'>
          <div className='name'>{name}
            <br/>
              <div>{formatPrice(price)}</div>
          </div>
              <img src={image} />
              <a href={url}><span className="span">CLICK TO BUY</span></a>
        </div>
        </Wrapper>
  )
}

const Wrapper = styled.div`
position: relative;
width: 36vh;
height: 25vh;
margin: auto;
margin-bottom: 3vh;
.f-container{
text-align: center;
text-transform: uppercase;
line-height: 3vh;
position: absolute;
height: 100%;
width: 99.9%;
left: 0;
right:0;
margin: auto;
.name{
  margin-top: 1vh;
}
  img{
    position: absolute;
    max-height: 10vh;
    bottom: 5vh;
    margin: auto;
    left: 0;
    right: 0;
  }
  a{
    position: absolute;
    width: 100%;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    text-decoration: none;
    z-index: 2;
    border: 0.2vw solid black;
    span{
      position: absolute;
      color: black;
      border: .2vw solid black;
      transition: .5s;
      margin: auto;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
}

a:hover > span{
  transform: scale(1.1);
  background: black;
  color: white;
  border: 0.1vw solid white;
}
@media only screen and (min-width: 768px) {
  .f-container{

    a{
      border: 0.1vh solid black;
    }
    span{
      border: 0.1vh solid black;
    }
  }
}
`


export default FeaturedBeautyProduct
