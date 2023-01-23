import { Link } from "react-router-dom"

function Landing () {
  return (
    <>
    <div className='landing-container'>
    <div className='logo'>mifemiso</div>
    <div className='logo-sub'>we'll walk you through.</div>
    <Link to="/pilldescription">
      <button type="button">
      click 
      </button>
    </Link>
    <p className='disclaimer'>please consult with your <br></br>doctor before using this site.</p>
    </div>
    </>
  )
}

export default Landing