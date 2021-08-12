import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

const CommentActions = (props) => {

    const handleClick = () => {
        props.setToggleUpdateForm(true)
        props.handleSetEditing(props.comment._id)
    }

    return (
        props &&
        !props.toggleUpdateForm &&
        <>
            {
                props.user &&
                props.user.profile === props.comment.author._id &&
                <IconButton onClick={() => props.handleDeleteComment(props.comment._id)}>
                    <DeleteIcon />
                </IconButton>
            }
            {
                props.user &&
                props.user.profile === props.park.added_by &&
                <IconButton onClick={handleClick}>
                    <EditIcon />
                </IconButton>
            }
        </>
    );
}

export default CommentActions