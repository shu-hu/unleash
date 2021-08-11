import React from 'react'
import Button from "@material-ui/core/Button"

const Search = (props) => {

    return (
        <div className="search-container">
            <form className="search" onSubmit={props.handleSearch}>
                <input
                    autoComplete="off"
                    placeholder="Search Location"
                    name="location"
                    value={props.location}
                    onChange={props.handleChange}
                />
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default Search