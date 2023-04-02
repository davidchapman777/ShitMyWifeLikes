import styled from "styled-components"
import {VscSmiley} from 'react-icons/vsc'

const Message = () => {
    return (
      <Wrapper>
            
    <div className="m">PLEASE ROTATE DEVICE BACK <span><VscSmiley/></span></div>
      </Wrapper>
  )
}
export default Message

const Wrapper = styled.div`
display: none;
@media screen and (max-width:900px) and (orientation:landscape){
    display: block;
    z-index: 3;
    background: #00eeff;
    position: fixed;
    margin: auto;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    .m{
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        width: 70%;
        height: 40%;
        padding: 5vw;
        font-size: 5vw;
        text-align: center;
        background-color: black;
        color: white;
        border: 1vw solid white;
    }
}
`