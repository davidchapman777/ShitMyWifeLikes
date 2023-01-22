import { Link } from "react-router-dom"
import styled from "styled-components"


const PageHero = ({title}) => {
    return (
        <Wrapper>
            <div> 
                <div> 
                    <Link to='/' className="link"><span className="go"></span> MAIN-PAGE <span className="title"> / {title}</span></Link>    
                </div>
            </div>
        </Wrapper>
  )
}
const Wrapper = styled.div`
border: 1vw solid white;
background: black;
box-shadow: 0 0 10px black;
width: 40vw;
position: fixed;
top: 92vh;
left: 28vw;
padding: 2vw;
z-index: 1;
text-align: center;

.link{
    text-decoration: none;
    color:white;
    position: relative;
    
}

@media screen and (min-width:280px){
top: 93vh;
font-size:1.8vh;
width: 46vw;
left: 25vw;
}
@media screen and (min-width:360px){
top: 93vh;
width: 41vw;
left: 27vw;
}
@media screen and (min-width:390px){
top: 93vh;
.link{
    font-size:2vh;
    box-shadow: 0 0 3vw black;
}
}
@media screen and (min-width:412px){
top: 93vh;

.link{
    font-size:1.7vh;
    box-shadow: 0 0 3vw black;
}
}
@media screen and (min-width:414px){
top: 93vh;
.link{
    font-size:2vh;
    box-shadow: 0 0 3vw black;
}
}
@media screen and (min-width:540px){
top: 92vh;
.link{
    font-size:2.2vh;
    box-shadow: 0 0 3vw black;
}
}
@media screen and (min-width:768px){
top: 92vh;
.link{
    font-size:2.2vh;
    box-shadow: 0 0 3vw black;
}
}
@media screen and (min-width:820px){
top: 92vh;
.link{
    font-size:2.2vh;
    box-shadow: 0 0 3vw black;
}
}
@media screen and (min-width:912px){
top: 92vh;
.link{
    font-size:2.2vh;
    box-shadow: 0 0 3vw black;
}
}
@media screen and (min-width:1024px){
top: 87vh;
width: 30vw;
height: .5vh;
left: 34.5vw;
border: .3vw solid white;
.link{
    font-size:3vh;
    box-shadow: 0 0 3vw black;
    bottom: 1vh;
}
}
@media screen and (min-width:1280px){
top: 87vh;
width: 30vw;
height: .5vh;
left: 34.5vw;
border: .3vw solid white;
.link{
    font-size:3vh;
    box-shadow: 0 0 3vw black;
    bottom: 1vh;
}
}
`

export default PageHero