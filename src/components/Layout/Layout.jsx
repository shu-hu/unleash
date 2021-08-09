import React from 'react'

import ResultMenu from './ResultMenu/ResultMenu'
import SideMenu from './SideMenu/SideMenu'

const Layout = (props) => {
    const { children } = props

    return (
        <div className="home-page">
            <SideMenu {...props} />
            {children}
            <ResultMenu {...props} />
        </div>
    )
}

export default Layout