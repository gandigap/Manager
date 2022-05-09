import React from 'react'

import { StyledErrorContainer } from './style'

const ErrorContainer = ({ errorMessage }) => (
  <StyledErrorContainer>{errorMessage}</StyledErrorContainer>
)

export default ErrorContainer
