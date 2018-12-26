import React from 'react'
import styled from 'styled-components'
//
import PersonInfo from './person_info'
import Skill from './skill'

const Info = styled.div`
  grid-area: info;
  grid-column: 1 / span 6;
  margin-top: 3vw;
  display: flex;
  flex-flow: column wrap;
  text-align: center;
  width: 100%;

  & ul {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
  }

  & img {
    min-width: 100px;
    max-width: 200px;
    margin: 20px;
  }
`

export default () => (
  <Info>
    <PersonInfo />
    <Skill />
  </Info>
)