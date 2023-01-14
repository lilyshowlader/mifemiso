import { Link } from "react-router-dom"

function Landing () {
  return (
    <>
    <p>mifemiso</p>
    <p>we'll walk you through</p>
    <Link to="/pilldescription">
      <button type="button">
      click here to continue
      </button>
    </Link>
    </>
  )
}

export default Landing