import FeaturedBeautyProducts from "./FeaturedBeautyProducts"
import FeaturedDecorProducts from "./FeaturedDecorProducts"
import FeaturedFashionProducts from "./FeaturedFashionProducts"
import styled from "styled-components"

const FeaturedItems = () => {
  return (
    <Wrapper>
      <div className="border"></div>
      <div className="background3"></div>
      <div className="f">My wife's favorites</div>
      <div className="ff-container">
      <FeaturedBeautyProducts/>
      <FeaturedDecorProducts />
      <FeaturedFashionProducts />
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
margin-bottom: 10vh;
.background3{
  background: white;
  opacity: .6;
  filter: blur(10px);
  position: absolute;
  height: 96vh;
  margin-top: -6vh;
  width: 70.2vw;
  margin-left: 15vw;
  z-index: 0;
}
.f{
  background: white;
  text-transform: uppercase;
  margin-left: 27vw;
  margin-top: -7vh;
  position: absolute;
  border: 1vw solid black;
  box-shadow: 0 0 10px black;
}
.border{
  position: absolute;
  border: 1vw solid black;
  height: 100vh;
  width: 68vw;
  left: 15vw;
  margin-top: -10vh;
  z-index: 1;
}
.ff-container{
  display: block;
}
@media screen and (min-width: 280px){
  .background3{
height: 100vh;
  margin-top: -10vh;
  }
  .f{
    font-size: 4.5vw;
    margin-left: 25vw;
    border: 1vw solid black;
  }
  .border{
    border: 1vw solid black;
  }
}
@media screen and (min-width: 360px){
  .background3{
height: 100vh;
  margin-top: -10vh;
  }
  .f{
    border: .7vw solid black;
  }
  .border{
    border: .7vw solid black;
  }
}
@media screen and (min-width: 375px){
  .background3{

  }
  .f{
    border: .7vw solid black;
  }
  .border{
    border: .7vw solid black;
  }
}
@media screen and (min-width: 390px){
  .background3{
height: 100vh;
  margin-top: -10vh;
  }
  .f{
    border: .7vw solid black;
  }
  .border{
    border: .7vw solid black;
  }
}
@media screen and (min-width: 412px){
  .background3{

  }
  .f{
    border: .7vw solid black;
  }
  .border{
    border: .7vw solid black;
  }
}
@media screen and (min-width: 414px){
  .background3{
  margin-top: -10vh;
    height: 100vh;


  }
  .f{
    border: .7vw solid black;
  }
  .border{
    border: .7vw solid black;
  }
}
@media screen and (min-width: 540px){
  .background3{
    margin-top: -10vh;
    height: 100vh;


  }
  .f{
    border: .5vw solid black;
    font-size: 2vh;
    margin-left: 35vw;
  }
  .border{
    border: .5vw solid black;
  }
}
@media screen and (min-width: 768px){
  .background3{
    margin-top: -10vh;
    height: 100vh;


  }
  .f{
    border: .5vw solid black;
    font-size: 2vh;
    margin-left: 35vw;
  }
  .border{
    border: .5vw solid black;
  }
}
@media screen and (min-width: 820px){
  .background3{
    margin-top: -10vh;
    height: 100vh;


  }
  .f{
    border: .5vw solid black;
    font-size: 2vh;
    margin-left: 35vw;
  }
  .border{
    border: .5vw solid black;
  }
}
@media screen and (min-width: 912px){
  .background3{
    margin-top: -10vh;
    height: 100vh;


  }
  .f{
    border: .5vw solid black;
    font-size: 2vh;
    margin-left: 33vw;
  }
  .border{
    border: .5vw solid black;
  }
}
@media screen and (min-width: 1024px){
  margin-left: 4vw;
  .background3{
    margin-top: 90vh;
    margin-left: 11.5vw;
    height: 60vh;
  }
  .f{
    border: .3vw solid black;
    font-size: 2.5vh;
    margin-left: 34.5vw;
    margin-top: 91vh;
    padding: 1vw;
    width: 20vw;
    text-align: center;
  }
  .border{
    margin-top: 90vh;
    height: 60vh;
    margin-left: 1vw;
    border: .3vw solid black;
  }
  .ff-container{
    display: grid;
    grid-template-columns: 18vw 18vw 1vw;
  }
}

`
export default FeaturedItems