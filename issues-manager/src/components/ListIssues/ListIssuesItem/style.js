import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledListIssuesItem = styled.div`
  margin: 10px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  background-color: #999;
  border-radius: 10px;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const StyledListIssuesItemTitle = styled.h3`
  font-style: italic;
`

export const StyledListIssuesItemBody = styled.p`
  font-size: 18px;
`
