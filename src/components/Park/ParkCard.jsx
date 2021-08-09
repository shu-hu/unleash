import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import CommentSection from '../Comment/CommentSection'
import ParkUpdateForm from '../Park/ParkUpdateForm'
import { updatePark, deletePark, getParkById } from '../../services/parkService'

const ParkCard = (props) => {
    const history = useHistory()
    const location = useLocation()
    const { park } = location.state
    const [toggleUpdate, setToggleUpdate] = useState(false)

    const { id } = park._id
    const [parkDetail, setPark] = useState()
    const [commentArray, setCommentArray] = useState([])
    useEffect(() => {
        const fetchPark = async () => {
            try {
                const parks = await getParkById(id)
                setPark(parks)
                setCommentArray(parks.comments)

            } catch (error) {
                throw error
            }
        }
        fetchPark()
        return () => { setPark(null) }
    }, [id])

    const handleUpdatePark = async (id, formData) => {
        try {
            const updatedPark = await updatePark(id, formData)
            updatedPark.added_by = props.user.profile._id
            history.push(`/api/parks/details/${park._id}`)
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
            <div>
                <h1>{park.parkName}</h1>
                <CommentSection
                    parkDetail={parkDetail}
                    setPark={setPark}
                    user={props.user}
                    commentArray={commentArray}
                    setCommentArray={setCommentArray} />
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