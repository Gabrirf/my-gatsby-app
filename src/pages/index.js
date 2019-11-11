import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteTitle
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
      }
    `
  )
  return (
    <>
      <h1>{data.site.siteMetadata.siteTitle}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
