import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button'
import { getPaginatedParks, searchedParks } from '../../../services/parkService'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ResultCard from './ResultCard'
import Box from '@material-ui/core/Box'
import Search from './Search'

const ResultMenu = (props) => {
    const [parkList, setParkList] = useState(props.parks)

    const handleClick = () => {
        props.setToggleMap(!props.toggleMap)
    }

    useEffect(() => {
        (async () => {
            const parks = await getPaginatedParks()
            setParkList(parks)
        })()
    }, [])

    const handleSearchedParks = async () => {
        try {

            const results = await searchedParks(props.location)
            console.log('results', results)
            return results.results;
        } catch (error) {
            throw error
        }
    }

    useEffect(() => {
        (async () => {
            let searchedParksArr = await handleSearchedParks()
            let parksData = []

            searchedParksArr.forEach((park, idx) => {
                const newParks = {
                    _id: "",
                    parkName: "",
                    description: "",
                    address: "",

                }
                newParks._id = park.dataSources?.poiDetails[0].id || idx
                newParks.parkName = park.poi.name
                newParks.address = park.address.freeformAddress

                parksData.push(newParks)
            })
            setParkList(parksData)
        })()
    }, [props.location])

    let parks;
    if (parkList.length) {
        parks = parkList.map(park => {
            return <ResultCard park={park} />
        })
    }

    return (
        <div className="results">
            {props.user &&
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