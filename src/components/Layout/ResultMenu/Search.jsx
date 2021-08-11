import React from 'react'

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
            </form>
        </div>
    )
}

export default Search