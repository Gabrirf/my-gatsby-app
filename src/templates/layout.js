import '../styles/layout.css';

import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div>
      <header>
        <h1>{data.site.siteMetadata.title}</h1>
        <Link to="/">Home</Link>
        <Link to="/content">Content</Link>
        <Link to="/about">About</Link>
      </header>
      <main>{children}</main>
    </div>
  )
}
