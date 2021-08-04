import React, { useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'

const App = () => {
	const [user, setUser] = useState(null);

	return (
		<>
			<NavBar user={user} />
			<Route exact path='/'>
				<Landing user={user} />
			</Route>
			<Route exact path='/signup'>
				{user ? <Redirect to='/' /> : <Signup />}
			</Route>
			<Route exact path='/login'>
				{user ? <Redirect to='/' /> : <Login />}
			</Route>
		</>
	)
}
 
export default App
