import { Link } from "react-router-dom"
function PillDescription () {
  return (
    <>
    <div className='pilldescription-container'>
  
    <p className='pill-title'>here is a list of all the medications<br></br> that were given to you.</p> 
    <img src="https://i.imgur.com/TOSVkTZ.png" alt='mifepristone'></img>
    <p className='medication-names'>mifepristone</p>
    <p className='medication-description'>mifepristone is the first pill you will take during this process. mifepristone works by stopping the supply of hormones that maintains the interior of the uterus. without these hormones, the uterus cannot support the pregnancy and the contents of the uterus are expelled.</p>
    <img src="https://i.imgur.com/evBYUOl.png" alt='misoprostol'></img>
    <p className='medication-names'>misoprostol</p>
    <p className='medication-description'>you were given 4 misoprostol pills. misoprostol is what is used to help "empty" your uterus. we recommend you take misoprostol either vaginally or buccally. we're gonna explain this, don't worry.</p>
    <img src="https://i.imgur.com/qLtg1ns.png" alt='compazine'></img>
    <p className='medication-names'>compazine</p>
    <p className='medication-description'>compazine is used to treat nausea. we recommend for patients to take this medication as a preventative measure.</p>
    <img src="https://i.imgur.com/h83dewV.png" alt='ibuprofen'></img>
    <p className='medication-names'>ibuprofen</p>
    <p className='medication-description'>ibuprofen is generic tylenol. it is used for pain management. we recommend for patients to take this medication as a preventative measure. </p>
    <img src="https://i.imgur.com/OUSClVk.png" alt='percocet'></img>
    <p className='medication-names'>percocet</p>
    <p className='medication-description'>percocet is a controlled substance that is also used for pain management. we have given you a perscription for this medication. please pick it up from your pharmacy. we recommend for patients to take this medication as a preventative measure.</p>
    <Link to="/misooptions">
      <button type="button">
      continue
      </button>
    </Link>
    </div>
    </>
  )
}

export default PillDescription