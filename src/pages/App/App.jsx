import React, { useState, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'

import {getUser, logout} from '../../services/authService'


const App = () => {
	const [user, setUser] = useState(null);
	const [authenticated, setAuthenticated] = useState(false);

	const handleSignupOrLogin = async () => {
		const user = getUser()
		setUser(user)
		setAuthenticated(true)
	}

	const handleLogout = () => {
		logout()
		setUser(null)
		setAuthenticated(false)
	}

	useEffect(() => {
		const verifyToken = async () => {
			const token = localStorage.getItem("token")
			if (token) {
        try {
			const user = getUser()
			setUser(user)
			setAuthenticated(true)
        } catch (error) {
			localStorage.clear()
        }
		}
    }
    verifyToken()
	}, [authenticated])


	return (
		<>
			<NavBar user={user} />
			<Route exact path='/'>
				<Landing user={user} />
			</Route>
			<Route exact path='/signup'>
				{user ? <Redirect to='/' /> : <Signup handleSignupOrLogin/>}
			</Route>
			<Route exact path='/login'>
				{user ? <Redirect to='/' /> : <Login handleSignupOrLogin/>}
			</Route>
			
		</>
	)
}

export default App
