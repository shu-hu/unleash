import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import CommentSection from '../Comment/CommentSection'
import ParkUpdateForm from '../Park/ParkUpdateForm'

const ParkCard = () => {
    const location = useLocation()
    const { park } = location.state
    const [ toggleUpdate, setToggleUpdate ] = useState(false)

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
        <ParkUpdateForm park={park} />
        </>
    )
}

export default ParkCard