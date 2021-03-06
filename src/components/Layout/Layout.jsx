import React from 'react'
import ResultMenu from './ResultMenu/ResultMenu'

const Layout = (props) => {
    const { children } = props

    return (
        <div className="home-page" style={{ backgroundColor: '#121212'}}>
            {children}
            <ResultMenu 
                {...props} 
                handleUpdatePark={props.handleUpdatePark} 
                location={props.location} 
                setLocation={props.setLocation} 
                handleSearch={props.handleSearch}/>
        </div>
    )
}

export default Layout