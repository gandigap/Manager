import { gql } from '@apollo/client'

export const GET_ISSUES = gql`
  query getIssues($ownerName: String!, $repositoryName: String!) {
    repository(name: $repositoryName, owner: $ownerName) {
      id
      name
      issues(states: OPEN, first: 10) {
        edges {
          node {
            id
            title
            body
            number
            comments(first: 10) {
              totalCount
            }
          }
        }
      }
    }
  }
`

export const GET_ISSUE = gql`
  query getIssue($number: Int!, $ownerName: String!, $repositoryName: String!) {
    repository(owner: $ownerName, name: $repositoryName) {
      id
      name
      issue(number: $number) {
        body
        comments(first: 10) {
          edges {
            node {
              id
              author {
                login
              }
              body
            }
          }
        }
      }
    }
  }
`

/*query MyQuery {
  gitHub(
    auths: {
      gitHubOAuthToken: "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"
    }
  ) {
    repository(owner: "gandigap", name: "manager") {
      issues(states: OPEN, first: 10) {
        totalCount
        edges {
          node {
            bodyText
            title
          }
        }
      }
    }
  }
}
 */

/*query MyQuery {
  gitHub(
    auths: {
      gitHubOAuthToken: "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"
    }
  ) {
    repository(owner: "gandigap", name: "manager") {
      issue(number: 1) {
        body
      }
    }
  }
}
 */
