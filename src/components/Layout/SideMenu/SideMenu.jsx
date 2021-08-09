import React from 'react'

const SideMenu = (props) => {

    const handleClick = () => {
        props.setToggleMap(!props.toggleMap)
    }

    return (
        <div>
            <button onClick={handleClick}>Create Park</button>
        </div>
    )
}

export default SideMenu