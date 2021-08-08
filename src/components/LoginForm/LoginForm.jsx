import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styles from './LoginForm.module.css'

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
        history.push('/')
    } catch (error) {
        setAuthError(error.message)
        setFormData({
          email: '',
          password: '',
        })
    }
  }

  return (
    <div>
      <h1>Login</h1>
      {!authError ? 
      <h3>Enter your login information</h3>
        :
      {authError}
    }
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="email-input" className={styles.label}>
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
      <div className={styles.inputContainer}>
        <label htmlFor="password-input" className={styles.label}>
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
        <button>Log In</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </form>
    </div>
  )
}
 
export default LoginForm
