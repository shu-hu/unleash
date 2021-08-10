import React from 'react'

const SideMenu = (props) => {

    const handleClick = () => {
        props.setToggleMap(!props.toggleMap)
    }

    return (
        <div className="side-panel">
            <button onClick={handleClick}>Create Park</button>
        </div>
    )
}

export default SideMenu