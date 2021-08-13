import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import CommentSection from '../Comment/CommentSection'
import ParkUpdateForm from '../Park/ParkUpdateForm'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import CardMedia from '@material-ui/core/CardMedia';
import { updatePark, deletePark, getParkById, fetchUrl } from '../../services/parkService'
import * as parkStyles from './Park.module.css'
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';

const ParkCard = (props) => {
    const history = useHistory()
    const params = useParams()
    const [ toggleUpdate, setToggleUpdate ] = useState(false)
    const [ park, setPark ] = useState(null)
    const [ commentArray, setCommentArray ] = useState([])
    const [ photoUrl, setPhotoUrl ] = useState(null)
    const [ toggleUpdateForm, setToggleUpdateForm ] = useState(false)
    const wideCardMediaStyles = useWideCardMediaStyles();

    useEffect(() => {
        (async() => {
            const parkData = await getParkById(params.park_id)
            await setPark(parkData)
            setCommentArray(parkData.comments)
        })()
        return () => { setPark(null) }
    }, [toggleUpdate])

    useEffect(() => {
        if(park) {
        (async() => {
            console.log(park)
            if (park.details_id.slice(-1) === "=") {
                const imageUrl = await fetchUrl(park.details_id)
                setPhotoUrl(imageUrl)
            } else {
                setPhotoUrl('https://i.ytimg.com/vi/FHytoCvj90w/maxresdefault.jpg')
            }
        })()
    }
    }, [park])
    
    const handleUpdatePark = async (id, formData) => {
        try {
            const updatedPark = await updatePark(id, formData)
            updatedPark.added_by = props.user.profile._id
            setToggleUpdate(false)
        } catch (error) {
            throw error
        }
    }

    const handleDeletePark = async (id) => {
        try {
            await deletePark(id)
            history.push('/')
        } catch (error) {
            throw error
        }
    }

    const handleToggle = () => {
        setToggleUpdateForm(!toggleUpdateForm)
    }

    const handleClick = () => {
        setToggleUpdate(!toggleUpdate)
    }

    const toRegularTime = (militaryTime) => {
        const [hours, minutes, seconds] = militaryTime.split(':');
        return `${(hours > 12) ? hours - 12 : hours}:${minutes}${seconds ? `:${seconds}` : ''} ${(hours >= 12) ? 'PM' : 'AM'}`;
    }

    return (
        <main className={parkStyles.mainContainer}>
        { !toggleUpdate ?
            park &&
            <>
            <Box className={parkStyles.leftSide}>
                <Box className={parkStyles.cardDetailsContainer} elevation={3}>
                <CardMedia
                    classes={wideCardMediaStyles}
                    image={ photoUrl && photoUrl }
                />
                <Box m={2}></Box>
                <Typography variant="h4" gutterBottom>
                    {park.parkName}
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    {park.address}
                </Typography>
                <Box m={2}></Box>
                <Typography variant="body1" gutterBottom>
                    {park.description}
                </Typography>
                <Box m={2}></Box>
            { park.openTime &&
            <Box className={parkStyles.timeContainer}>
                <Typography variant="subtitle1" gutterBottom>
                    Opens: {toRegularTime(park.openTime)}
                </Typography>
                <Box m={2}></Box>
                <Typography varient="subtitle1" gutterBottom>
                    Closes: {toRegularTime(park.closeTime)}
                </Typography>
            </Box>
            }
            <Box m={2}></Box>
                { props.user &&
                    props.user.profile === park.added_by &&
                    <Box px={3} pb={3} pr={0} className={parkStyles.btnContainer}>
                        <Button
                            variant="contained"
                            color="default"
                            startIcon={<EditIcon />}
                            onClick={handleClick}
                        >
                            Update
                        </Button>
                        <Box m={1}></Box>
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<DeleteIcon />}
                            onClick={() => handleDeletePark(park._id)}
                        >
                            Delete
                        </Button>
                    </Box>
                    }
                </Box>
            </Box>
            <Box className={parkStyles.commentList}>
            <CommentSection
                    park={park}
                    setPark={setPark}
                    user={props.user}
                    commentArray={commentArray}
                    setCommentArray={setCommentArray}
                    handleToggle={handleToggle}
                    toggleUpdateForm={toggleUpdateForm}
                    setToggleUpdateForm={setToggleUpdateForm}
                     />
            </Box>
            </>
        :
        park &&
                <ParkUpdateForm 
                    park={park} 
                    commentArray={commentArray}
                    handleUpdatePark={handleUpdatePark}
                    setToggleUpdate={setToggleUpdate}
                />
        }
        </main>
    )
}

export default ParkCard