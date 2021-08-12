import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Box from '@material-ui/core/Box'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import * as CommentActionStyles from './CommentSection.module.css'

const CommentActions = (props) => {

    const handleClick = () => {
        props.setToggleUpdateForm(true)
        props.handleSetEditing(props.comment._id)
    }

    return (
        props &&
        !props.toggleUpdateForm &&
        <Box className={CommentActionStyles.commentActions}>
            {
                props.user &&
                props.user.profile === props.park.added_by &&
                <IconButton onClick={handleClick}>
                    <EditIcon />
                </IconButton>
            }
             {
                props.user &&
                props.user.profile === props.comment.author._id &&
                <IconButton onClick={() => props.handleDeleteComment(props.comment._id)}>
                    <DeleteIcon />
                </IconButton>
            }
        </Box>
    );
}

export default CommentActions