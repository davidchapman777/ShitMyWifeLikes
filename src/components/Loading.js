import React from 'react'
import styled from 'styled-components'

const Loading = () => {
    return (
      <Wrapper>    
        <div>
            Loading . . . 
        </div>
      </Wrapper>
  )
}

const Wrapper = styled.div`
background: yellow ;
text-align: center;
margin-top: 5vh;
height: 12vh;
padding-top: 8vh;
font-size: xxx-large;

`

export default Loading
