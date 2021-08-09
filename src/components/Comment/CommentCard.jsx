import React, { useState } from "react"
import CommentActions from './CommentActions'

const CommentCard = (props) => {
    const [ toggleUpdateForm, setToggleUpdateForm ] = useState(false)

    const handleToggle = () => {
        setToggleUpdateForm(!toggleUpdateForm)
    }

    return (
        <div className="comment-card">

            <div className="card-header">
                <CommentActions
                    toggleUpdateForm={toggleUpdateForm}
                    handleToggle={handleToggle}
                    {...props} 
                />
            </div>
            {!toggleUpdateForm && 
            <div className="comment-container">
                <p>
                    {props.comment.genComments}
                    {props.comment.likes}
                    {props.comment.dislikes}
                </p>
            </div>
            }
        </div>
    )
}

export default CommentCard