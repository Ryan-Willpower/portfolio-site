import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const Title = styled.div`
  grid-area: title;
  grid-column: 1 / 3;
  width: 40vw;
  height: 60%;
  background-color: #C4C4C4;
  font-size: 2vw;
  display: flex;
  align-items: center;
  padding-left: 2vw;
  border-radius: 0 10px 10px 0;

  ${media.lessThan("medium")`
    grid-area: title;
    grid-column: auto;
    width: 80vw;
    font-size: 5vw;
  `}
`

export default ({text}) => (
  <Title>{text.toUpperCase()}</Title>
)