import React, { useState } from "react"
import Button from '@material-ui/core/Button'
import * as CreateCommentStyles from './CreateComment.module.css'
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Checkbox from '@material-ui/core/Checkbox'
import { useEffect } from "react"

const labels = {
    1: 'Terrible',
    2: 'Mediocre',
    3: 'Ok',
    4: 'Good',
    5: 'Excellent',
}
const featureLabels = [
    'Fully Fenced', 
    'Partially Fenced', 
    'Off-Leash Area', 
    'Small Dog Friendly', 
    'Agility', 
    'Swimming', 
    'Drinking Water', 
    'Wash Station',
    'Poo Bags',
    'Trash',
    'Restrooms',]

const CreateComment = (props) => {
    const [ text, setText ] = useState('')
    const [ likes, setLikes ] = useState('')
    const [ dislikes, setDislikes ] = useState('')
    const [ stars, setStars ] = useState(5)
    const [ hover, setHover] = useState(-1);
    const [ checked, setChecked ] = useState([0]);
    const [ features, setFeatures ] = useState([])

    const handleSubmit = (e) => {
		e.preventDefault()
		const formData = {
            genComments: text,
            likes: likes,
            dislikes: dislikes,
            rating: stars,
            features: features,
		}
		props.handleCreateComment(formData)
        props.setToggleNewComment(false)
    }

    const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  }

  useEffect(() => {console.log(features)}, [features])


    return (
        <form className={CreateCommentStyles.createForm} onSubmit={handleSubmit}>
            <div className="question-prompt">
                    <label>Enter Comment:</label>
            </div>
            <div className={CreateCommentStyles.formContainer}>

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

            <List>
            {featureLabels.map((feature, value) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
            <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={featureLabels[value]} />
          </ListItem>
               );
            })}
            </List>
            
            <div className={CreateCommentStyles.border}></div>
            
            <Button type="submit" color="primary"> 
                Submit
            </Button>
            </div>
        </form>
    )
}

export default CreateComment