import styled from 'styled-components'

export const StyledApp = styled.div`
  margin: 40px auto;
  max-width: 900px;

  @media (max-width: 992px) {
    max-width: 700px;
  }

  @media (max-width: 768px) {
    margin: 40px 20px;
  }
`

export const StyledAppTitle = styled.h2`
  text-align: center;
  font-weight: bold;
  font-size: 36px;
`
