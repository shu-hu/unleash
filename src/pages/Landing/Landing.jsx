import './Landing.css'
import { Link } from 'react-router-dom'
import Teamlogo from '../../assets/logo/team-logo.png'
import Applogo from '../../assets/logo/unleash-logo-white.png'
import Animation from '../../components/misc/Animation'
import dogPark from '../../assets/animation/dog-park.json'
import dots from '../../assets/animation/three-dots.json'
import dogWalkM from '../../assets/images/dog_walking_man.svg'
import dogWalkW from '../../assets/images/dog_walking_woman.svg'


const Landing = ({ user }) => {
  return (
    <div className="landing-page-container">
      <div className="landing-col left">
        <div className="landing-sign-in">
          <Link to="/login" style={{ textDecoration: 'none', tabIndex: "0" }}>EXPLORE...</Link>
        </div>

        <div className="landing-imgs">
          <div className="landing-one">
            <img className="dog-walk-man-img" src={dogWalkM} alt="dog-walk-man"></img>
          </div>
          <div className="animation-two">
            <Animation animData={dogPark}></Animation>
          </div>
          <div className="landing-three">
            <img className="dog-walk-woman-img" src={dogWalkW} alt="dog-walk-woman"></img>
          </div>
        </div>
      </div>

      <img className="team-logo-img" src={Teamlogo} alt="team-logo"></img>

      <div className="landing-col right">
        <img className="app-logo-img" src={Applogo} alt="unleash-logo"></img>
        <div className="dots-animation">
          <Animation animData={dots}></Animation>
        </div>
        <div className="landing-buttons-container">
          <button className="landing-login-btn"><Link to="/login" style={{ tabIndex: "0" }}>Log In</Link></button>
          <button className="landing-signup-btn"><Link to="/signup" style={{ tabIndex: "0" }}>Sign Up</Link></button>
        </div>
        <div className="landing-text">
          <h1>Welcome !</h1>
          <p>Sign up now</p>
          <p>and</p>
          <p>Discover your puppy's favorite park...</p>
        </div>
      </div>
    </div>
  )
}

export default Landing