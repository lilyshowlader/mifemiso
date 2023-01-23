import { Link } from "react-router-dom"
function PillDescription () {
  return (
    <>
    <div className='pilldescription-container'>
  
    <p className='pill-title'>here is a list of all the medications<br></br> that were given to you.</p> 
    <p className='medication-names'>mifepristone</p>
    <p className='medication-description'>mifepristone is the first pill you will take during this process. mifepristone works by stopping the supply of hormones that maintains the interior of the uterus. without these hormones, the uterus cannot support the pregnancy and the contents of the uterus are expelled.</p>
    <p className='medication-names'>misoprostol</p>
    <p className='medication-description'>misoprostol is what is used to help "empty" your uterus. we recommend you take misoprostol either vaginally or buccally. we're gonna explain this, don't worry.</p>
    <p className='medication-names'>compazine</p>
    <p className='medication-description'>compazine is used to treat nausea.</p>
    <p className='medication-names'>ibuprofen</p>
    <p className='medication-description'>ibuprofen is used for pain management.</p>
    <p className='medication-names'>percocet</p>
    <p className='medication-description'>percocet is also used for pain management.</p>
    <Link to="/mife">
      <button type="button">
      continue
      </button>
    </Link>
    </div>
    </>
  )
}

export default PillDescription