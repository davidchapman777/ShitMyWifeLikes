import styled from "styled-components"
import Pic from '../images/background.jpeg'
import FeaturedItems from "../components/FeaturedItems"
import { Information } from "../components"

const MainPage = () => {
    return (
        <Wrapper>
            <div className="about">
                <Information/>
            </div>
            <div>
                <FeaturedItems/>
            </div>
            <div className="background"></div>
        </Wrapper>
  )
}

const Wrapper = styled.div`
position: relative;
width: 98%;
top: 22vh;
padding-bottom: 5vh;

.background{
    position: fixed;
    background-image: url(${Pic});
    background-repeat: no-repeat;
    margin: auto;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
    filter: blur(5px);

}
`



export default MainPage