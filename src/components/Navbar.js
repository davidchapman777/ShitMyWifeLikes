import styled from "styled-components"
import { Link } from "react-router-dom"


const Navbar = () => {
    return (
      <main>
        <Title>sh!t my wife likes
          <span></span>
        </Title>
          <Wrapper>
            <StyledLink to='/'>MAIN-PAGE</StyledLink>
            <StyledLink to='/beauty'>BEAUTY</StyledLink>
            <StyledLink to='/home'>HOME</StyledLink>
            <StyledLink to='/electronics'>ELECTRONICS</StyledLink>
            <StyledLink to='/luxury'>LUXURY</StyledLink>
          </Wrapper>
        </main>
  )
}



const Wrapper = styled.div`
position: absolute;
margin-left: -.5vw;
margin-top: -5vh;
border:5px solid black;
width: 100%;
height: 21vh;
position: fixed;
z-index: 1;
text-align: center;
background: #1fe4ee;


`
const StyledLink=styled(Link)`
    text-decoration: none;
    color: black;
    display:inline-block;
    margin-top:7vh;
    margin-left: 4vw;
    margin-right: 4vw;
    font-size:2vh;
    border: 3px solid black;
    padding:1vw;
    :hover{
        background: black;
        color: white;
        border:3px solid white;
        box-shadow: 0 0 10px black;
    }
`
const Title = styled.div`
position: fixed;
top: 1vh;
left: 1vw;
padding: 1vw;
width: 7vw;
background: black;
color: white;

height: 15.5vh;
z-index: 2;
font-size: 3.6vh;
text-transform: uppercase;
border: .2vw solid white;
box-shadow: 0 0 30px black;

`

export default Navbar