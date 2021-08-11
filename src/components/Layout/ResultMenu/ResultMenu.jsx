import React, {useState, useEffect} from 'react';
import {getPaginatedParks, search} from '../../../services/parkService'
import ResultCard from './ResultCard'
import Search from './Search'


const ResultMenu = (props) => {
    console.log("PPPRRROOOPPPSSS", props)
    const [parkList, setParkList] = useState(props.parks)
    const {
        lat,
        setLat,

        lng,
        setLng,

        location,
        setLocation,

    } = props

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

    const handleChange = (e) => {
        setLocation(e.target.value)
    }

    return (
            <div className="results">
            <Search 
                {...props}
                // handleSearch={handleSearch}
                handleChange={handleChange}
            />
            {parks}
            </div>
    );
}

export default ResultMenu;