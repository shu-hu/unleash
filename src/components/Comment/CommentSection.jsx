import React, { useState } from 'react'
import CommentList from './CommentList'
import CreateComment from '../CreateComponents/CreateComment/CreateComment'
import { createComment, deleteComment, } from '../../services/commentService'

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

    const handleUpdateComment = async (commentId) => {
        try {
            console.log("update comment works!")
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
                        <button onClick={() => setToggleNewComment(!toggleNewComment)}>
                            New Comment
                        </button>
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

            <CommentList {...props} handleUpdateComment={handleUpdateComment} handleDeleteComment={handleDeleteComment} />

        </div>
    )
}

export default CommentSection