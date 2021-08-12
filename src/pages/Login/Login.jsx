import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import './Login.css'
import Animation from '../../components/misc/Animation'
import rightSide from '../../assets/animation/user-profile.json'
import unleashLogo from '../../assets/logo/logo-desktop.png'

const LoginPage = ({ handleSignupOrLogin }) => {
  return (
    <main className="login-page">
      <div className="login-left-container">
        <div className="login-animation-box">
          <Animation animData={rightSide}></Animation>
        </div>
      </div>

      <div className="login-right-container">
        <img className="login-app-logo-img" src={unleashLogo} alt="login-unleash-logo"></img>
        <LoginForm handleSignupOrLogin={handleSignupOrLogin} />
      </div>
    </main>
  )
}

export default LoginPage
