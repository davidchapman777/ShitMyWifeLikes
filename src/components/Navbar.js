import styled from "styled-components"
import { Link } from "react-router-dom"


const Navbar = () => {
    return (
      <Wrapper>
        <div className="title">sh!t my wife likes
        </div>
        <div className="links-container">
          <div className="links">
            <Link to='/' className="link">MAIN-PAGE</Link>
            <Link to='/beauty' className="link">BEAUTY</Link>
            <Link to='/home' className="link">HOME</Link>
            <Link to='/electronics' className="link">ELECTRONICS</Link>
            <Link to='/luxury' className="link">LUXURY</Link>
          </div>
        </div>
        </Wrapper>
  )
}
const Wrapper = styled.div`
background-color: aqua;
position: fixed;
border:.2vw solid black;
height: 22vh;
width: 99.5vw;
z-index: 2;

.link{
  display: block;
  position: relative;
  border: .1vw solid black;
  width: 50vw;
  left: 45vw;
  height: 2.55vh;
  top: .9vh;
  padding: 1vw;
  text-align: center;
  text-decoration: none;
  color: black;
}

.title{
  border: 1vw solid white;
  color: white;
  position: fixed;
  width: 35vw;
  height: 17.5vh;
  top: 1vh;
  left: 2vw;
  text-transform: uppercase;
  font-size: 4vh;
  padding:1.5vw;
  background: black;
  line-height: 6vh;
  box-shadow: 0 0 30px black;
}



@media screen and (min-width:280px){
  .title{
    font-size: 3.6vh;
  }
  .link{
    height: 2.71vh;
    padding-top: 1vw;
  }
}
@media screen and (min-width:360px){
  .title{
    font-size: 4vh;
  }
  .link{
    height: 2.71vh;
    padding-top: 1vw;
  }
}
@media screen and (min-width:390px){
  .title{
    font-size: 3vh;
  }
  .link{
    height: 2.3vh;
    padding-top: 2vw;
  }
}
@media screen and (min-width:412px){
  .title{
    font-size: 3vh;
  }
  .link{
    height: 2.21vh;
    padding-top: 2vw;
    border: .4vw solid black;
  }
}
@media screen and (min-width:414px){
  .title{
    font-size: 3vh;
  }
  .link{
      height: 2.17vh;
      padding-top: 2vw;

  }
}
@media screen and (min-width:540px){
  .title{
    font-size: 5vh;
    height: 16.6vh;
    width: 29.5vw;
    
  }
  .link{
      font-size: 3vw;
      letter-spacing: 1vw;
      height:2.1vh;
      padding-top: 1vw;
      border: .3vw solid black;
  }
}
@media screen and (min-width:768px){
  .title{
    font-size: 5vh;
    height: 16.6vh;
    width: 29.5vw;
    
  }
  .link{
      font-size: 3vw;
      letter-spacing: 1vw;
      height:2.1vh;
      padding-top: 1vw;
      border: .3vw solid black;
  }
}
@media screen and (min-width:820px){
  .title{
    font-size: 5vh;
    height: 16.6vh;
    width: 29.5vw;
    
  }
  .link{
      font-size: 3vw;
      letter-spacing: 1vw;
      height:2.2vh;
      padding-top: 1vw;
      border: .3vw solid black;
  }
}
@media screen and (min-width:912px){
  .title{
    font-size: 4vh;
    height: 16.6vh;
    width: 29.5vw;
    
  }
  .link{
      font-size: 3vw;
      letter-spacing: 1vw;
      height:2.2vh;
      padding-top: 1vw;
      border: .3vw solid black;
  }
}
@media screen and (min-width:1024px){
  height: 22vh;
  width: 99.2vw;
  border: .4vw solid black;
  .title{
    font-size: 4vh;
    height: 15vh;
    width: 9vw;
    border:.3vw solid white;
    padding-bottom: 1.5vw;
    padding-top: 1vw;
    line-height: 4vh;
    top: 1vw;
  }
  .link{
      display: inline-block;
      left: 18vw;
      font-size: 1.5vw;
      letter-spacing: 0vw;
      height:3vh;
      width: 10vw;
      padding-top: .9vw;
      border: .3vw solid black;
      margin: 1.5vw;
      top: 5vh;
  }
}

`


export default Navbar