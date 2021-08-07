import React, { useState } from "react"

const CreateComment = (props) => {
    const [text, setText] = useState('')
    const [likes, setLikes] = useState('')
    const [dislikes, setDislikes] = useState('')

    const handleSubmit = (e) => {
		e.preventDefault()
		const formData = {
            genComments: text,
            likes: likes,
            dislikes: dislikes,
            //TODO
            // park_id: props.park._id,
            // author: props.profile._id,
		}
		props.handleCreateComment(formData)
    }

    // TODO
    // const handleCreateComment = (e) => {
    //     e.preventDefault()
    // }

    return (
        <form  className="create-form">
            <div className="question-prompt">
                    <label>Enter your Comment</label>
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

export default CreateComment