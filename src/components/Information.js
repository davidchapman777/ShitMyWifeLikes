
import styled from "styled-components"

const Information = () => {
    return (
        <Wrapper>
            <div className="backgroundf"></div>
            <div className="title">ABOUT</div>
                <div className="p">Hi there! My name is David and I made "Sh!t My Wife Likes" with the intention to help help other men find their ladies something special for any occasion. I always have a hard time finding the perfect gift for my wife and I'm certain you can relate. Luckily my wife told me to make this website in order to help aid people in their search for a gift. My wife is full of wonderful ideas and knows what's best, especially when it comes to gifts. So take a look at the sh!t my wife likes. Your wife might like it too!
                </div>
        </Wrapper>
  )
}

const Wrapper = styled.div`
position: relative;
.backgroundf{
    
    height: 54vh;
    width: 74vw;
    margin-left: 13vw;
    max-width: 100vw;
    position: absolute;
    margin-top: 29vh;
    filter: blur(10px);
    background: white;
    opacity: .7;
}
.title{
    border: 1vw solid black;
    position: absolute;
    margin-top: 31vh;
    text-align: center;
    margin-left: 41vw;
    background: white;
    box-shadow: 0 0 10px black;
}
.p{
    text-align: center;
    border: 1vw solid black;
    position: absolute;
    margin-top: 30vh;
    margin-left: 15vw;
    padding: 1.5vw;
    line-height: 3vh;
    width: 65vw;
    padding-top: 5vh;
}
@media screen and (min-width: 280px){
    .backgroundf{
        height: 56vh;
    }
    .title{
        border: 1vw solid black;
        padding: .5vw;
        font-size: 2vh;
    }
    .p{
        font-size: 2vh;
    }
}
@media screen and (min-width: 320px){
    .backgroundf{
        height: 45vh;
    }
    .title{
        border: .7vw solid black;
        padding: .5vw;
    }
    .p{
        
    }
}
@media screen and (min-width: 360px){
    .backgroundf{
        height: 53vh;
    }
    .title{
        border: .7vw solid black;
        padding: .5vw;
    }
    .p{
        
    }
}
@media screen and (min-width: 375px){
    .backgroundf{
        height: 45vh;
    }
    .title{
        border: .7vw solid black;
        padding: .5vw;
    }
    .p{
        border: .7vw solid black;
    }
}
@media screen and (min-width: 390px){
    .backgroundf{
        height: 53vh;
    }
    .title{
        border: .7vw solid black;
        padding: .5vw;
    }
    .p{
        
    }
}
@media screen and (min-width: 412px){
    .backgroundf{
        height: 53vh;
    }
    .title{
        border: .7vw solid black;
        padding: .5vw;
    }
    .p{
        
    }
}
@media screen and (min-width: 414px){
    .backgroundf{
        height: 53vh;
    }
    .title{
        border: .5vw solid black;
        padding: .5vw;
    }
    .p{
        border: .5vw solid black;
    }
}
@media screen and (min-width: 540px){
    .backgroundf{
        height: 48vh;
    }
    .title{
        border: .7vw solid black;
        padding: .5vw;
        width: 20vw;
        margin-left: 38vw;
    }
    .p{
        padding-top: 6vh;
        height: 36vh;
    }
}
@media screen and (min-width: 768px){

    .backgroundf{
        height: 48vh;
    }
    .title{
        border: .3vw solid black;
        padding:1vw;
        margin-left: 38vw;
        font-size: 2vh;
        width: 20vw;
    }
    .p{
        padding-top: 6vh;
        height: 38vh;
        font-size: 2.4vh;
        border: .4vw solid black;
    }
}
@media screen and (min-width: 820px){

    .backgroundf{
        height: 48vh;
    }
    .title{
        border: .7vw solid black;
        padding:1vw;
        margin-left: 38vw;
        font-size: 2vh;
        width: 20vw;
    }
    .p{
        padding-top: 6vh;
        height: 38vh;
        font-size: 2.4vh;
    }
}
@media screen and (min-width: 912px){

    .backgroundf{
        height: 48vh;
    }
    .title{
        border: .7vw solid black;
        padding:1vw;
        margin-left: 38vw;
        font-size: 2vh;
        width: 20vw;
    }
    .p{
        padding-top: 6vh;
        height: 38vh;
        font-size: 2.4vh;
    }
}
@media screen and (min-width: 1024px){

    .backgroundf{
        height: 48vh;
        width: 72vw;
        margin-left: 14.5vw;
    }
    .title{
        border: .2vw solid black;
        padding:1vw;
        margin-left: 39vw;
        font-size: 2vh;
        width: 20vw;
    }
    .p{
        padding-top: 10vh;
        height: 32vh;
        line-height: 4vh;
        font-size: 3.3vh;
        border: .3vw solid black;
        margin-left:16vw ;
    }
}

`


export default Information