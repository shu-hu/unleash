import React, { useState, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import ParkCard from '../../components/Park/ParkCard'
import './App.css'

import {getUser, logout} from '../../services/authService'
import Home from '../Home'

const App = () => {
	const [currentUser, setCurrentUser] = useState(null);
	const [authenticated, setAuthenticated] = useState(false);
	const [ toggleMap, setToggleMap ] = useState(true)

	const handleSignupOrLogin = async () => {
		const user = getUser()
		setCurrentUser(user)
		setAuthenticated(true)
	}

	const handleLogout = () => {
		logout()
		setCurrentUser(null)
		setAuthenticated(false)
	}

	useEffect(() => {
		(async() => {
		  const token = localStorage.getItem('token')
		  if(token) {
			try {
			  const user = getUser()
			  setCurrentUser(user)
			  setAuthenticated(true)
			} catch(error) {
			  localStorage.clear()
			}
		  }
		})()
	  }, [authenticated])


	return (
		<>
			<NavBar user={currentUser} handleLogout={handleLogout} />
			<Route exact path='/'>
				<Redirect to='/home'/>
			</Route>

			<Route exact path='/home'>
				<Home 
				user={currentUser}
				toggleMap={toggleMap}
				setToggleMap={setToggleMap}
				handleLogout={handleLogout}/>
			</Route>

			<Route path='/api/parks/details/:park_id'>
				<ParkCard
				user={currentUser}
				/>
			</Route>

			<Route exact path='/signup'>
				{currentUser ? <Redirect to='/' /> : <Signup handleSignupOrLogin={handleSignupOrLogin} />}
			</Route>
			<Route exact path='/login'>
				{currentUser ? <Redirect to='/' /> : <Login handleSignupOrLogin={handleSignupOrLogin} />}
			</Route>
			
		</>
	)
}

export default App
