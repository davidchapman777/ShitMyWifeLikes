import React from 'react'
import styled from 'styled-components'

const Error = () => {
  return (
    <Wrapper>
      <div>
        Error . . . 
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
background: red;
text-align: center;
margin-top: 5vh;
height: 12vh;
padding-top: 8vh;
font-size: xxx-large;
`

export default Error
