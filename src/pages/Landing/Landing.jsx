import './Landing.css'
import { Link } from 'react-router-dom'
import Teamlogo from '../../assets/logo/team-logo.png'

const Landing = ({ user }) => {
  return (
    <div className="landing-page-container">
      <div className="landing-col left">
        <h1>left</h1>
      </div>
      <div className="landing-col right">
        <div className="landing-button-container">
          <img className="team-logo-img" src={Teamlogo} alt="team-logo"></img>
          <button><Link to="/signup">Sign Up</Link></button>
          <button><Link to="/signin">Sign In</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Landing