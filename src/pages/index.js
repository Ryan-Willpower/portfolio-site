import React from 'react'
import styled from 'styled-components'
import GlobalLayout from '../components/global-layout'
import media from 'styled-media-query'
//
import Name from '../components/index/name'
import Pic from '../components/index/pic'
import Title from '../components/index/title'
import Info from '../components/index/info'

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas: '. .'
  'name pic'
  'title .'
  '. .'
  'info info';

  ${media.lessThan("medium")`
   grid-template-columns: 1fr;
    grid-template-areas: 'pic'
    'name'
    'title'
    'info';
  `}
`

export default () => (
  <Main>
    {console.log(__dirname)}
    <Name
      fname="Ryan"
      lname="Willpower" />
    <Title text="fullstack developer"/>
    <Pic />
    <Info />
    <GlobalLayout />
  </Main>
)