import styled from 'styled-components'

export const StyledRepositoryForm = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledRepositoryLabel = styled.label`
  color: #fff;
  font-size: 22px;
`

export const StyledRepositoryInputText = styled.input`
  margin: 4px;
  padding: 4px;
  border-radius: 5px;

  &::placeholder {
    font-style: italic;
  }
`
