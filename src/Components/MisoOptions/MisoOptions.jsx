import { Link } from "react-router-dom";

function MisoOptions() {
  return (
    <>
      <div className='container miso-options-container'>
        <p className='options-title'>which one works for you?</p>
        <p>The second part of this process includes inserting four pills either vaginally (in the vagina) or buccally (pills are placed in between your cheeks and teeth). Which option do you feel more comfortable with?</p>
        <div className='buttons-container'>
          <div className='option'>
          <img src="https://i.imgur.com/pKR9Nyh.jpg" alt='vaginal' className='fruitpic' />
            <Link to="/mifeMisoVaginal">
              <button type="button">vaginal</button>
            </Link>
          </div>
          <div className='option'>
          <img src="https://i.imgur.com/JYWzYjY.jpg" alt='buccal' className='fruitpic' />
            <Link to="/mifeMisoBuccal">
              <button type="button">buccal</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default MisoOptions;
