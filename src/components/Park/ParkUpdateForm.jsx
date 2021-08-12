import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import * as ParkFormStyles from './Park.module.css'

import EditLocationIcon from '@material-ui/icons/EditLocation';

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
            <form className={ParkFormStyles.createForm} onSubmit={handleSubmit}>
                <Box 
                    className={ParkFormStyles.inputContainer} 
                    boxShadow={2}
                    display="flex" 
                    flexDirection="column"
                    width={500}
                >
                    <Box m='auto'>
                        <Typography variant="h4" gutterBottom style={{ color: '#121212'}}>
                            Update Park <EditLocationIcon fontSize='large' color='primary' />
                        </Typography>
                    </Box>
                    <div className={ParkFormStyles.border}></div>
                    <Box m={2}></Box>
                    
                    <TextField
                        required
                        fullWidth
                        variant="outlined"
                        autoComplete='off'
                        label="Park Name"
                        name="parkName"
                        value={parkName}
                        onChange={(e) => setParkName(e.target.value)}>
                    </TextField>
                    <Box m={1}></Box>
                    <TextField
                        required
                        fullWidth
                        variant="outlined"
                        label="Park Address"
                        autoComplete='off'
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}>
                    </TextField>
                    <Box m={1}></Box>
                    <TextField
                        required
                        fullWidth
                        multiline
                        rows={3}
                        variant="outlined"
                        label="Description"
                        autoComplete='off'
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}>
                    </TextField>
                    <Box m={1}></Box>
                <div>
                    <TextField
                            id="opens"
                            label="Opens"
                            type="time"
                            varient="outlined"
                            value={openTime}
                            onChange={(e) => setOpenTime(e.target.value)}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            inputProps={{
                            step: 300,
                            }}
                        />

                        <TextField
                            id="closes"
                            label="Closes"
                            type="time"
                            varient="outlined"
                            value={closeTime}
                            onChange={(e) => setCloseTime(e.target.value)}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            inputProps={{
                            step: 300,
                            }}
                        />
                </div>  
                    <Box m={2}></Box>
                    <Button 
                        fullWidth
                        variant="contained" 
                        color="primary" 
                        type="submit">
                    Submit
                    </Button>
                </Box>
            </form>
    )
}

export default ParkUpdateForm;