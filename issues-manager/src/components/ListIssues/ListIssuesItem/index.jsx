import React from 'react'

import { pageText } from 'constant'

import {
  StyledLink,
  StyledListIssuesItem,
  StyledListIssuesItemBody,
  StyledListIssuesItemComments,
  StyledListIssuesItemTitle,
} from './style'

const ListIssuesItem = ({ node, owner, repository }) => {
  const { title, body, id, comments, number } = node

  return (
    <StyledLink to={`/issue/${id}/${owner}/${repository}/${number}`}>
      <StyledListIssuesItem>
        <StyledListIssuesItemTitle>{pageText.issueTitle + title}</StyledListIssuesItemTitle>
        <StyledListIssuesItemBody>{pageText.issueBody + body}</StyledListIssuesItemBody>
        <StyledListIssuesItemComments>
          {pageText.issueComments + comments.totalCount}
        </StyledListIssuesItemComments>
      </StyledListIssuesItem>
    </StyledLink>
  )
}

export default ListIssuesItem
