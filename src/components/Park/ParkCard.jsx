import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import CommentSection from '../Comment/CommentSection'
import ParkUpdateForm from '../Park/ParkUpdateForm'
import { updatePark } from '../../services/parkService'

const ParkCard = (props) => {
    const location = useLocation()
    const { park } = location.state
    const [ toggleUpdate, setToggleUpdate ] = useState(false)

    const handleUpdatePark = async (id, formData) => {
        try {
            const updatedPark = await updatePark(id, formData)
            updatedPark.added_by = props.user
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
        </>
    )
}

export default ParkCard