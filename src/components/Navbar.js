import styled from "styled-components"
import { NavLink } from "react-router-dom"


const Navbar = () => {
    return (
      <Wrapper>
        <div className="title">sh!t my wife likes</div>
        <div className="links-container">
          <div className="links">
            <NavLink to='/' className={({isActive})=>isActive? 'active':'inactive'}>MAIN-PAGE</NavLink>
            <NavLink to='/beauty' className={({isActive})=>isActive? 'active':'inactive'}>BEAUTY</NavLink>
            <NavLink to='/home' className={({isActive})=>isActive? 'active':'inactive'}>FOR-HOME</NavLink>
            <NavLink to='/electronics' className={({isActive})=>isActive? 'active':'inactive'}>ELECTRONICS</NavLink>
            <NavLink to='/luxury' className={({isActive})=>isActive? 'active':'inactive'}>LUXURY</NavLink>
          </div>
        </div>
        </Wrapper>
  )
}
const Wrapper = styled.div`
position: fixed;
border:.2vw solid black;
height: 22vh;
width: 99.6%;
z-index: 3;
background: #00e1ff;
.active{
  display: block;
  position: relative;
  border: .15vh solid black;
  width: 20vh;
  left: 50%;
  height: 1.5vh;
  top: .9vh;
  padding: 1vh;
  text-align: center;
  text-decoration: none;
  color: white;
  transition: .5s;
  background: black;
}
.inactive{
  display: block;
  position: relative;
  border: .15vh solid black;
  width: 20vh;
  left: 50%;
  height: 1.5vh;
  top: .9vh;
  padding: 1vh;
  text-align: center;
  text-decoration: none;
  color: black;
  transition: .5s;
  background: none;
}
.inactive:hover{
  background: black;
  border: .1vw solid white;
  color: white;

}

.title{
  border: .6vh solid white;
  color: white;
  position: absolute;
  width: 20vh;
  height: 17vh;
  top: 1vh;
  left: 1vh;
  text-transform: uppercase;
  font-size: 3.7vh;
  padding:.5vh;
  text-align: left;
  background: black;
  line-height: 6vh;
  box-shadow: 0 0 30px black;
}

@media only screen and (max-width: 600px) {
}

@media only screen and (min-width: 600px) {

}

@media only screen and (min-width: 768px) {
  .links{
    display: flex;
    flex-wrap: wrap;
    width: 55vh;
    height: 20vh;
    position: relative;
    left: 32%;
  }
  .active{
    position: relative;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .inactive{
    position: relative;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

}
@media only screen and (max-width: 850px) and (orientation: landscape) {
  height: 26vh;
  .links{
    display: flex;
    flex-wrap: nowrap;
    width: 80%;
    left: 18%;
  }
  .active{
  width: 26vh;
  left: 0%;
  height: 5vh;
  top: .9vh;
  padding: 1vh;
}
.inactive{
  width: 26vh;
  left: 0%;
  height: 5vh;
  top: .9vh;
  padding: 1vh;
}
.title{
  width: 30vh;
  height: 21vh;
  top: 1vh;
  left: 1vh;
  font-size: 6vh;
  padding:.5vh;
  line-height: 7vh;
}
}
@media only screen and (min-width: 992px) {
  .links{
    display: flex;
    flex-wrap: nowrap;
    width: 68%;
    left: 25%;
  }
  .active{
    margin-right: 1vh;
  }
  .inactive{
    margin-right: 1vh;
  }
}

@media only screen and (min-width: 1200px) {
  .links{
    left: 25%;
  }
}



`


export default Navbar