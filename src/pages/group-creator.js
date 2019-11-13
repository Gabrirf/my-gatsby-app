import '../styles/group-creator.css';

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
      }
    `
  )
  return (
    <Layout>
      <div class="group-container">
        <div class="group-list">Full Group List</div>
        <div class="group-form">Group Form</div>
      </div>
      <div class="group-box-list">
        <div class="group-box">Group 1</div>
        <div class="group-box">Group 2</div>
        <div class="group-box">Group 3</div>
        <div class="group-box">Group 4</div>
      </div>
    </Layout>
  )
}
