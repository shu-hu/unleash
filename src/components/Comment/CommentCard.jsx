import React from "react"
import CommentActions from './CommentActions'

const CommentCard = (props) => {

    return (
        <div className="comment-card">

            <div className="card-header">
                <CommentActions
                    {...props} />
            </div>

            <div className="comment-container">
                <p>
                    {props.comment.genComments}
                    {props.comment.likes}
                    {props.comment.dislikes}
                </p>
            </div>
        </div>
    )
}

export default CommentCard