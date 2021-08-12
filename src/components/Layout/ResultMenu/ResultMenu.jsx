import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button'
import {getPaginatedParks} from '../../../services/parkService'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ResultCard from './ResultCard'
import Search from './Search'

const ResultMenu = (props) => {
    const [parkList, setParkList] = useState(props.parks)

    const handleClick = () => {
        props.setToggleMap(!props.toggleMap)
    }

    useEffect(()=> {
        (async()=>{
            const parks = await getPaginatedParks()
            setParkList(parks)
        })()
    },[])

    let parks;
    if(parkList.length) {
        parks = parkList.map(park => {
            return <ResultCard park={park} />
        })
    }

    return (
            <div className="results">
            { props.user &&
            <Button variant="contained" endIcon={<AddCircleOutlineIcon />} color="primary" onClick={handleClick}>
                {props.toggleMap ? `Create Park` : 'Back to Map'}
            </Button>
            }         
            <Search 
                {...props}
            />
            {parks}
            </div>
    );
}

export default ResultMenu;