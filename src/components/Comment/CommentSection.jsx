import React, { useState } from 'react'
import CommentList from './CommentList'
import CreateComment from '../CreateComponents/CreateComment/CreateComment'
import { createComment, deleteComment, } from '../../services/commentService'

const CommentSection = () => {
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

    return (
        <h2>Comments go here</h2>
    )
}

export default CommentSection