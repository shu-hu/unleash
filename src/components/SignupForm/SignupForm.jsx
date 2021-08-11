import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './SignupForm.css'
import { signup } from '../../services/authService'

const SignupForm = ({ handleSignupOrLogin, updateMessage }) => {
  const history = useHistory()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    handle: '',
    email: '',
    password: '',
    passwordConf: '',
  })

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await signup(formData)
      await handleSignupOrLogin()
      history.push('/')
    } catch (error) {
      updateMessage(error.message)
      setFormData({
        handle: '',
        email: '',
        password: '',
        passwordConf: '',
      })
    }
  }

  useEffect(() => {
    const { handle, email, password, passwordConf } = formData
    const isFormInvalid = !(handle && email && password === passwordConf)
    setValidForm(isFormInvalid)
  }, [formData])

  return (
    <div className='form-container'>

      <div className="title-container">
        <h1>SignUp !</h1>
      </div>

      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="register-form"
      >
        <div>
          <label htmlFor="handle" className="label">
            Name
          </label>
          <input
            type="text"
            autoComplete="off"
            id="handle"
            value={formData.handle}
            name="handle"
            onChange={handleChange}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="email-input" className="label">Email</label>
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={formData.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="password-input" className="label">
            Password
          </label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={formData.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="confirm-input" className="label">
            Confirm Password
          </label>
          <input
            type="password"
            autoComplete="off"
            id="confirm-input"
            value={formData.passwordConf}
            name="passwordConf"
            onChange={handleChange}
          />
        </div>
        <div>
          <button id="submit-button" disabled={validForm} type="submit">SUBMIT</button>
          <Link to="/">
            <button id="cancel-button" type="submit">CANCEL</button>
          </Link>
        </div>
      </form>

      <div className="redirect-container">
        <p>Already have an account?</p>
        <Link className="redirect-link" to="/login">
          <p>Log In</p>
        </Link>
      </div>

    </div>

  )
}

export default SignupForm
