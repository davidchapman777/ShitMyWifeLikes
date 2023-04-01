import styled from "styled-components"
import { formatPrice } from "../utils/helpers"



const FashionProduct = ({ name, price, image, url }) => {
   return (
    <Wrapper>   
      <div className="product">
         <div className="name">{name}
        <div>{formatPrice(price)}</div>
         </div>
        <img src={image} />
        <a href={url}><span>CLICK TO BUY</span></a>
      </div>
      <div className="bcg"></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 24vh;
height: 36vh;
position: relative;
z-index: 0;
margin-bottom: 3vh;
.product{
  position: absolute;
  height: 100%;
  width: 100%;
  transition: .5s;
  z-index: 0;
  .name{
    text-transform: uppercase;
    text-align: center;
    line-height: 3vh;
    padding: 1vh;
  }
  img{
    bottom: 6vh;    
    max-height: 15vh;
    min-height: 15vh;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
  }
  a{
    border: .15vh solid black;
    display: block;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    text-decoration: none;
    position: absolute;
    span{
      font-size: 2vh;
      border: .15vh solid black;
      color: black;
      position: absolute;
      padding: .5vh;
      margin: auto;
      left: 0;
      right: 0;
      bottom: 1vh;
      text-align: center;
      width: 15vh;
    }
  }
}
.bcg{
  
}
.product:hover{
  transform: scale(1.1);
  a{
    span{
      border: .1vw solid white;
      color: white;
      background: black;

    }
  }
}
.product:hover + .bcg{
  transform: scale(1.1);
}







`
export default FashionProduct