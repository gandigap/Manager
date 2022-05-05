import { gql } from '@apollo/client'

export const GET_ISSUES = gql`
  query getIssues($ownerName: String!, $repositoryName: String!) {
    repository(owner: $ownerName, name: $repositoryName) {
      id
      name
      issues(first: 10) {
        edges {
          node {
            id
            title
            author {
              login
            }
            body
            comments(first: 10) {
              edges {
                node {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`

export const GET_CUSTOM_REPOSITORY = gql`
  query getIssues($inputValue: String!) {
    user(login: $inputValue) {
      id
      name
      repositories(last: 10, orderBy: { field: CREATED_AT, direction: DESC }) {
        pageInfo {
          endCursor
          startCursor
        }
      }
    }
  }
`
