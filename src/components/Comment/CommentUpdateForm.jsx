import React, { useState } from "react"
import * as createParkStyles from '../CreateComponents/Create.module.css'

const CommentUpdateForm = (props) => {
    const [text, setText] = useState(props.comment.genComments)
    const [likes, setLikes] = useState(props.comment.likes)
    const [dislikes, setDislikes] = useState(props.comment.dislikes)
    
    const handleSubmit = (e) => {
		e.preventDefault()
		const formData = {
            genComments: text,
            likes: likes,
            dislikes: dislikes,
		}
		props.handleUpdateComment(props.comment._id, formData)
        props.handleToggle()
    }

    return (
        <form  className={createParkStyles.createForm} onSubmit={handleSubmit}>
            <div className="question-prompt">
                    <label>Update Comment:</label>
            </div>
            
            <input
                required
                autoComplete='off'
                placeholder="Comment"
                name="genComments"
                value={text}
                onChange={(e) => setText(e.target.value)}>
            </input>

            <input
                autoComplete='off'
                placeholder="Likes"
                name="likes"
                value={likes}
                onChange={(e) => setLikes(e.target.value)}>
            </input>

            <input
                autoComplete='off'
                placeholder="Dislikes"
                name="dislikes"
                value={dislikes}
                onChange={(e) => setDislikes(e.target.value)}>
            </input>
            
            <div className="border"></div>
            
            <button type="submit">Submit</button>
        </form>
    )
}

export default CommentUpdateForm