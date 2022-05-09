import React from 'react'

import { pageText } from 'constant'
import CustomLink from 'components/CustomLink'

import {
  StyledListIssuesItem,
  StyledListIssuesItemBody,
  StyledListIssuesItemComments,
  StyledListIssuesItemTitle,
} from './style'

const ListIssuesItem = ({ node, owner, repository }) => {
  const { title, body, id, comments, number } = node

  return (
    <CustomLink path={`/issue/${id}/${owner}/${repository}/${number}`}>
      <StyledListIssuesItem>
        <StyledListIssuesItemTitle>{pageText.issueTitle + title}</StyledListIssuesItemTitle>
        <StyledListIssuesItemBody>{pageText.issueBody + body}</StyledListIssuesItemBody>
        <StyledListIssuesItemComments>
          {pageText.issueComments + comments.totalCount}
        </StyledListIssuesItemComments>
      </StyledListIssuesItem>
    </CustomLink>
  )
}

export default ListIssuesItem
