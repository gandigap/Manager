import React, { useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { Routes, Route } from 'react-router-dom'

import { GET_ISSUES } from 'graphQL/query'
import RepositoryForm from 'components/RepositoryForm'
import ListIssues from 'components/ListIssues'
import Issue from 'components/Issue'
import { pageText } from 'constant'

import { StyledApp, StyledAppTitle } from './style'

function App() {
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

  return (
    <StyledApp className="App">
      <StyledAppTitle>{pageText.appTitle}</StyledAppTitle>
      <RepositoryForm
        handleChange={changeRepositoryUrl}
        handleSubmit={submitRepositoryUrl}
        inputValue={repositoryUrl}
      />
      {loading && <div>Loading</div>}
      {error && <div>{error.message}</div>}
      <Routes>
        <Route path="/" element={<ListIssues issues={data?.repository?.issues?.edges} />} />
        <Route path="/issue/:id" element={<Issue />} />
        <Route path="*" element={<div>Not found page</div>} />
      </Routes>
    </StyledApp>
  )
}

export default App
