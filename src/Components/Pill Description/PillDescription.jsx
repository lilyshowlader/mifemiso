import { Link } from "react-router-dom"
function PillDescription () {
  return (
    <>
    <div className='pilldescription-container'>
  
    <p>here is a list of all the medications that were given to you</p> 
    <p>mifepristone</p>
    <p>mifepristone is the first pill you will take during this process. mifepristone works by stopping the supply of hormones that maintains the interior of the uterus. without these hormones, the uterus cannot support the pregnancy and the contents of the uterus are expelled.</p>
    <p>misoprostol</p>
    <p>misoprostol is what is used to "empty" your uterus. we recommend you take misoprostol either vaginally or buccally. we're gonna explain this, don't worry.</p>
    <p>compazine</p>
    <p>compazine is used to treat nausea</p>
    <p>ibuprofen</p>
    <p>ibuprofen is used for pain management</p>
    <p>percocet</p>
    <p>percocet is also used for pain management</p>
    <Link to="/mife">
      <button type="button">
      click here to continue
      </button>
    </Link>
    </div>
    </>
  )
}

export default PillDescription