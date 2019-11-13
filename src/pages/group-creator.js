import '../styles/group-creator.css';

import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import GroupBox from '../components/group-box';
import GroupForm from '../components/group-form';
import GroupList from '../components/group-list';
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
        <div class="group-list">
          <GroupList />
        </div>
        <div class="group-form">
          <GroupForm />
        </div>
      </div>
      <div class="group-box-list">
        <div class="group-box">
          <GroupBox number={1} />
        </div>
        <div class="group-box">
          <GroupBox number={2} />
        </div>
        <div class="group-box">
          <GroupBox number={3} />
        </div>
        <div class="group-box">
          <GroupBox number={4} />
        </div>
      </div>
    </Layout>
  )
}
