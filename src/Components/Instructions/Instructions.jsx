import { Link } from "react-router-dom"
function Instructions () {
  return (
    <>
    <p>how it works</p>
    <Link to="/okaynotokay">
      <button type="button">
      click here to continue
      </button>
    </Link>
    <Link to="/mife">
      <button type="button">
      back
      </button>
    </Link>
  </>
  )
}

export default Instructions