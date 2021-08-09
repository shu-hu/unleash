import React, {useState, useEffect} from 'react';
import {getPaginatedParks} from '../../../services/parkService'
import { Link } from 'react-router-dom'


const ResultMenu = () => {
    const [parkList, setParkList] = useState([])

    useEffect(()=> {
        (async()=>{
            const parks = await getPaginatedParks()
            setParkList(parks)
        })()
    
    },[])
    let parks;
    if(parkList.length) {
        parks = parkList.map(park => {
            return <Link 
                to={{
                pathname: `api/parks/details/${park._id}`,
                state: { park }
        }}>{park.parkName}</Link>
        })
    }

    return (
        <>
            {parks}
        </>
    );
}

export default ResultMenu;