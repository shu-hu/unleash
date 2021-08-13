import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './LoginForm.css'

import { login } from '../../services/authService'

const LoginForm = ({ handleSignupOrLogin }) => {
  const history = useHistory()
  const [authError, setAuthError] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await login(formData)
      handleSignupOrLogin()
      history.push('/home')
    } catch (error) {
      setAuthError(error.message)
      setFormData({
        email: '',
        password: '',
      })
    }
  }

  return (
    <div className='login-form-container'>
      <div className="login-title-container">
        <h1>Log In</h1>
      </div>

      {!authError ?
        <h3>Enter your login information</h3>
        :
        { authError }
      }

      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="login-register-form"
      >
        <div className="login-input-container">
          <label htmlFor="email-input" className="login-label">
            Email
          </label>
          <input
            type="text"
            autoComplete="off"
            id="email-input"
            value={formData.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="login-input-container">
          <label htmlFor="password-input" className="login-label">
            Password
          </label>
          <input
            type="password"
            autoComplete="off"
            id="password-input"
            value={formData.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <button id="login-submit-button" type="submit">LOGIN</button>
          <Link to="/">
            <button id="login-cancel-button" type="submit">CANCEL</button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
