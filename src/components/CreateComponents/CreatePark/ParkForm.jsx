import 'date-fns'
import React from 'react';
import TextField from '@material-ui/core/TextField'
import * as createParkStyles from '../Create.module.css'

const ParkForm = (props) => {
    return (
            <form  className={createParkStyles.createForm} onSubmit={props.handleSubmit}>

                <div className="add-park-prompt">
                        <label>Add a Park</label>
                </div>

                <div className={createParkStyles.border}></div>
                
                <label for="park-name">Park Name:</label>
                <input
                    required
                    id="park-name"
                    autoComplete='off'
                    placeholder="Enter a name"
                    name="parkName"
                    value={props.parkName}
                    onChange={(e) => props.setParkName(e.target.value)}>
                </input>

                <label for="address">Address:</label>
                <input
                    required
                    id="address"
                    autoComplete='off'
                    placeholder="Address"
                    name="address"
                    value={props.address}
                    onChange={(e) => props.setAddress(e.target.value)}>
                </input>

                <label for="description">Description:</label>
                <input
                    required
                    id="description"
                    autoComplete='off'
                    placeholder="What's the park like?"
                    name="description"
                    value={props.description}
                    onChange={(e) => props.setDescription(e.target.value)}>
                </input>
            <div>
                    <TextField
                        id="opens"
                        label="Opens"
                        type="time"
                        value={props.openTime}
                        onChange={(e) => props.setOpenTime(e.target.value)}
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
                        value={props.closeTime}
                        onChange={(e) => props.setCloseTime(e.target.value)}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        inputProps={{
                        step: 300,
                        }}
                    />
        </div>
                <div className={createParkStyles.border}></div>
                
                <button type="submit">Submit</button>
            </form>
    )
}

export default ParkForm;
