import './Landing.css'
import { Link } from 'react-router-dom'
import Teamlogo from '../../assets/logo/team-logo.png'
import Applogo from '../../assets/logo/unleash-logo-white.png'
import Animation from '../../components/misc/Animation'
import dogPark from '../../assets/animation/dog-park.json'
import dogWalk from '../../assets/animation/corgi-running.json'

const Landing = ({ user }) => {
  return (
    <div className="landing-page-container">
      <div className="landing-col left">
        <img className="team-logo-img" src={Teamlogo} alt="team-logo"></img>
        <Animation animData={dogPark}></Animation>
      </div>
      <div className="landing-col right">
        <div className="landing-button-container">
          <img className="app-logo-img" src={Applogo} alt="unleash-logo"></img>
          <button><Link to="/signup">Sign Up</Link></button>
          <button><Link to="/signin">Sign In</Link></button>
          <Animation animData={dogWalk}></Animation>
        </div>
      </div>
    </div>
  )
}

export default Landing