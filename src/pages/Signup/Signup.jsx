import React, { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import './Signup.css'

const Signup = ({ handleSignupOrLogin }) => {
  const [message, setMessage] = useState()

  const updateMessage = msg => {
    setMessage({ msg })
  }

  return (
    <div className="signup-page">
      <div className="left-container">
        {message && <p>{message}</p>}
        <SignupForm
          updateMessage={updateMessage}
          handleSignupOrLogin={handleSignupOrLogin}
        />
      </div>
      <div className="right-container">
        <h1>Animation goes here</h1>
      </div>
    </div>
  )
}

export default Signup
