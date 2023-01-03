import { Link } from "react-router-dom"

function Landing () {
  return (
    <>
    <p>hey there</p>
    <p>today might be hard</p>
    <p>but we are here for you</p>
    <Link to="/pilldescription">
      <button type="button">
      click here to continue
      </button>
    </Link>
    </>
  )
}

export default Landing