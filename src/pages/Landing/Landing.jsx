import './Landing.css'
import { Link } from 'react-router-dom'
import Teamlogo from '../../assets/logo/team-logo.png'
import Applogo from '../../assets/logo/unleash-logo-white.png'
import Animation from '../../components/misc/Animation'
import dogPark from '../../assets/animation/dog-park.json'
import dogWalkM from '../../assets/images/dog_walking_man.svg'
import dogWalkW from '../../assets/images/dog_walking_woman.svg'


const Landing = ({ user }) => {
  return (
    <div className="landing-page-container">
      <div className="landing-col left">
        <div className="landing-sign-in">
          <Link to="/signin" style={{ textDecoration: 'none' }}>EXPLORE...</Link>
        </div>

        <img className="team-logo-img" src={Teamlogo} alt="team-logo"></img>
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
      <div className="landing-col right">
        <div className="landing-button-container">
          <img className="app-logo-img" src={Applogo} alt="unleash-logo"></img>
          <button><Link to="/signup">Sign Up</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Landing