import { Link } from "react-router-dom"
function PillDescription () {
  return (
    <>
    <p>here is a list of all the medications that were given to you</p>
    <p>mifepristone</p>
    <p>misoprostol</p>
    <p>compazine</p>
    <p>ibuprofen</p>
    <Link to="/mife">
      <button type="button">
      click here to continue
      </button>
    </Link>
    </>
  )
}

export default PillDescription