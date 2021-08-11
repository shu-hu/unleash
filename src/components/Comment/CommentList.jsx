import React from "react"
import CommentCard from './CommentCard'
import CommentUpdateForm from './CommentUpdateForm'

const CommentList = (props) => {
    return (
        !props.toggleUpdateForm ?
        props.commentArray.map((comment) => (
            <CommentCard
                key={comment._id}
                comment={comment}
                {...props}
            />
        ))
        :
        <CommentUpdateForm {...props} />
    )
}

export default CommentList