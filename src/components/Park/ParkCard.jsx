import React from 'react'
import { useLocation } from 'react-router-dom'
import CommentSection from '../Comment/CommentSection'

const ParkCard = () => {
    const location = useLocation()
    const { park } = location.state

    return(
        <div>
        <h1>{park.parkName}</h1>
        <CommentSection />
        </div>
    )
}

export default ParkCard