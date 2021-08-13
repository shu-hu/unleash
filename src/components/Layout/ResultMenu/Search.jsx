import React, { useState } from 'react'
import Button from "@material-ui/core/Button"
import SearchIcon from '@material-ui/icons/Search'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import * as searchStyles from './Search.module.css'


const Search = (props) => {

    const [location, setLocation] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const searchData = {
            location: location
        }
        props.handleSearch(searchData)
    }

    return (
        <div className={searchStyles.searchContainer}>
            <form className={searchStyles.searchForm} onSubmit={handleSubmit}>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <SearchIcon size="large"/>
                </Grid>
                <Grid item>
                    <Box className={searchStyles.searchBarContainer}>
                    <TextField 
                        className={searchStyles.searchBar}
                        variant="outlined"
                        label="Search"
                        required
                        autoComplete="off"
                        name="location"
                        value={location}
                        InputProps={{style: { color: '#2196f3' }}}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    </Box>
                </Grid>
                <Button type="submit" style={{color: '#2196f3'}}>Submit</Button>
            </Grid>
            </form>
        </div>
    )
}

export default Search


