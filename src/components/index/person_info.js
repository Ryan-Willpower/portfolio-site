import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

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
        <>
          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </>
      )
    }}
    />
)