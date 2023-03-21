import { Link } from "react-router-dom";

function Disclaimer () {

  return (
  <>
  <div className='landing-container'>
    <div className='logo animate__animated animate__fadeInDown'>mifemiso</div>
    <p className='disclaimer animate__animated animate__fadeIn animate__delay-1s'>disclaimer: <br></br>this app was created as a personal portfolio project to demonstrate the concept of how technology and software can be used to help simplify the instructions for the medical abortion process.  this app does not replace consultation with a doctor and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. all images on this app are not my own and are used solely for demonstration purposes. proper credit and ownership belong to the original creators.</p>
    <Link to="/mifemiso">
      <button type="button" className='landingbutton animate__animated animate__fadeIn animate__delay-1s'>
      I understand
      </button>
    </Link>
    </div>
    </>
  )



}

export default Disclaimer;