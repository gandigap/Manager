import React from 'react'
import ListIssuesItem from './ListIssuesItem'
import { StyledListIssues } from './style'

const ListIssues = ({ issues }) => {
  const renderList = () => {
    return (
      issues &&
      issues.map(({ node }) => {
        return <ListIssuesItem key={node.id} node={node} />
      })
    )
  }
  return <StyledListIssues>{renderList()}</StyledListIssues>
}

export default ListIssues
