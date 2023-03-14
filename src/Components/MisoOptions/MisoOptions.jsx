import { Link } from "react-router-dom";

function MisoOptions () {
  return (
    <>
    <div className='miso-options-container'>
    <p className='options-title'>which one works for you?</p>
    <p> the second part of this process includes inserting four pills either vaginally (in the vagina) or buccally (pills are placed in between your cheeks and teeth). which option do you feel more comfortable with?</p>
    <div className='buttons-container'>
    <Link to="/mifeMisoVaginal">
        <button type="button">vaginal</button>
    </Link>
    <Link to="/mifeMisoBuccal">
        <button type="button">buccal</button>
    </Link>
    </div>
    </div>
    </>
  )
}

export default MisoOptions;