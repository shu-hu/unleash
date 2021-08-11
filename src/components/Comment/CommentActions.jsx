import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

const CommentActions = (props) => {
    return (
        props &&
        !props.toggleUpdateForm &&
        <>
            {
                props.user &&
                props.user.profile === props.comment.author &&
                <IconButton onClick={() => props.handleDeleteComment(props.comment._id)}>
                    <DeleteIcon />
                </IconButton>
            }
            {
                props.user &&
                props.user.profile === props.park.added_by &&
                <IconButton onClick={props.handleToggle}>
                    <EditIcon />
                </IconButton>
            }
        </>
    );
}

export default CommentActions