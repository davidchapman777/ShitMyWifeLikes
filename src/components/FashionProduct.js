import styled from "styled-components"
import { formatPrice } from "../utils/helpers"



const FashionProduct = ({ name, price, image, url }) => {
   return (
    <Wrapper>   
      <div className="product-background"></div>
      <div className="product">
        <div>{name}</div>
        <div>{formatPrice(price)}</div>
        <img src={image} />
        <a href={url}><span>CLICK TO BUY</span></a>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
border: 1vw solid black;
width: 40vw;
height: 36vh;
margin: 4vw;
position: relative;
background: white;

.product{
  margin: 1vw;
  font-size: 2.5vh;
  text-transform: uppercase;
  text-align: center;
  line-height: 3vh;
  padding: 1vw;
  

  img{
    bottom: 6vh;
    left: 10vw;
    position: absolute;
    max-width: 20vw;
    max-height: 20vh;
  }
  a{
    display: block;
    text-decoration: none;
    border: 1vw solid black;
    height: 35.6vh;
    width: 40vw;
    margin-left:-11vw;
    top:-.1vh;
    position: absolute;
    span{
      position: absolute;
      font-size: 2vh;
      border: .3vw solid black;
      color: black;
      bottom:1vh;
      left:3.3vw;
      box-shadow: 0 0 2vw black;
      padding: 1vw;
    }
    
  }
}
@media screen and (min-width:280px){
  height: 36vh;
  .product{
    font-size: 2vh;
    img{
      bottom:9vh;
    }
    a{
      left:10vw;
      padding: .5vw;
      border:.3vw solid black;
    }
  }
}
@media screen and (min-width:360px){
  height: 36vh;
  .product{
    font-size: 2vh;
    a{
      left:10vw;
      padding: .5vw;
      border:.3vw solid black;
      span{
        left:5vw;
      }
    }
  }
}

@media screen and (min-width:390px){
  
  .product{
    font-size: 2vh;
    a{
      padding: .5vw;
    }
  }
}
@media screen and (min-width:412px){
  border: .2vw solid black;
  .product{
    font-size: 2vh;
    a{
      left:11vw;
      width: 38.5vw;
      padding: .5vw;
      border: .3vw solid black;
      span{
        left:3vw;
      }
    }
  }
}

@media screen and (min-width:414px){
  width: 35vw;
  height: 30vh;
  margin: 10vw;
  left: -2vw;
  .product{
    font-size: 1.6vh;
    img{
      height:5vh ;
      width: 11vw;
      top: 18vh;
      left: 12vw;
    }
    a{
      left:11vw;
      width: 34vw;
      border: .1vw solid black;
      top:-.1vh;
      height: 29.5vh;
      span{
        left:9vw;
        font-size:1vh;
      }
    }
  }

}
@media screen and (min-width:540px){
  width: 30vw;
  height: 30vh;
  margin: 10vw;
  .product{
    font-size: 1.6vh;
    img{
      height:7vh ;
      width: 11vw;
      bottom:8vh;
    }
    a{
      left:11vw;
      width: 29vw;
      border: .1vw solid black;
      top:-.1vh;
      height: 29.5vh;
      span{
        left:8vw;
        width: 12vw;
        font-size:1.3vh;
      }
    }
  }

}

@media screen and (min-width:768px){
  width: 30vw;
  height: 30vh;
  margin: 10vw;
  border: .3vw solid black;
  .product{
    font-size: 2vh;
    img{
      height:7vh ;
      width: 11vw;
      bottom:8vh;
    }
    a{
      left:11vw;
      width: 29vw;
      top:-.1vh;
      height: 29.5vh;
      span{
        left:7vw;
        height: 1vh;
        font-size:1.4vh;
        padding-bottom:3vw;
        border: .3vw solid black;
      }
    }
  }

}
@media screen and (min-width:820px){
  width: 30vw;
  height: 30vh;
  margin: 10vw;
  border: .3vw solid black;
  .product{
    font-size: 2vh;
    img{
      height:7vh ;
      width: 11vw;
    }
    a{
      left:11vw;
      width: 29vw;
      top:-.1vh;
      height: 29.5vh;
      span{
        left:7vw;
        height: 1vh;
        font-size:1.4vh;
        padding-bottom:3vw;
        border: .3vw solid black;
      }
    }
  }

}
@media screen and (min-width:912px){
  width: 30vw;
  height: 30vh;
  margin: 10vw;
  border: .3vw solid black;
  .product{
    font-size: 2vh;
    img{
      height:7vh ;
      width: 11vw;
    }
    a{
      left:11vw;
      width: 29vw;
      top:-.1vh;
      height: 29.5vh;
      span{
        left:7vw;
        height: 1vh;
        font-size:1.4vh;
        padding-bottom:3vw;
        border: .3vw solid black;
      }
    }
  }

}
@media screen and (min-width:1024px){
  width: 20vw;
  height: 41vh;
  margin: vw;
  border: .3vw solid black;
  .product{
    font-size: 2vh;
    img{
      height:16vh;
      width: 10vw;
      left: 5vw;
    }
    a{
      left:11vw;
      width: 19vw;
      top:-.1vh;
      height: 39vh;
      span{
        bottom:0.1vh;
        left:2.8vw;
        font-size:2.4vh;
        padding-bottom:1.5vw;
        border: .3vw solid black;
      }
    }
  }

}
@media screen and (min-width:1100px){
  width: 20vw;
  height: 41vh;
  margin: vw;
  border: .3vw solid black;
  .product{
    font-size: 2vh;
    img{
      height:16vh;
      width: 10vw;
      left: 5vw;
    }
    a{
      left:11vw;
      width: 19vw;
      top:-.1vh;
      height: 39.8vh;
      span{
        bottom:0.1vh;
        left:2.8vw;
        font-size:1.8vh;
        padding-bottom:1.5vw;
        border: .3vw solid black;
      }
    }
  }

}
@media screen and (min-width:1280px){
  width: 20vw;
  height: 41vh;
  margin: vw;
  border: .3vw solid black;
  .product{
    font-size: 2vh;
    img{
      height:16vh;
      width: 10vw;
      left: 5vw;
    }
    a{
      left:11vw;
      width: 19vw;
      top:-.1vh;
      height: 39.2vh;
      span{
        bottom:0.1vh;
        left:2.8vw;
        font-size:2.4vh;
        padding-bottom:1.5vw;
        border: .3vw solid black;
      }
    }
  }

}




`

export default FashionProduct