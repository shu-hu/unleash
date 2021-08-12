import React, { useState } from 'react'
import Button from "@material-ui/core/Button"
import SearchIcon from '@material-ui/icons/Search';
import { useEffect } from 'react'


const Search = (props) => {

    const [location, setLocation] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const searchData = {
            location: location
        }
        props.handleSearch(searchData)
    }

    useEffect(() => {
        console.log(location)
    }, [location])

    return (
        <div className="search-container">
            <form className="search" onSubmit={handleSubmit}>
                <input
                    required
                    autoComplete="off"
                    placeholder="Search Location"
                    name="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <Button type="submit" style={{color: '#2196f3'}} startIcon={<SearchIcon/>}>Submit</Button>
            </form>
        </div>
    )
}

export default Search