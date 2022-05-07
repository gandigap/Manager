import React from 'react'

const ListIssueComments = ({ comments }) => {
  console.log(comments)

  const renderComments = () => {
    return (
      comments &&
      comments.map(({ node }) => {
        console.log(node)
        return <div key={node.id}>{node.body}</div>
      })
    )
  }
  return (
    <div>
      <p>List comments</p>
      {renderComments()}
    </div>
  )
}

export default ListIssueComments
