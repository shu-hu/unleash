import React, {useState, useEffect} from 'react';
import {getPaginatedParks} from '../../../services/parkService'
import { Link } from 'react-router-dom'
import * as resultStyles from './ResultMenu.module.css'


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
            return <Link 
                key={park._id}
                className={resultStyles.link}
                to={`api/parks/details/${park._id}`}
                >{park.parkName}</Link>
        })
    }
    return (
            <div className="results">
            {parks}
            </div>
    );
}

export default ResultMenu;