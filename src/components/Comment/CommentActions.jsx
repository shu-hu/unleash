import React, { useState } from 'react'
import CommentUpdateForm from './CommentUpdateForm'

const CommentActions = (props) => {
    const [ toggleUpdateForm, setToggleUpdateForm ] = useState(false)

    const handleToggle = () => {
        setToggleUpdateForm(!toggleUpdateForm)
    }

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
                <button onClick={handleToggle}>
                    Edit
                </button>
            }
            {toggleUpdateForm &&
                <CommentUpdateForm handleUpdateComment={props.handleUpdateComment} {...props} />
            }
        </div>
        :
        <p>loading...</p>
    )
}

export default CommentActions