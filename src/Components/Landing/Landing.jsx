import { Link } from "react-router-dom"
import 'animate.css';

function Landing () {
  return (
    <>
    <div className='landing-container'>
    <div className='logo'>mifemiso</div>
    <div className="animate__animated animate__slideInDown">we'll walk you through.</div>
    <Link to="/pilldescription">
      <button type="button" className='landingbutton'>
      click 
      </button>
    </Link>
    <p className='disclaimer'>please consult with your <br></br>doctor before using this site.</p>
    </div>
    </>
  )
}

export default Landing