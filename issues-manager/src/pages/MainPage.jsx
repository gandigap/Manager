import React, { useState } from 'react'
import { useLazyQuery } from '@apollo/client'

import { GET_ISSUES } from 'graphQL/query'
import RepositoryForm from 'components/RepositoryForm'
import ListIssues from 'components/ListIssues'
import { Spinner } from 'components/Spinner'
import ErrorContainer from 'components/ErrorContainer'

export const MainPage = () => {
  const [repositoryUrl, setRepositoryUrl] = useState('')
  const [infoData, setInfoData] = useState({})

  const [getIssues, { data, loading, error }] = useLazyQuery(GET_ISSUES, {
    variables: {
      ownerName: infoData.owner,
      repositoryName: infoData.repos,
    },
  })

  const changeRepositoryUrl = (e) => {
    setRepositoryUrl(e.target.value)
  }

  const submitRepositoryUrl = (e) => {
    e.preventDefault()
    const [owner, repos] = repositoryUrl.split('/')
    setInfoData({ owner, repos })
    getIssues()
  }

  if (loading) return <Spinner />

  return (
    <div>
      <RepositoryForm
        handleChange={changeRepositoryUrl}
        handleSubmit={submitRepositoryUrl}
        inputValue={repositoryUrl}
      />
      {error && <ErrorContainer errorMessage={error.message} />}
      <ListIssues
        issues={data?.repository?.issues?.edges}
        owner={infoData.owner}
        repository={infoData.repos}
      />
    </div>
  )
}
