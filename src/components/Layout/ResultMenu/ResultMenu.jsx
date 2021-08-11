import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom'
import {getPaginatedParks, search} from '../../../services/parkService'
import ResultCard from './ResultCard'
import Search from './Search'


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
            <Search 
                {...props}
            />
            {parks}
            </div>
    );
}

export default ResultMenu;