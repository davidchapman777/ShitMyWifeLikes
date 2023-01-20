import FeaturedBeautyProducts from "./FeaturedBeautyProducts"
import FeaturedDecorProducts from "./FeaturedDecorProducts"
import FeaturedFashionProducts from "./FeaturedFashionProducts"
import styled from "styled-components"

const FeaturedItems = () => {
  return (
    <Main>
      <h2 className="f">My wife's favorites</h2>
    <Wrapper>
      <FeaturedBeautyProducts/>
      <FeaturedDecorProducts />
      <FeaturedFashionProducts />
    </Wrapper>
    </Main>
  )
}
const Wrapper = styled.div`
display: grid;
grid-template-columns: auto auto auto;
border: .1vw solid black;
height: 25vh;
width: 70vw;
top: -8vh;
padding-left: 10vw;
padding-top: 5vh;
position: relative;
transition: .5s;
:hover{
  box-shadow: 0 0 50px white;
  transform: scale(1.02);
}
`
const Main = styled.main`
position: relative;
top: 20vh;
width: 80vw;
left: 8vw;
height: 30vh;
text-align: center;
.f{
  border:.1vw solid black;
  width: 15vw;
  text-transform: uppercase;
  text-align: center;
  box-shadow: 0 0 30px white;
  position: relative;
  left: 31.1vw;
  padding: .5vw;
  top: -8vh;
  transition: .5s;
  z-index: 1;
}
:hover{
.f{
  background: black;
  transform: scale(1.3);
  box-shadow: 0 0 30px white;
  color:white;
  border: .1vw solid white;
}
}
`
export default FeaturedItems