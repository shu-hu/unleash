import React, { useState } from "react"
import * as CreateCommentStyles from '../CreateComponents/CreateComment/CreateComment.module.css'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Rating from '@material-ui/lab/Rating'
import Button from '@material-ui/core/Button'

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
            rating: stars
		}
		props.handleUpdateComment(props.comment._id, formData)
        props.handleToggle()
    }

    return (
        <form  className={CreateCommentStyles.createForm} onSubmit={handleSubmit}>
            <div className="question-prompt">
                    <label>Update Comment:</label>
            </div>
        <div className={CreateCommentStyles.inputContainer}>
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
            <Box m={1}></Box>
            <TextField
                fullWidth
                label="Likes"
                variant="outlined"
                autoComplete='off'
                name="likes"
                value={likes}
                onChange={(e) => setLikes(e.target.value)}
            />
            <Box m={1}></Box>
            <TextField 
                fullWidth
                label="Dislikes" 
                variant="outlined" 
                autoComplete='off'
                name="dislikes"
                value={dislikes}
                onChange={(e) => setDislikes(e.target.value)}
            />
        </div>
            <Box component="fieldset" mt={3} borderColor="transparent" display="flex">
            <Typography component="legend">Rating:</Typography>
            <Rating
                name="stars"
                value={stars}
                onChange={(event, newValue) => {setStars(newValue)}}
                onChangeActive={(event, newHover) => {setHover(newHover);}}
            />
            {stars !== null && <Box ml={2} mt={1.5}>{labels[hover !== -1 ? hover : stars]}</Box>}
            </Box>
            
            <div className={CreateCommentStyles.border}></div>
            <Button type="submit" color="primary" variant="outlined" fullWidth> 
                    Submit
            </Button>
        </form>
    )
}

export default CommentUpdateForm