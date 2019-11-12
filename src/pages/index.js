import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Layout from '../templates/layout';


export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        allFile {
          edges {
            node {
              relativePath
              prettySize
              extension
              birthTime(fromNow: true)
            }
          }
        }
        allMarkdownRemark {
          nodes {
            frontmatter {
              title
              date
            }
            excerpt
            rawMarkdownBody
            html
          }
        }
      }
    `
  )
  return (
    <Layout>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  )
}
