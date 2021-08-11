import React, { useState } from "react"
import * as createParkStyles from '../CreateComponents/Create.module.css'
import * as commentSectionStyles from '../Comment/CommentSection.module.css'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Rating from '@material-ui/lab/Rating'

const labels = {
    1: 'Terrible',
    2: 'Mediocre',
    3: 'Ok',
    4: 'Good',
    5: 'Excellent',
}

const CommentUpdateForm = (props) => {
    const [text, setText] = useState(props.comment.genComments)
    const [likes, setLikes] = useState(props.comment.likes)
    const [dislikes, setDislikes] = useState(props.comment.dislikes)
    const [ stars, setStars ] = useState(props.comment.rating)
    const [ hover, setHover] = useState(-1);
    
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
            
            <TextField
                required
                multiline
                fullWidth
                maxRows={4}
                variant="outlined"
                label="Comment"
                autoComplete='off'
                name="genComments"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <TextField
                fullWidth
                label="Likes"
                variant="outlined"
                autoComplete='off'
                name="likes"
                value={likes}
                onChange={(e) => setLikes(e.target.value)}
            />

            <TextField 
                fullWidth
                label="Dislikes" 
                variant="outlined" 
                autoComplete='off'
                name="dislikes"
                value={dislikes}
                onChange={(e) => setDislikes(e.target.value)}
            />

            <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Rating:</Typography>
            <Rating
                name="stars"
                value={stars}
                onChange={(event, newValue) => {setStars(newValue)}}
                onChangeActive={(event, newHover) => {setHover(newHover);}}
            />
            {stars !== null && <Box ml={2}>{labels[hover !== -1 ? hover : stars]}</Box>}
            </Box>
            
            <div className="border"></div>
            
            <button type="submit">Submit</button>
        </form>
    )
}

export default CommentUpdateForm