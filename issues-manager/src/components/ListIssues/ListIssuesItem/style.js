import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledListIssuesItem = styled.div`
  margin: 10px;
  padding: 4px 20px;
  display: flex;
  flex-direction: column;
  background-color: #999;
  border-radius: 10px;

  &:hover {
    opacity: 0.9;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;

  &:hover {
    color: #fff;
  }
`

export const StyledListIssuesItemTitle = styled.h3`
  font-weight: bold;
`

export const StyledListIssuesItemBody = styled.p`
  font-size: 16px;
  font-style: italic;
`
export const StyledListIssuesItemComments = styled.p`
  font-weigtn: bold;
`
