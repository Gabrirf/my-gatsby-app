import { graphql } from 'gatsby';
import React from 'react';

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteTitle
      }
    }
  }
`

export default ({ data }) => <div>{data.site.siteMetadata.siteTitle}</div>
