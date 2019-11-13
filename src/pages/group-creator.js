import '../styles/group-creator.css';

import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import GroupBox from '../components/group-box';
import GroupForm from '../components/group-form';
import GroupList from '../components/group-list';
import Layout from '../templates/layout';

export default () => (
  <Layout>
    <div class="group-container">
      <GroupList />
      <GroupForm />
    </div>
    <div class="group-box-list">
      <GroupBox number={1} />
      <GroupBox number={2} />
      <GroupBox number={3} />
      <GroupBox number={4} />
    </div>
  </Layout>
)
