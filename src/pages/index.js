import { graphql } from 'gatsby';
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
      }
    `
  )
  return <div>{data.site.siteMetadata.siteTitle}</div>
}
