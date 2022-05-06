import React from 'react'
import { pageText } from 'constant'

import {
  StyledRepositoryForm,
  StyledRepositoryInputSubmit,
  StyledRepositoryInputText,
  StyledRepositoryLabel,
} from './style'

const RepositoryForm = ({ handleChange, handleSubmit, inputValue }) => {
  return (
    <StyledRepositoryForm onSubmit={handleSubmit}>
      <StyledRepositoryLabel>{pageText.labelRepositoryUrl}</StyledRepositoryLabel>
      <StyledRepositoryInputText
        type="text"
        onChange={handleChange}
        value={inputValue}
        placeholder={pageText.inputRepositoryPlaceholder}
      />
      <StyledRepositoryInputSubmit type="submit" value="Submit" />
    </StyledRepositoryForm>
  )
}

export default RepositoryForm
