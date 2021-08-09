import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import CommentSection from '../Comment/CommentSection'
import ParkUpdateForm from '../Park/ParkUpdateForm'
import { updatePark, deletePark, getParkById } from '../../services/parkService'

const ParkCard = (props) => {
    const history = useHistory()
    const id = useParams()
    const [toggleUpdate, setToggleUpdate] = useState(false)
    const [park, setPark] = useState(null)
    const [commentArray, setCommentArray] = useState([])

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

    const handleClick = () => {
        setToggleUpdate(!toggleUpdate)
    }


    return (
        !toggleUpdate ?
        park &&
            <div>
                <h1>{park.parkName}</h1>
                <CommentSection
                    parkDetail={park}
                    setPark={setPark}
                    user={props.user}
                    commentArray={commentArray}
                    setCommentArray={setCommentArray} />
                <button onClick={handleClick}>Update</button>
            </div>
            :
        park &&
            <>
                <ParkUpdateForm park={park} handleUpdatePark={handleUpdatePark} />
                <button onClick={() => handleDeletePark(park._id)}>Delete</button>
            </>
    )
}

export default ParkCard