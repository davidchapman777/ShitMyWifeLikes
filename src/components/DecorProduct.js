import styled from "styled-components"
import { formatPrice } from "../utils/helpers"



const DecorProduct = ({ name, price, image, url }) => {
   return (
    <Wrapper>   
      <div className="product">
        <div>{name}</div>
        <div>{formatPrice(price)}</div>
        <img src={image} />
        <a href={url}><span>CLICK TO BUY</span></a>
      </div>
      <div className="bcg"></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 40vw;
height: 36vh;
margin: 4vw;
position: relative;
z-index: 0;
.product{
  position: absolute;
  height: 38vh;
  font-size: 2.5vh;
  text-transform: uppercase;
  text-align: center;
  line-height: 3vh;
  padding: 1vw;
  transition: .5s;
  z-index: 1;
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
      background: white;
    }
  }
}
.bcg{
  
}
.product:hover{
  transform: scale(1.2);
  a{
    span{
      border: .3vw solid white;
      color: white;
      background: black;

    }
  }
}
.product:hover + .bcg{
  transform: scale(1.2);
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
      border:.8vw solid black;
      span{
        border: .8vw solid black;
      }
    }
  }
}

@media screen and (min-width:320px){
  height: 36vh;
  .product{
    font-size: 2.4vh;
    img{
      top: 17vh;
    }
    a{
      left:10vw;
      padding: .5vw;
      border:.8vw solid black;
      span{
        left:7vw;
        border: .8vw solid black;
      }
    }
  }
  .bcg{
  height: 36vh;
  width: 42vw;
  margin-left: -.2vw;
}
}
@media screen and (min-width:360px){
  height: 36vh;
  .product{
    font-size: 2vh;
    a{
      left:10vw;
      padding: .5vw;
      border:.6vw solid black;
      span{
        left:5vw;
        border: .6vw solid black;
      }
    }
  }
  .bcg{
  height: 36vh;
  width: 42vw;
  margin-left: -.2vw;
}
}
@media screen and (min-width:375px){
  height: 36vh;
  .product{
    font-size: 2vh;
    a{
      left:10vw;
      padding: .5vw;
      border:.6vw solid black;
      span{
        left:7vw;
        border: .6vw solid black;
      }
    }
  }
  .bcg{
  height: 36vh;
  width: 40vw;
  margin-left: -.2vw;
}
}

@media screen and (min-width:390px){
  height: 36vh;
  .product{
    font-size: 2vh;
    a{
      left:10vw;
      padding: .5vw;
      border:.6vw solid black;
      span{
        left:5.5vw;
        border: .6vw solid black;
        font-size: 1.7vh;
      }
    }
  }
  .bcg{
  height: 36vh;
  width: 40vw;
  margin-left: -.2vw;
}
}
@media screen and (min-width:412px){
  height: 36vh;
  .product{
    font-size: 2vh;
    a{
      left:10vw;
      padding: .5vw;
      border:.8vw solid black;
      span{
        left:5.5vw;
        border: .8vw solid black;
        font-size: 1.7vh;
      }
    }
  }
  .bcg{
  height: 36vh;
  width: 40vw;
  margin-left: -.2vw;
}
}

@media screen and (min-width:414px){
  height: 36vh;
  .product{
    font-size: 2vh;
    a{
      left:10vw;
      padding: .5vw;
      border:.6vw solid black;
      span{
        left:6vw;
        border: .6vw solid black;
        font-size: 1.7vh;
      }
    }
  }
  .bcg{
  height: 36vh;
  width: 40vw;
  margin-left: -.2vw;
}
}


@media screen and (min-width:540px){
  height: 36vh;
  .product{
    font-size: 2.2vh;
    img{
    bottom: 10vh;
    left: 10vw;
    position: absolute;
    max-width: 20vw;
    max-height: 20vh;
  }
    a{
      left:10vw;
      padding: .5vw;
      border:.6vw solid black;
      span{
        left:9vw;
        border: .6vw solid black;
        font-size: 1.5vh;
        width: 20vw;
      }
    }
  }
  .bcg{
  height: 31vh;
  width: 30vw;
  margin-left: -.2vw;
}
}
@media screen and (min-width:768px){
  height: 36vh;
  .product{
    font-size: 2vh;
    img{
    bottom: 16vh;
    left: 9vw;
    position: absolute;
    max-width: 30vw;
    max-height: 30vh;
  }
    a{
      left:10vw;
      padding: .5vw;
      border:.6vw solid black;
      span{
        left:5.5vw;
        border: .6vw solid black;
        font-size: 1.5vh;
        width: 15vw;
      }
    }
  }
  .bcg{
  height: 31vh;
  width: 30vw;
  margin-left: -.2vw;
}
}
@media screen and (min-width:820px){
  height: 36vh;
  .product{
    font-size: 2vh;
    img{
    bottom: 16vh;
    left: 9vw;
    position: absolute;
    max-width: 30vw;
    max-height: 30vh;
  }
    a{
      left:10vw;
      padding: .5vw;
      border:.6vw solid black;
      span{
        left:5.5vw;
        border: .6vw solid black;
        font-size: 1.5vh;
        width: 15vw;
      }
    }
  }
  .bcg{
  height: 31vh;
  width: 30vw;
  margin-left: -.2vw;
}
}
@media screen and (min-width:912px){
  height: 36vh;
  .product{
    font-size: 2vh;
    img{
    bottom: 16vh;
    left: 9vw;
    position: absolute;
    max-width: 30vw;
    max-height: 30vh;
  }
    a{
      left:10vw;
      padding: .5vw;
      border:.6vw solid black;
      span{
        left:5.5vw;
        border: .6vw solid black;
        font-size: 1.4vh;
        width: 15vw;
      }
    }
  }
  .bcg{
  height: 31vh;
  width: 30vw;
  margin-left: -.2vw;
}
}
@media screen and (min-width:1024px){
  width: 20vw;
  height: 41vh;
  margin: vw;
  .product{
    font-size: 2.2vh;
    img{
      height:16vh;
      width: 10vw;
      left: 5.5vw;
      top: 14vh;
    }
    a{
      left:11vw;
      width: 19vw;
      top:-.1vh;
      height: 39vh;
      border: .3vw solid black;
      span{
        bottom:1vh;
        left:4vw;
        font-size:2.4vh;
        width: 10vw;
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
  .product{
    font-size: 2.2vh;
    img{
      height:16vh;
      width: 10vw;
      left: 5.5vw;
      top: 14vh;
    }
    a{
      left:11vw;
      width: 19vw;
      top:-.1vh;
      height: 39vh;
      border: .3vw solid black;
      span{
        bottom:1vh;
        height: .5vh;
        left:4vw;
        font-size:2vh;
        width: 10vw;
        padding-bottom:2vw;
        border: .3vw solid black;
      }
    }
  }

}
@media screen and (min-width:1640px){
  width: 20vw;
  height: 41vh;
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

export default DecorProduct