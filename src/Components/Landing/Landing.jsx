import { Link } from "react-router-dom"

function Landing () {
  return (
    <>
    <div className='landing-container'>
    <div className='logo'>mifemiso</div>
    <div>we'll walk you through.</div>
    <Link to="/pilldescription">
      <button type="button">
      click 
      </button>
    </Link>
    </div>
    </>
  )
}

export default Landing