import React from 'react'
import Button from '@material-ui/core/Button'
import * as sideMenuStyles from './SideMenu.module.css'

const SideMenu = (props) => {

    const handleClick = () => {
        props.setToggleMap(!props.toggleMap)
    }

    return (
        <div className="side-panel">
            { props.user &&
            <Button variant="outlined" color="primary" onClick={handleClick}>
                {props.toggleMap ? `Create Park` : 'Back to Map'}
            </Button>
            }           
        </div>
    )
}

export default SideMenu