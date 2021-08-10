import './Landing.css'
import { Link } from 'react-router-dom'

const Landing = ({ user }) => {
  return (
    <div className="landing-page">
      {/* hello, {user ? user.name : "dog lover"} */}
      <div className="landing-elements">
        <div className="landing-button-container">
          <button><Link to="/signup">Sign Up</Link></button>
          <button><Link to="/signin">Sign In</Link></button>
        </div>
      </div>

    </div>
  )
}

export default Landing