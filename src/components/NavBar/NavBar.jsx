import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoDesktop from '../../assets/logo/logo-desktop.png'

const NavBar = ({ user, handleLogout }) => {
	return (
		<nav className="nav-bar">
			<div>
			{user ?
				<ul>
					<NavLink className="logo" to="/home">
						<img src={LogoDesktop} alt="unleash-logo"></img>
					</NavLink>
					<li>Welcome, {user.handle}</li>
					<li>
						<NavLink to="/" onClick={handleLogout}>Sign Out</NavLink>
					</li>
				</ul>
			: 
			<>
						<NavLink to="/login">Log In</NavLink>
						<NavLink to="/signup">Sign Up</NavLink>
			</>
			}
			</div>
		</nav>
	)
}

export default NavBar
