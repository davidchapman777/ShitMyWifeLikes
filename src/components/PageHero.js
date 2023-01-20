import { Link } from "react-router-dom"
import styled from "styled-components"


const PageHero = ({title}) => {
    return (
        <main>
            <Background></Background>
            <Wrapper> 
                <div> 
                    <StyledLink to='/'><span className="go"></span> MAIN-PAGE <span className="title"> / {title}</span></StyledLink>    
                </div>
            </Wrapper>
        </main>
  )
}

const Wrapper = styled.div`
position: fixed;
z-index: 2;
width: 20vw;
height: 5%;
margin-top: 85vh;
left: 40.5vw;

.go{
    display: none;
}

`
    
const StyledLink = styled(Link)`
text-decoration: none;
display: block;
border: .15vw solid black;
font-size: 2vh;
text-align: center;
color: black;
width:19.7vw;
height:1.5vh;
padding-top: 1vh;
padding-bottom: 2vh;
transition: .5s;

:hover{
    border:.15vw solid white;
    box-shadow: 0 0 30px white;
    background: black;
    color: white;
    transform: scale(1.5);

    .title{
        display: none;
    }
    .go{
        display: inline-block;
    }
}

`

const Background = styled.div`
position:fixed;
top: 89vh;
height: 6.9vh;
width: 21vw;
z-index: 2;
background: white;
left: 40vw;
opacity:.9;
filter: blur(10px);
`

export default PageHero