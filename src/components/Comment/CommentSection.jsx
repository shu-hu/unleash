import React, { useState} from 'react'
import CommentList from './CommentList'
import Button from '@material-ui/core/Button'
import CommentIcon from '@material-ui/icons/Comment';
import CreateComment from '../CreateComponents/CreateComment/CreateComment'
import { createComment, deleteComment, updateComment } from '../../services/commentService'
import * as CommentSectionStyles from './CommentSection.module.css'

const CommentSection = (props) => {
    const [toggleNewComment, setToggleNewComment] = useState(false)
    const [ editing, setEditing ] = useState([props.park.comments])

    const handleCreateComment = async (formData) => {
        try {
            const newComment = await createComment(props.park._id, formData)
            newComment.author = props.user.profile
            props.setCommentArray([...props.commentArray, newComment])
        } catch (error) {
            throw error
        }
    }

    const handleDeleteComment = async commentId => {
        try {
            await deleteComment(props.park._id, commentId)
            props.setCommentArray(props.commentArray.filter(comment => comment._id !== commentId))
        } catch (error) {
            throw error
        }
    }

    const handleUpdateComment = async (commentId, parkData) => {
        try {
            await updateComment(props.park._id, commentId, parkData)
            setToggleNewComment(false)
        } catch (err) {
            throw err
        }
    }

    const handleSetEditing = commentId => {
        const newEditing = [...editing]
        newEditing[0].map(comment => {
           return comment._id === commentId ? comment.editing = true : comment.editing = false
        })
        setEditing(newEditing)
    }

    return (
        <div className="comment-section">
            <div className={CommentSectionStyles.header}>
                <h3>Comments</h3>
                    {props.user &&
                        !props.toggleUpdateForm &&
                        <Button
                        color="primary"
                        size="small"
                        startIcon={<CommentIcon />}
                        onClick={() => setToggleNewComment(!toggleNewComment)}
                        >
                        New Comment
                        </Button>
                    }
            </div>

            {toggleNewComment &&
                <CreateComment
                    {...props}
                    handleCreateComment={handleCreateComment}
                    setToggleNewComment={setToggleNewComment}
                ></CreateComment>
            }

            <CommentList
                {...props} 
                handleUpdateComment={handleUpdateComment} 
                handleDeleteComment={handleDeleteComment} 
                editing={editing}
                setEditing={setEditing}
                handleSetEditing={handleSetEditing}
             />

        </div>
    )
}

export default CommentSection