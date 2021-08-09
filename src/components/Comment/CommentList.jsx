import React from "react"
import CommentCard from './CommentCard'

const CommentList = (props) => {
    console.log(props.commentArray)
    return (
        props.commentArray.map((comment) => (
            <CommentCard
                key={comment._id}
                comment={comment}
                {...props}
            />
        ))
    )
}

export default CommentList