import React from 'react'

import {
  StyledLink,
  StyledListIssuesItem,
  StyledListIssuesItemBody,
  StyledListIssuesItemTitle,
} from './style'

const ListIssuesItem = ({ node }) => {
  const { title, body, id } = node

  return (
    <StyledLink to={`/issue/${id}`}>
      <StyledListIssuesItem>
        <StyledListIssuesItemTitle>{title}</StyledListIssuesItemTitle>
        <StyledListIssuesItemBody>{body}</StyledListIssuesItemBody>
      </StyledListIssuesItem>
    </StyledLink>
  )
}

export default ListIssuesItem
