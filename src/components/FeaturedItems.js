import FeaturedBeautyProducts from "./FeaturedBeautyProducts"
import FeaturedDecorProducts from "./FeaturedDecorProducts"
import FeaturedFashionProducts from "./FeaturedFashionProducts"
import styled from "styled-components"

const FeaturedItems = () => {
  return (
    <Wrapper>
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
position: relative;
margin: auto;
left: 0;
right: 0;
width: 90%;
top: 5vh;
.f{
  text-transform: uppercase;
  position: relative;
  border: .1vw solid white;
  margin: auto;
  margin-bottom: 1vh;
  left: 0;
  right: 0;
  text-align: center;
  background: black;
  color: white;
  max-width: 40vh;

}

.ff-container{
  display: block;
}
@media only screen and (min-width: 992px) {
  max-width: 140vh;
  .ff-container{
    display: flex;
    justify-content: space-between;
    position: relative;
    margin: auto;
  }
}

`
export default FeaturedItems