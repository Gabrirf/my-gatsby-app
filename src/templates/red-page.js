import { graphql } from 'gatsby';
import React from 'react';

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div style={{ backgroundColor: "red" }}>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`
