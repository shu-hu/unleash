import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom'
import {getPaginatedParks, search} from '../../../services/parkService'
import ResultCard from './ResultCard'
import Search from './Search'
// import Map from '../../Map/Map'


const ResultMenu = (props) => {
    console.log("PPPRRROOOPPPSSS", props)
    const history = useHistory()
    const [parkList, setParkList] = useState(props.parks)
    const {

        setLat,

        setLng,

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

    const handleSearch = async (e) => {
        e.preventDefault()
        try {
            const inputLocation = await search(props.location)
            setLat(inputLocation.lat)
            setLng(inputLocation.lng)
            history.push('/home')
        } catch (error) {
            throw error
        }
    }

    const handleChange = (e) => {
        props.setLocation(e.target.value)
    }

    return (
            <div className="results">
            <Search 
                {...props}
                handleSearch={handleSearch}
                handleChange={handleChange}
            />
            {parks}
            </div>
    );
}

export default ResultMenu;