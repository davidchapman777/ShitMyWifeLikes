
import styled from "styled-components"

const Information = () => {
    return (
        <Main>
            <div className="background"></div>
            <h2 className="about">ABOUT</h2>
            <Wrapper>
                <div className="p">Hi there! My name is David and I made "Sh!t My Wife Likes" with the intention to help help other men find their ladies something special for any occasion. I always have a hard time finding the perfect gift for my wife and I'm certain you can relate. Luckily my wife told me to make this website in order to help aid people in their search for a gift. My wife is full of wonderful ideas and knows what's best, especially when it comes to gifts. So take a look at the sh!t my wife likes. Your wife might like it too!
                </div>
            </Wrapper>
      </Main>
  )
}

const Main = styled.main`
position: relative;
top: 4vh;
width: 80vw;
left: 8vw;
height: 30.6vh;
transition: .5s;
.background{
    height: 100%;
    position: absolute;
    width: 100%;
    box-shadow: 0 0 50px white;
    filter: blur(10px);
    background: white;
    opacity:.5;
    display: none;
    top: 6vh;
}
h2{
    border:.1vw solid black;
    width: 15vw;
    text-transform: uppercase;
    text-align: center;
    box-shadow: 0 0 30px white;
    position: relative;
    left: 31.1vw;
    padding: .5vw;
    transition: .5s;
}

:hover{
    transform: scale(1.02);
    .background{
        display: block;
    }
    h2{
      background: black;
      transform: scale(1.3);
      box-shadow: 0 0 30px white;
      color:white;
      border: .1vw solid white;  
    }
}
`

const Wrapper = styled.div`
border: .1vw solid black;
position: relative;
text-align: center;
font-size: 2vh;
line-height: 5vh;
padding: 3vw;
color: black;
`


export default Information