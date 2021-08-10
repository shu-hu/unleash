import 'date-fns'
import React from 'react';
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

                <div>
                    <label>Add a Park</label>
                </div>

                <div className={createParkStyles.border}></div>
                
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
                    inputProps={{ style: { color: '#bdbdbd' }}}
                    onChange={(e) => props.setParkName(e.target.value)}
                /> 
                
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

                <TextField 
                    color="primary"
                    id="desc" 
                    label="Description"
                    fullWidth
                    multiline
                    rows={4}
                    autoComplete='off' 
                    variant="outlined"
                    name="description"
                    value={props.description}
                    inputProps={{ style: { color: '#bdbdbd' }}}
                    onChange={(e) => props.setDescription(e.target.value)}
                />

            <div>
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
        </div>
                <div className={createParkStyles.border}></div>
                
                <button type="submit">Submit</button>
            </form>
    )
}

export default ParkForm;
