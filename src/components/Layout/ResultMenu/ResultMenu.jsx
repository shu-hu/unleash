import React, {useState, useEffect} from 'react';
import {getPaginatedParks} from '../../../services/parkService'




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
            return <h1>{park.parkName}</h1>
        })
    }


    return (
        <>
            {parks}
        </>
    );
}

export default ResultMenu;