import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Pic = styled.div`
  grid-area: pic;
  grid-column: 4 / span 6;
  grid-row: 2 / 4;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

export default () => (
  <Pic>
    <StaticQuery
      query={graphql`
        query {
          pic: file(relativePath: {eq: "pic.jpg"}) {
            childImageSharp {
              fixed(width: 350, height: 350) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => <Img fixed={data.pic.childImageSharp.fixed} style={{borderRadius: '50%'}} />} />
  </Pic>
)