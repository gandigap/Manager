import React, { useState, useEffect } from 'react'
import { useMutation, useLazyQuery, refetc } from '@apollo/client'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import {
  StyledIssuCommentButton,
  StyledIssuCommentInput,
  StyledIssue,
  StyledIssueInfo,
} from './style'
import { ADD_COMMENT } from 'graphQL/mutations'
import { GET_ISSUE } from 'graphQL/query'
import ListIssueComments from './ListIssueComments'

const Issue = () => {
  const { id, owner, repository, number } = useParams()
  const [comment, setComment] = useState('')
  console.log(id, owner, repository, number)

  const [addComment, { newData, loadingComment, errorComment }] = useMutation(ADD_COMMENT, {
    variables: {
      idIssue: id,
      body: comment,
    },
    refetchQueries: [
      GET_ISSUE, // DocumentNode object parsed with gql
      'GetComments', // Query name
    ],
  })

  const [getIssue, { data, loading, error }] = useLazyQuery(GET_ISSUE, {
    variables: {
      number: parseInt(number),
      ownerName: owner,
      repositoryName: repository,
    },
  })

  const changeComment = (e) => {
    setComment(e.target.value)
  }

  const sendComment = (e) => {
    addComment()
    setComment('')
  }

  useEffect(() => {
    getIssue()
  }, [])

  console.log(newData, 'data')

  if (loadingComment) return 'Submitting...'
  if (errorComment) return `Submission error! ${errorComment.message}`
  return (
    <StyledIssue>
      <StyledIssueInfo>Issue</StyledIssueInfo>
      <ListIssueComments comments={data?.repository?.issue?.comments?.edges}></ListIssueComments>
      <StyledIssuCommentInput type="text" value={comment} onChange={changeComment} />
      <StyledIssuCommentButton type="button" onClick={sendComment}>
        Send
      </StyledIssuCommentButton>
      <Link to="/">Back</Link>
    </StyledIssue>
  )
}

export default Issue
