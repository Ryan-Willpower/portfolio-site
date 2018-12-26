import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import media from 'styled-media-query'

const Pic = styled.div`
  grid-area: pic;
  grid-column: 4 / span 6;
  grid-row: 2 / 4;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  ${media.lessThan("medium")`
    grid-area: pic;
    grid-column: auto;
    grid-row: auto;
    margin-top: 2vw;
    margin-bottom: 2vw;
  `}
`

export default () => (
  <Pic>
    <StaticQuery
      query={graphql`
        query {
          pic: file(relativePath: {eq: "pic.jpg"}) {
            childImageSharp {
              fixed(width: 300, height: 300) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => <Img fixed={data.pic.childImageSharp.fixed} style={{borderRadius: '50%'}} />} />
  </Pic>
)