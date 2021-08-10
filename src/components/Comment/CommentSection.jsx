import React, { useState} from 'react'
import CommentList from './CommentList'
import Button from '@material-ui/core/Button'
import CommentIcon from '@material-ui/icons/Comment';
import CreateComment from '../CreateComponents/CreateComment/CreateComment'
import { createComment, deleteComment, updateComment } from '../../services/commentService'


const CommentSection = (props) => {
    const [toggleNewComment, setToggleNewComment] = useState(false)

    const handleCreateComment = async (formData) => {
        try {
            const newComment = await createComment(props.park._id, formData)
            newComment.author = props.user.profile
            props.setCommentArray([...props.commentArray, newComment])
        } catch (error) {
            throw error
        }
    }

    const handleDeleteComment = async (commentId) => {
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

    return (
        <div className="comment-section">
            <div className="header">
                <h3>Comment Section</h3>
                <div className="header-buttons">
                    {props.user &&
                        <Button
                        variant="contained"
                        color="default"
                        startIcon={<CommentIcon />}
                        onClick={() => setToggleNewComment(!toggleNewComment)}
                        >
                        New Comment
                        </Button>
                    }
                </div>
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
             />

        </div>
    )
}

export default CommentSection