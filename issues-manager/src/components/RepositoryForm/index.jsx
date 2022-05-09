import React from 'react'

import { pageText } from 'constant'
import InputSubmit from 'components/InputSubmit'

import { StyledRepositoryForm, StyledRepositoryInputText, StyledRepositoryLabel } from './style'

const RepositoryForm = ({ handleChange, handleSubmit, inputValue }) => (
  <StyledRepositoryForm onSubmit={handleSubmit}>
    <StyledRepositoryLabel>{pageText.labelRepositoryUrl}</StyledRepositoryLabel>
    <StyledRepositoryInputText
      type="text"
      onChange={handleChange}
      value={inputValue}
      placeholder={pageText.inputRepositoryPlaceholder}
      title={pageText.inputRepositoryExample}
    />
    <InputSubmit />
  </StyledRepositoryForm>
)

export default RepositoryForm
