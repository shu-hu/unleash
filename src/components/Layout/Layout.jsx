import React, {useState} from 'react'

import ResultMenu from './ResultMenu/ResultMenu'
import SideMenu from './SideMenu/SideMenu'

const Layout = (props) => {
    const { children } = props
    const [location, setLocation] = useState('')
    return (
        <div className="home-page">
            <SideMenu {...props} />
            {children}
            <ResultMenu handleUpdatePark={props.handleUpdatePark} {...props} location={location} setLocation={setLocation} />
        </div>
    )
}

export default Layout