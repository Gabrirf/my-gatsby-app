import { graphql } from 'gatsby';
import { remarkForm } from 'gatsby-tinacms-remark';
import React from 'react';

const Page = ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fileRelativePath
      rawFrontmatter
      rawMarkdownBody
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`
export default remarkForm(Page)
