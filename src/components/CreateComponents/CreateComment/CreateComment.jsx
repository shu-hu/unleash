import React, { useState } from "react"
import Button from '@material-ui/core/Button'
import * as CreateCommentStyles from './CreateComment.module.css'

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
		}
		props.handleCreateComment(formData)
        props.setToggleNewComment(false)
    }

    return (
        <form className={CreateCommentStyles.createForm} onSubmit={handleSubmit}>
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
            
            <div className={CreateCommentStyles.border}></div>
            
            <Button type="submit" color="primary"> 
                Submit
            </Button>
        </form>
    )
}

export default CreateComment