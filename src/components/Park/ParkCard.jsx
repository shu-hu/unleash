import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import CommentSection from '../Comment/CommentSection'
import ParkUpdateForm from '../Park/ParkUpdateForm'
import ParkFeatureList from './ParkFeatureList'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { updatePark, deletePark, getParkById } from '../../services/parkService'
import * as parkStyles from './Park.module.css'

const ParkCard = (props) => {
    const history = useHistory()
    const id = useParams()
    const [ toggleUpdate, setToggleUpdate ] = useState(false)
    const [ park, setPark ] = useState(null)
    const [ commentArray, setCommentArray ] = useState([])
    const [ toggleUpdateForm, setToggleUpdateForm ] = useState(false)

    useEffect(() => {
        (async() => {
            const parkData = await getParkById(id.park_id)
            await setPark(parkData)
            setCommentArray(parkData.comments)
        })()
        return () => { setPark(null) }
    }, [toggleUpdate, id.park_id])
    

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

    return (
        <main className={parkStyles.mainContainer}>
        { !toggleUpdate ?
            park &&
            <>
            <Box className={parkStyles.leftSide}>
                <Box className={parkStyles.cardContainer} elevation={3}>
                <Paper elevation={3}>
                    <h1>{park.parkName}</h1>
                    <h2>{park.address}</h2>
                </Paper>

                    <ParkFeatureList park={park}/>
                    { props.user &&
                    props.user.profile === park.added_by &&
                    <>
                        <Button
                            variant="contained"
                            color="default"
                            startIcon={<EditIcon />}
                            onClick={handleClick}
                        >
                            Update
                        </Button>
                    
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<DeleteIcon />}
                            onClick={() => handleDeletePark(park._id)}
                        >
                            Delete
                        </Button>
                    </>
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