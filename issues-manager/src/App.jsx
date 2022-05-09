import React from 'react'

import { Routes, Route } from 'react-router-dom'

import { pageText } from 'constant'
import { IssuePage, MainPage } from 'pages'

import { StyledApp, StyledAppTitle } from './style'

function App() {
  return (
    <StyledApp className="App">
      <StyledAppTitle>{pageText.appTitle}</StyledAppTitle>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/issue/:id/:owner/:repository/:number" element={<IssuePage />} />
        <Route path="*" element={<div>{pageText.pageNotFound}</div>} />
      </Routes>
    </StyledApp>
  )
}

export default App
