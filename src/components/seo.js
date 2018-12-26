import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        metadata: site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `}
    render={data => {
      const { title, description, author } = data.metadata.siteMetadata
      return (
        <Helmet>
          <html lang="en" amp />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={author} />
          <meta name="author" content={author} />
        </Helmet>
      )
    }}
    />
)