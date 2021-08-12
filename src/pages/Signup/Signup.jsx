import React, { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import './Signup.css'
import Animation from '../../components/misc/Animation'
import rightSide from '../../assets/animation/user-profile.json'
import unleashLogo from '../../assets/logo/logo-desktop.png'

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
        <img className="signup-app-logo-img" src={unleashLogo} alt="signup-unleash-logo"></img>
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
