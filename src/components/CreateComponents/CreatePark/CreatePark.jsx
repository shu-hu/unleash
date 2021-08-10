import React, { useState } from 'react'
import * as createParkStyles from '../Create.module.css'

// Components
import ParkForm from './ParkForm'

const CreatePark = (props) => {
    const [parkName, setParkName] = useState('')
    const [address, setAddress] = useState('')
    const [description, setDescription] = useState('')
    const [openTime, setOpenTime] = useState("07:00")
    const [closeTime, setCloseTime] = useState("22:00")

    const handleSubmit = (e) => {
        console.log(openTime, closeTime)
        e.preventDefault()
        const formData = {
            parkName: parkName,
            address: address,
            description: description,
            openTime: openTime,
            closeTime: closeTime,
        }
        props.handleCreatePark(formData)
        props.setToggleMap(true)
    }

    return (
        <div className={createParkStyles.background}>
            <ParkForm
                parkName = {parkName}
                setParkName = {setParkName}
                address = {address}
                setAddress = {setAddress}
                description = {description}
                setDescription = {setDescription}
                openTime = {openTime}
                setOpenTime = {setOpenTime}
                closeTime = {closeTime}
                setCloseTime = {setCloseTime}
                handleSubmit = {handleSubmit}
            />
        </div>
    )
}

export default CreatePark