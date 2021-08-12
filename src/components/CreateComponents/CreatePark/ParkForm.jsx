import 'date-fns'
import React from 'react';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add'
import CancelIcon from '@material-ui/icons/Cancel'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import * as createParkStyles from '../Create.module.css'

const ParkForm = (props) => {
    return (
            <form  
                className={createParkStyles.createForm} 
                onSubmit={props.handleSubmit} 
                noValidate
                autoComplete='off'
                >

                    <Box m='auto'>
                        <Typography variant="h5" gutterBottom style={{ color: '#121212 '}}>
                            Create Park 
                            <AddIcon fontSize='large' style={{ color: '#121212 '}}/>
                        </Typography>
                        <Button 
                                color="secondary"
                                onClick={() => props.setToggleMap(true)}
                            >
                            Cancel <CancelIcon />
                        </Button>
                    </Box>

                <div className={createParkStyles.border}></div>
            <Box className={createParkStyles.inputContainer}>
                <TextField 
                    color="primary"
                    id="park-name" 
                    label="Name" 
                    fullWidth
                    required
                    autoComplete='off' 
                    variant="outlined"
                    name="parkName"
                    value={props.parkName}
                    inputProps={ { style: { color: '#bdbdbd' }} }
                    onChange={(e) => props.setParkName(e.target.value)}
                /> 
                <Box m={2}></Box>
                <TextField 
                    color="primary"
                    id="address" 
                    label="Address" 
                    fullWidth
                    required
                    autoComplete='off' 
                    variant="outlined"
                    name="address"
                    value={props.address}
                    inputProps={{ style: { color: '#bdbdbd' }}}
                    onChange={(e) => props.setAddress(e.target.value)}
                /> 
                <Box m={2}></Box>
                <TextField 
                    color="primary"
                    id="desc" 
                    label="Description"
                    fullWidth
                    autoComplete='off' 
                    variant="outlined"
                    name="description"
                    value={props.description}
                    inputProps={{ style: { color: '#bdbdbd' }}}
                    onChange={(e) => props.setDescription(e.target.value)}
                />
                <Box m={2}></Box>
                <Box className={createParkStyles.timeInputContainer}>
                    <TextField
                        color="primary"
                        id="opens"
                        label="Opens"
                        type="time"
                        variant="outlined"
                        value={props.openTime}
                        onChange={(e) => props.setOpenTime(e.target.value)}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        inputProps={{ style: { color: '#bdbdbd' }, step: 300 }}
                    />
                    <Box m={2}></Box>
                    <TextField
                        color="primary"
                        id="closes"
                        label="Closes"
                        type="time"
                        variant="outlined"
                        value={props.closeTime}
                        onChange={(e) => props.setCloseTime(e.target.value)}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        inputProps={{ style: { color: '#bdbdbd' }, step: 300 }}
                    />
                </Box>
            </Box>
                <div className={createParkStyles.border}></div>
                <Box m={2}></Box>
                <Button type="submit" color='primary' variant="contained" fullWidth>Submit</Button>
            </form>
    )
}

export default ParkForm;
