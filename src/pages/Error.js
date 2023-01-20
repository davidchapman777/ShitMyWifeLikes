import styled from "styled-components"
import PageHero from "../components/PageHero"


const Error = () => {
    return (
       <main>
            <PageHero title='Error'/>
            <Wrapper>  
                <div>Beauty</div>
            </Wrapper>
        </main>
  )
}

const Wrapper = styled.div`

position: absolute;
margin-top: 19vh;
margin-left: -.5vw;
border: 5px solid lightgreen;
background: #88f788;
height: 100%;
width: 100%;
z-index: 0;
`

export default Error