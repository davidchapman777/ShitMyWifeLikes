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
            <div className="featured-container">
                <FeaturedItems/>
            </div>
            <div className="background"></div>
        </Wrapper>
  )
}

const Wrapper = styled.div`
position: relative;
.featured-container{
position: absolute;
}

.background{
    position: fixed;
    background-image: url(${Pic});
    height: 103vh;
    width: 100%;
    max-width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
}
`



export default MainPage