import React from 'react'
import { pageText } from 'constant'

import {
  StyledRepositoryForm,
  StyledRepositoryInput,
  StyledRepositoryLabel,
  StyledRepositoryTitle,
} from './style'

const RepositoryForm = ({ handleChange, handleSubmit, inputValue }) => {
  return (
    <StyledRepositoryForm onSubmit={handleSubmit}>
      <StyledRepositoryTitle>Title</StyledRepositoryTitle>
      <div>
        <StyledRepositoryLabel>{pageText.labelRepositoryUrl}</StyledRepositoryLabel>
        <StyledRepositoryInput
          type="text"
          onChange={handleChange}
          value={inputValue}
          placeholder={pageText.inputRepositoryPlaceholder}
        />
      </div>
      <input type="submit" value="Submit" />
    </StyledRepositoryForm>
  )
}

export default RepositoryForm
