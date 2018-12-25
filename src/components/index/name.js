import React from 'react'
import styled from 'styled-components'

const Name = styled.div`
  grid-area: name;
  grid-column: 1 / span 3;
  font-size: 7.5vw;
  color: #696969;
  padding-left: 1vw;
`

export default ({fname, lname}) => (
  <Name>
    <div>{fname.toUpperCase()}</div>
    <div>{lname.toUpperCase()}</div>
  </Name>
)