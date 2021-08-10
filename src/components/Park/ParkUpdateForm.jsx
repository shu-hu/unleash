import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import * as ParkFormStyles from './Park.module.css'

const ParkUpdateForm = (props) => {
    const [parkName, setParkName] = useState(props.park.parkName)
    const [address, setAddress] = useState(props.park.address)
    const [description, setDescription] = useState(props.park.description)
    const [openTime, setOpenTime] = useState(props.park.openTime)
    const [closeTime, setCloseTime] = useState(props.park.closeTime)

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            parkName: parkName,
            address: address,
            description: description,
            openTime: openTime,
            closeTime: closeTime,
        }
        props.handleUpdatePark(props.park._id, formData)
    }

        return (
            <form  className={[ParkFormStyles.createForm]} onSubmit={handleSubmit}>

                <div className="add-park-prompt">
                        <label>Update Park</label>
                </div>
                
                <input
                    required
                    autoComplete='off'
                    placeholder="Park Name"
                    name="parkName"
                    value={parkName}
                    onChange={(e) => setParkName(e.target.value)}>
                </input>

                <input
                    required
                    autoComplete='off'
                    placeholder="Address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}>
                </input>

                <input
                    required
                    autoComplete='off'
                    placeholder="Description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}>
                </input>

                <input
                    required
                    autoComplete='off'
                    placeholder="OpenTime"
                    name="openTime"
                    value={openTime}
                    onChange={(e) => setOpenTime(e.target.value)}>
                </input>

                <input
                    required
                    autoComplete='off'
                    placeholder="CloseTime"
                    name="closeTime"
                    value={closeTime}
                    onChange={(e) => setCloseTime(e.target.value)}>
                </input>

                
                <div className="border"></div>
                
                <Button 
                    variant="contained" 
                    color="primary" 
                    type="submit">
                Submit
                </Button>

            </form>
    )
}

export default ParkUpdateForm;