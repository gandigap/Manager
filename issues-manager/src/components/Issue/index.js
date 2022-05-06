import React from 'react'
import { Link } from 'react-router-dom'
import { StyledIssue } from './style'

const Issue = ({ data }) => {
  return (
    <StyledIssue>
      Issue
      <Link to="/">Back</Link>
    </StyledIssue>
  )
}

export default Issue
