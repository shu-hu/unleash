import React, {useState, useEffect} from 'react';
import {getPaginatedParks} from '../../../services/parkService'
import ResultCard from './ResultCard'


const ResultMenu = (props) => {
    const [parkList, setParkList] = useState(props.parks)

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
            {parks}
            </div>
    );
}

export default ResultMenu;