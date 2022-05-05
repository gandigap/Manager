import { gql } from '@apollo/client'

export const ADD_COMMENT = gql`
  mutation CreateIssue {
    addComment(input: { subjectId: "I_kwDOHR9UBM5JHXyT", body: "hi", clientMutationId: "dsds" }) {
      clientMutationId
    }
  }
`
