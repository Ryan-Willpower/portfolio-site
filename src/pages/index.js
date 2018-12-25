import React from 'react'
import styled from 'styled-components'
import GlobalLayout from '../components/global-layout'
//
import Name from '../components/index/name'
import Pic from '../components/index/pic'
import Title from '../components/index/title'
import Skill from '../components/index/skill'

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas: '. .'
  'name pic'
  'title .'
  '. .'
  'skill skill';
`

export default () => (
  <Main>
    <Name
      fname="Ryan"
      lname="Willpower" />
    <Title text="fullstack developer"/>
    <Pic />
    <Skill />
    <GlobalLayout />
  </Main>
)