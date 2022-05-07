import React from 'react'
import ListIssuesItem from './ListIssuesItem'
import { StyledListIssues } from './style'

const ListIssues = ({ issues, owner, repository }) => {
  const renderList = () => {
    return (
      issues &&
      issues.map(({ node }) => {
        return <ListIssuesItem key={node.id} node={node} owner={owner} repository={repository} />
      })
    )
  }
  return <StyledListIssues>{renderList()}</StyledListIssues>
}

export default ListIssues
