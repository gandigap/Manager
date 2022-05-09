import React from 'react'

import { pageText } from 'constant'

import {
  StyledCommentAuthor,
  StyledCommentBody,
  StyledCommentContainer,
  StyledCommentsList,
} from './style'

const ListIssueComments = ({ comments }) => {
  const renderComments = () => {
    return (
      comments &&
      comments.map(({ node }) => {
        return (
          <StyledCommentContainer key={node.id}>
            <StyledCommentBody>{node.body}</StyledCommentBody>
            <StyledCommentAuthor>{pageText.issueAuthor + node.author.login}</StyledCommentAuthor>
          </StyledCommentContainer>
        )
      })
    )
  }
  return (
    <StyledCommentsList>
      {comments?.length ? renderComments() : pageText.noComments}
    </StyledCommentsList>
  )
}

export default React.memo(ListIssueComments)
