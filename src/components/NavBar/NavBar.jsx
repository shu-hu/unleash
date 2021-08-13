import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import LogoDesktop from '../../assets/logo/logo-desktop.png'

const NavBar = ({ user, handleLogout }) => {
	return (
		<nav className="nav-bar">

			<div className="nav-bar-right">
				<NavLink className="logo" to="/home">
					<img src={LogoDesktop} alt="unleash-logo"></img>
				</NavLink>
			</div>
			{user ?
				<div className="nav-bar-left">
					<p>Welcome, {user.handle}</p>
					<NavLink to="/" onClick={handleLogout}>Sign Out</NavLink>
				</div>
				:

				<div className="nav-bar-left">
					<NavLink to="/login">Log In</NavLink>
					<NavLink to="/signup">Sign Up</NavLink>
				</div>

			}
		</nav>
	)
}

export default NavBar
