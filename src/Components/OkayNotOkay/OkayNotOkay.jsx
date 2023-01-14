import { Link } from "react-router-dom"

function OkayNotOkay () {
  return (
    <>
    <p>what's normal?</p>
    <Link to="/instructions">
      <button type="button">
      back
      </button>
    </Link>
    </>
  )
}

export default OkayNotOkay