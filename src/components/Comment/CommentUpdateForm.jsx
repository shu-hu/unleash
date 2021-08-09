import React, { useState } from "react"

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
    }

    return (
        <form  className="create-form" onSubmit={handleSubmit}>
            <div className="question-prompt">
                    <label>Enter Comment:</label>
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