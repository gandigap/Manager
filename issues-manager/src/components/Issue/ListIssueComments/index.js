import { pageText } from 'constant'
import React from 'react'
import { StyledCommentAuthor, StyledCommentBody, StyledCommentContainer } from './style'

const ListIssueComments = ({ comments }) => {
  console.log(comments)

  const renderComments = () => {
    return (
      comments &&
      comments.map(({ node }) => {
        console.log(node.author)
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
    <div>
      <p>List comments</p>
      {renderComments()}
    </div>
  )
}

export default ListIssueComments
