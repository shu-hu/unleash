import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import './Login.css'
import Animation from '../../components/misc/Animation'
import rightSide from '../../assets/animation/user-profile.json'

const LoginPage = ({ handleSignupOrLogin }) => {
  return (
    <main className="signup-page">
      <div className="left-container">
        <div className="animation-box">
          <Animation animData={rightSide}></Animation>
        </div>
      </div>

      <div className="right-container">
        <LoginForm handleSignupOrLogin={handleSignupOrLogin} />
      </div>
    </main>
  )
}

export default LoginPage
