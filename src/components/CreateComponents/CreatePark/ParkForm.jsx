import React from 'react';
import * as createParkStyles from '../Create.module.css'

const ParkForm = (props) => {

    return (
        <>
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

                <label for="openTime">Opens:</label>
                <input
                    required
                    id="open-time"
                    autoComplete='off'
                    name="openTime"
                    value={props.openTime}
                    onChange={(e) => props.setOpenTime(e.target.value)}>
                </input>

                <label for="closeTime">Closes:</label>
                <input
                    required
                    id="closeTime"
                    autoComplete='off'
                    name="closeTime"
                    value={props.closeTime}
                    onChange={(e) => props.setCloseTime(e.target.value)}>
                </input>
                
                
                <div className={createParkStyles.border}></div>
                
                <button type="submit">Submit</button>
            </form>
        </> 
    )
}

export default ParkForm;
