import styled from "styled-components"
import Pic from '../images/background.jpeg'
import FeaturedItems from "../components/FeaturedItems"
import { Information } from "../components"

const MainPage = () => {
    return (
        <main>
            <Background></Background>
            <Wrapper>  
                <Information/>
                <FeaturedItems/>
            </Wrapper>
        </main>
  )
}

const Wrapper = styled.div`
position: relative;
margin-top: 5vh;
height: 76vh;
width: 97VW;
top: 15vh;
`
const Background = styled.div`
border:3px solid red;
height: 100%;
width: 100%;
margin-left: -.5vw;
position: fixed;
background-image: url(${Pic});
background-repeat: no-repeat;
background-size: 100%;
filter: blur(3px);
`


export default MainPage