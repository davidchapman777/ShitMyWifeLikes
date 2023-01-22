import React from 'react'
import styled from 'styled-components'
import { formatPrice } from "../utils/helpers"

const FeaturedBeautyProduct = ({name, price, image, url}) => {
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
border: 1vw solid black;
position: relative;
margin-top: 100vh;
margin-left: 20vw;
width: 58vw;
height: 25vh;
box-shadow: 0 0 10px black;
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
    position: absolute;
    margin-top: -9.55vh;
    height:26vh;
    width: 60vw;
    margin-left: -30vw;
    text-decoration: none;
    
    span{
      background: white;
      box-shadow: 0 0 10px black;
      position: absolute;
      color: black;
      border: 1vw solid black;
      margin-top: 21vh;
      margin-left: -15vw;
    }
  }
}
@media screen and (min-width: 280px){
  border: .7vw solid black;
  .f-container{
    font-size: 2vh;
    img{
      margin-left: -8vw;
    }
    a{
      margin-top:-6.5vh;
      margin-left: -29vw;
      width: 58vw;

      span{
        margin-left: -17vw;
        padding: .1vw;
        margin-top: 18vh;
        border: 1vw solid black;
      }
    }
  }
}
@media screen and (min-width: 412px){
  border: .7vw solid black;
  .f-container{
    font-size: 1.7vh;
    img{
      margin-left: -9.5vw;
    }
    a{
      margin-top:-6vh;
      margin-left: -29vw;
      width: 58vw;

      span{
        margin-left: -13vw;
        padding: .1vw;
        margin-top: 18vh;
        border: .5vw solid black;
      }
    }
  }
}
@media screen and (min-width: 540px){
  border: .7vw solid black;
  .f-container{
    font-size: 1.7vh;
    img{
      margin-left: -9.5vw;
    }
    a{
      margin-top:-6.5vh;
      margin-left: -29vw;
      width: 58vw;

      span{
        margin-left: -9vw;
        padding: .1vw;
        margin-top: 21.5vh;
        border: .5vw solid black;
      }
    }
  }
}
@media screen and (min-width: 768px){
  border: .7vw solid black;
  .f-container{
    font-size: 1.7vh;
    img{
      margin-left: -9.5vw;
    }
    a{
      margin-top:-6.5vh;
      margin-left: -29vw;
      width: 58vw;

      span{
        margin-left: -9vw;
        padding: .1vw;
        margin-top: 21.5vh;
        border: .5vw solid black;
      }
    }
  }
}
@media screen and (min-width: 820px){
  border: .7vw solid black;
  .f-container{
    font-size: 1.7vh;
    a{
      margin-top:-7vh;
      span{
        margin-left: -9vw;
        padding: .1vw;
        margin-top: 22vh;
        border: .5vw solid black;
      }
    }
  }
}
@media screen and (min-width: 912px){
  border: .7vw solid black;
  .f-container{
    font-size: 2vh;
    img{
      max-height: 15vh;
    max-width: 15vw;
      margin-left: -7vw;
    }
    a{
      margin-top:-7vh;
      span{
        margin-left: -10vw;
        padding: .1vw;
        margin-top: 19vh;
        border: .5vw solid black;
      }
    }
  }
}
@media screen and (min-width: 1024px){
  border: .3vw solid black;
  width: 15vw;
  height: 40vh;
  margin-top: 106vh;
  .f-container{
    font-size: 3vh;
    img{
      max-height: 19vh;
      max-width: 14vw;
      margin-left: -5.5vw;
      bottom: 6vh;
    }
    a{
      width: 15.5vw;
      height: 40vh;
      margin-top:-12vh;
      margin-left: -8vw;
      span{
        margin-left: -6vw;
        padding: .1vw;
        bottom:1vh;
        border: .3vw solid black;
      }
    }
  }
}

`


export default FeaturedBeautyProduct
