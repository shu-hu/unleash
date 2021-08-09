import React from 'react'
import CommentUpdateForm from './CommentUpdateForm'

const CommentActions = (props) => {
    return (
        props ?
        <div>
            {
                props.user &&
                props.user.profile._id === props.comment.author &&
                <button onClick={() => props.handleDeleteComment(props.comment._id)}>
                    Delete
                </button>
            }
            {
                props.user &&
                props.user.profile._id === props.park.added_by._id &&
                <button onClick={props.handleToggle}>
                    Edit
                </button>
            }
            {props.toggleUpdateForm &&
                <CommentUpdateForm 
                {...props} />
            }
        </div>
        :
        <p>loading...</p>
    )
}

export default CommentActions