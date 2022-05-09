/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useMutation, useLazyQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'

import { ADD_COMMENT } from 'graphQL/mutations'
import { GET_ISSUE } from 'graphQL/query'
import { pageText } from 'constant'
import { Spinner } from 'components/Spinner'
import ErrorContainer from 'components/ErrorContainer'
import InputSubmit from 'components/InputSubmit'
import CustomLink from 'components/CustomLink'

import ListIssueComments from './ListIssueComments'
import {
  StyledIssuCommentForm,
  StyledIssuCommentInputText,
  StyledIssue,
  StyledIssueInfo,
} from './style'

const Issue = () => {
  const { id, owner, repository, number } = useParams()
  const [comment, setComment] = useState('')

  const [addComment, { loading: loadingAddComment, error: errorAddComment }] = useMutation(
    ADD_COMMENT,
    {
      variables: {
        idIssue: id,
        body: comment,
      },
      refetchQueries: [GET_ISSUE],
    },
  )

  const [getIssue, { data: dataIssue, loading: loadingGetIssue, error: errorGetIssue }] =
    useLazyQuery(GET_ISSUE, {
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
    e.preventDefault()
    addComment()
    setComment('')
  }

  useEffect(() => {
    getIssue()
  }, [])

  if (loadingGetIssue || loadingAddComment) return <Spinner />

  return (
    <StyledIssue>
      <StyledIssueInfo>{`Comments for Issue №${number} from ${owner}'s repository "${repository}"`}</StyledIssueInfo>
      <ListIssueComments comments={dataIssue?.repository?.issue?.comments?.edges} />
      <StyledIssuCommentForm onSubmit={sendComment}>
        <StyledIssuCommentInputText type="text" value={comment} onChange={changeComment} />
        <InputSubmit />
      </StyledIssuCommentForm>
      {(errorGetIssue || errorAddComment) && (
        <ErrorContainer
          errorMessage={errorGetIssue ? errorGetIssue.message : errorAddComment.message}
        />
      )}
      <CustomLink path="/">{pageText.linkBack}</CustomLink>
    </StyledIssue>
  )
}

export default Issue
