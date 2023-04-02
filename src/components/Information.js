
import styled from "styled-components"

const Information = () => {
    return (
        <Wrapper>
            <div className="backgroundf"></div>
            <div className="title">ABOUT</div>
            <div className="p">
                Hi there! My name is David and I am a frontend developer. I made this website to help other men find their wives something nice for any occasion. All the products listed have been picked by my wife. So take a look around and see if there is something your wife might like too.
                <br/>
                ***Disclaimer***
                <br />
                Prices may vary
                </div>
        </Wrapper>
  )
}

const Wrapper = styled.div`
width: 90%;
height: 30vh;
position: relative;
margin: auto;
left: 0;
right: 0;
top: 5vh;
margin-bottom: 5vh;
.title{
    border: .1vw solid white;
    position: absolute;
    text-align: center;
    margin: auto;
    left: 0;
    right: 0;
    color: white;
    max-width: 40vh;
    background: black;
}
.p{
    text-align: center;
    border: .2vw solid black;
    position: absolute;
    padding: 1vh;
    line-height: 3vh;
    margin: auto;
    left: 0;
    right: 0;
    top: 3vh;
    width: 34vh;
}
@media only screen and (min-width: 768px) {
.p{
    width: 100%;
}
}
@media only screen and (min-width: 992px) {
    .p{
        max-width: 140vh;
        border: .1vh solid black;
    }
    .title{
        border: 0.1vh solid white;
    }

}


`


export default Information