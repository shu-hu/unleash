import React, { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import './Signup.css'
import Animation from '../../components/misc/Animation'
import rightSide from '../../assets/animation/user-profile.json'

const Signup = ({ handleSignupOrLogin }) => {
  const [message, setMessage] = useState()

  const updateMessage = msg => {
    setMessage({ msg })
  }

  return (
    <div className="signup-page">

      <div className="signup-left-container">
        <div className="signup-animation-box">
          <Animation animData={rightSide}></Animation>
        </div>
      </div>

      <div className="signup-right-container">
        {message && <p>{message}</p>}
        <SignupForm
          updateMessage={updateMessage}
          handleSignupOrLogin={handleSignupOrLogin}
        />
      </div>

    </div>
  )
}

export default Signup
