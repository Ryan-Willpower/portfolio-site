import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

const Skill = styled.div`
  grid-area: skill;
  grid-column: 1 / span 6;
  margin-top: 3vw;
  display: flex;
  justify-content: center;

  & > div > h1 {
    text-align: center;
  }
`

export default () => (
  <StaticQuery
    query={graphql`
      query {
        introduction: markdownRemark(frontmatter: {title: {eq: "😎 introduction"}}) {
          frontmatter {
            title
          }
          html
        }
      }
    `}
    render={data => {
      const { frontmatter, html } = data.introduction
      return (
        <Skill>
          <div>
            <h1>{frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </Skill>
      )
    }}
    />
)