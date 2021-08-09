import React from 'react'

const CommentActions = (props) => {
    console.log(props)
    return (
        props ?
        <div>
            {
                props.user &&
                props.user.profile._id === props.comment.author._id &&
                <button onClick={() => props.handleDeleteComment(props.comment._id)}>
                    Delete
                </button>
            }
            {
                props.user &&
                props.user.profile._id === props.park.added_by._id &&
                <button onClick={() => props.handleUpdateComment(props.comment._id)}>
                    Edit
                </button>
            }
        </div>
        :
        <p>loading...</p>
    )
}

export default CommentActions