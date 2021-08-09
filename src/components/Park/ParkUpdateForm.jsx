import React from 'react'

const ParkUpdateForm = (props) => {

        return (
                <>
            <form  className="create-form" onSubmit={props.handleSubmit}>

                <div className="add-park-prompt">
                        <label>Add a Park</label>
                </div>
                
                <input
                    required
                    autoComplete='off'
                    placeholder="Park Name"
                    name="parkName"
                    value={props.parkName}
                    onChange={(e) => props.setParkName(e.target.value)}>
                </input>

                <input
                    required
                    autoComplete='off'
                    placeholder="Address"
                    name="address"
                    value={props.address}
                    onChange={(e) => props.setAddress(e.target.value)}>
                </input>

                <input
                    required
                    autoComplete='off'
                    placeholder="Description"
                    name="description"
                    value={props.description}
                    onChange={(e) => props.setDescription(e.target.value)}>
                </input>

                <input
                    required
                    autoComplete='off'
                    placeholder="OpenTime"
                    name="openTime"
                    value={props.openTime}
                    onChange={(e) => props.setOpenTime(e.target.value)}>
                </input>

                <input
                    required
                    autoComplete='off'
                    placeholder="CloseTime"
                    name="closeTime"
                    value={props.closeTime}
                    onChange={(e) => props.setCloseTime(e.target.value)}>
                </input>

                
                <div className="border"></div>
                
                <button type="submit">Submit</button>
            </form>
        </> 
    )
}

export default ParkUpdateForm;