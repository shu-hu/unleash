import 'date-fns'
import React, {useState} from 'react';
import * as createParkStyles from '../Create.module.css'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';


const ParkForm = (props) => {
    const [selectedOpen, setSelectedOpen] = useState(new Date('2014-08-18T21:11:54'));
    const [selectedClose, setSelectedClose] = useState(new Date('2014-08-18T21:11:54'));

    const handleOpenChange = (date) => {
        setSelectedOpen(date);
      };
    const handleCloseChange = (date) => {
        setSelectedClose(date);
      };


    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
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

                {/* <label for="openTime">Opens:</label>
                <input
                    required
                    id="open-time"
                    autoComplete='off'
                    name="openTime"
                    value={props.openTime}
                    onChange={(e) => props.setOpenTime(e.target.value)}>
                </input> */}

                <KeyboardTimePicker
                    required
                    margin="normal"
                    id="open-time"
                    label="Opens:"
                    name="openTime"
                    value={selectedOpen}
                    onChange={handleOpenChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                />

                {/* <label for="closeTime">Closes:</label>
                <input
                    required
                    id="closeTime"
                    autoComplete='off'
                    name="closeTime"
                    value={props.closeTime}
                    onChange={(e) => props.setCloseTime(e.target.value)}>
                </input>
                 */}

<KeyboardTimePicker
                    required
                    margin="normal"
                    id="close-time"
                    label="closes:"
                    name="closeTime"
                    value={selectedClose}
                    onChange={handleCloseChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                />
                
                <div className={createParkStyles.border}></div>
                
                <button type="submit">Submit</button>
            </form>
        </MuiPickersUtilsProvider>
    )
}

export default ParkForm;
