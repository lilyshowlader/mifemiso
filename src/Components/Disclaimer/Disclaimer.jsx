import { Link } from "react-router-dom";

function Disclaimer () {

  return (
  <>
  <div className='landing-container'>
    <div className='logo'>mifemiso</div>
    <p className='disclaimer'>disclaimer: this app was created as a personal project to demonstrate the concept of a women's health app that simplifies the abortion medication process. this app does not replace consultation with a doctor.</p>
    <Link to="/mifemiso">
      <button type="button" className='landingbutton'>
      I understand
      </button>
    </Link>
    </div>
    </>
  )



}

export default Disclaimer;