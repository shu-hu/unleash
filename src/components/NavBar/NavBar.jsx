import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
	return (
		<nav>
			<div>
			{user ? (
				<ul>
					<li>Welcome, {user.handle}</li>
					<li>
						<NavLink to="/" onClick={handleLogout}>Sign Out</NavLink>
					</li>
				</ul>
			) : (
				<ul>
					<li>
						<NavLink to="/login">Log In</NavLink>
					</li>
					<li>
						<NavLink to="/signup">Sign Up</NavLink>
					</li>
				</ul>
			)}
			</div>
		</nav>
	)
}

export default NavBar
