import '../styles/group-creator.css';

import React from 'react';

import GroupBox from '../components/group-box';
import GroupForm from '../components/group-form';
import GroupList from '../components/group-list';
import groupList from '../components/group-list';
import Layout from '../templates/layout';

//import { graphql, useStaticQuery } from 'gatsby';
class Group extends React.Component {
  state = {
    nGroups: 4,
    elements: [],
    groups: [],
    groupBoxes: [],
  }

  constructor(props) {
    super(props)
    this.randomize = this.randomize.bind(this)
  }

  async componentDidMount() {
    await this.initData()
  }

  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(prevState) !== JSON.stringify(this.state)) {
      this.updateData()
    }
  }

  async initData() {
    const { nGroups } = this.state
    const elements = this.props.data.allDataJson.nodes[0].members

    let groupBoxes = []
    for (let i = 1; i <= nGroups; i++) {
      groupBoxes.push(<GroupBox key={i} number={i} />)
    }
    this.setState({ elements, groupBoxes })
  }

  updateData() {
    const { nGroups, groups } = this.state
    let groupBoxes = []
    for (let i = 0; i < nGroups; i++) {
      groupBoxes.push(<GroupBox key={i} number={i + 1} elements={groups[i]} />)
    }
    this.setState({ groupBoxes })
  }

  randomize() {
    const { nGroups, elements } = this.state
    let _elements = [...elements]
    const size = _elements.length
    let groups = []
    for (let i = 0; i < nGroups; i++) {
      groups.push([])
    }
    for (let i = 0; i < size; i++) {
      let randomI = Math.floor(Math.random() * _elements.length)
      groups[i % nGroups].push(_elements.splice(randomI, 1)[0])
    }
    this.setState({ groups })
  }

  render() {
    const { elements, groupBoxes } = this.state
    return (
      <Layout>
        <div className="group-container">
          <GroupList elements={elements} />
          <GroupForm submit={this.randomize} />
        </div>
        <div className="group-box-list">{groupBoxes}</div>
      </Layout>
    )
  }
}

export default Group

export const groupQuery = graphql`
  query {
    allDataJson {
      nodes {
        title
        members
      }
    }
  }
`
