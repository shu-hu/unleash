import './Landing.css'
import { Link } from 'react-router-dom'

const Landing = ({ user }) => {
  return (
    <div className="landing-page-container">
      <div className="landing-col left">
        <h1>left</h1>
      </div>
      <div className="landing-col right">
        <div className="landing-button-container">
          <button><Link to="/signup">Sign Up</Link></button>
          <button><Link to="/signin">Sign In</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Landing