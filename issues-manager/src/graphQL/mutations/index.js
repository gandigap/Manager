import { gql } from '@apollo/client'

export const ADD_COMMENT = gql`
  mutation addCommentToIssue($idIssue: ID!, $body: String!) {
    addComment(input: { subjectId: $idIssue, body: $body }) {
      clientMutationId
    }
  }
`
