import React from 'react'


import ResultMenu from './ResultMenu/ResultMenu'
import SideMenu from './SideMenu/SideMenu'

const Layout = (props) => {
    const { children } = props

    return (
        <div className="home-page">
            <SideMenu {...props} />
            {children}
            <ResultMenu handleUpdatePark={props.handleUpdatePark} {...props} location={props.location} setLocation={props.setLocation} handleSearch={props.handleSearch}/>
        </div>
    )
}

export default Layout