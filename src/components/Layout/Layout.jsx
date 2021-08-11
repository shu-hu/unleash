import React, {useState} from 'react'


import ResultMenu from './ResultMenu/ResultMenu'
import SideMenu from './SideMenu/SideMenu'

const Layout = (props) => {
    const { children } = props


    // const handleChange = (e) => {
    //     props.setLocation(e.target.value)
    // }

    return (
        <div className="home-page">
            <SideMenu {...props} />
            {children}
            <ResultMenu handleUpdatePark={props.handleUpdatePark} {...props} location={props.location} setLocation={props.setLocation} handleSearch={props.handleSearch}/>
        </div>
    )
}

export default Layout