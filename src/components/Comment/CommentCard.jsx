import React, { useState } from "react"
import CommentActions from './CommentActions'

const CommentCard = (props) => {
    return (
        <div className="comment-card">
            <div className="card-header">
                <CommentActions
                    toggleUpdateForm={props.toggleUpdateForm}
                    handleToggle={props.handleToggle}
                    {...props} 
                />
            </div>
            {!props.toggleUpdateForm && 
            <div className="comment-container">
                <p>{props.comment.genComments}</p>
                <p>{props.comment.likes}</p>
                <p>{props.comment.dislikes}</p>
            </div>
            }
        </div>
    )
}

export default CommentCard