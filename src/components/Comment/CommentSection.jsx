import React, { useState } from 'react'
import CommentList from './CommentList'
import Button from '@material-ui/core/Button'
import CommentIcon from '@material-ui/icons/Comment';
import CancelIcon from '@material-ui/icons/Cancel';
import CreateComment from '../CreateComponents/CreateComment/CreateComment'
import { createComment, deleteComment, updateComment } from '../../services/commentService'
import * as CommentSectionStyles from './CommentSection.module.css'

const CommentSection = (props) => {
    const [ toggleNewComment, setToggleNewComment ] = useState(false)
    const [ editing, setEditing ] = useState([props.park.comments])

    const handleCreateComment = async (formData) => {
        try {
            const newComment = await createComment(props.park._id, formData)
            newComment.author = props.user.profile
            props.setCommentArray([...props.commentArray, newComment])
            props.handleMatchState(props.park._id)
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
        <>
        <div className={CommentSectionStyles.header}>
                <h3>Comments</h3>
                    {props.user &&
                        !props.toggleUpdateForm &&
                            !toggleNewComment ?
                        <Button
                        color="primary"
                        size="small"
                        startIcon={<CommentIcon />}
                        onClick={() => setToggleNewComment(!toggleNewComment)}
                        >
                        New Comment
                        </Button>
                        : 
                        <Button
                        color="secondary"
                        size="small"
                        endIcon={<CancelIcon />}
                        onClick={() => {
                            setToggleNewComment(false)
                            props.setToggleUpdateForm(false)
                            }
                        }
                        >Cancel</Button>
                    }
            </div>

        <div className="comment-section">
            {toggleNewComment &&
                <CreateComment
                    {...props}
                    handleCreateComment={handleCreateComment}
                    setToggleNewComment={setToggleNewComment}
                ></CreateComment>
            }
            
            {!toggleNewComment &&
            <CommentList
                {...props} 
                handleUpdateComment={handleUpdateComment} 
                handleDeleteComment={handleDeleteComment} 
                editing={editing}
                setEditing={setEditing}
                handleSetEditing={handleSetEditing}
                setToggleNewComment={setToggleNewComment}
                toggleNewComment={toggleNewComment}
             />
            }
        </div>
    </>
    )
}

export default CommentSection