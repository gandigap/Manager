import React from 'react'
import { StyledListIssuesItem, StyledListIssuesItemBody, StyledListIssuesItemTitle } from './style'

const ListIssuesItem = ({ node }) => {
  const { title, body } = node

  return (
    <StyledListIssuesItem>
      <StyledListIssuesItemTitle>{title}</StyledListIssuesItemTitle>
      <StyledListIssuesItemBody>{body}</StyledListIssuesItemBody>
    </StyledListIssuesItem>
  )
}

export default ListIssuesItem
