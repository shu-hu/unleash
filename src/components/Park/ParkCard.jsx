import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import CommentSection from '../Comment/CommentSection'
import ParkUpdateForm from '../Park/ParkUpdateForm'
import { updatePark, deletePark } from '../../services/parkService'

const ParkCard = (props) => {
    const location = useLocation()
    const { park } = location.state
    const [ toggleUpdate, setToggleUpdate ] = useState(false)

    const handleUpdatePark = async (id, formData) => {
        try {
            const updatedPark = await updatePark(id, formData)
            updatedPark.added_by = props.user.profile._id
        } catch (error) {
            throw error
        }
    }

    const handleDeletePark = async (id) => {
        try {
            await deletePark(id)
        } catch (error) {
            throw error
        }
    }

    const handleClick = () => {
        setToggleUpdate(!toggleUpdate)
    }

    return(
        !toggleUpdate ? 
        <div>
        <h1>{park.parkName}</h1>
        <CommentSection />
    {/* auth */}
        <button onClick={handleClick}>Update</button>

        </div>
        :
        <>
        <ParkUpdateForm park={park} handleUpdatePark={handleUpdatePark} />
        <button onClick={() => handleDeletePark(park._id)}>Delete</button>
        </>
    )
}

export default ParkCard