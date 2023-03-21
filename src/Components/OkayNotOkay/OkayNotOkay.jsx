import { Link } from "react-router-dom"


function OkayNotOkay () {
  return (
    <>
    <div className='expectations-container'>
    <p className='expectations-title'>what's normal?</p>
    <p className='description'>cramping and bleeding usually begin 1-4 hours after taking misoprostol. sometimes it can even take up to 24 hours. usually cramping begins before bleeding. please use the heating pad that was given to you, this can help with the cramping. </p>
    <p className='description'>it's common to feel all kinds of emotions as you go through this process. allow yourself to feel the emotions. the hormones are powerful! it's totally okay to feel the full range of emotions and feel that they are conflicting with eachother. anxiety is common and it is normal to feel anxiety when you do not know what to expect. please call our helpline if you are concerned and need some reassurance.</p>

    <p className='expectations-title'>when to call the doctor</p>
    <p className='description'><b>if you do not bleed within 24 hours, please call the doctor. the doctor will likely instruct you to repeat a 2nd round of misoprostol, 24 hours after the first dose.</b></p>
    <ul className='description'>other reasons to call the doctor:
    <li className='description'>fever of 100.4 or higher.</li>
    <li className='description'>sudden severe one-sided (left or right) lower abdominal pain.</li>
    <li className='description'>heavy bleeding (soaking through two thick sanitary pads per hour for two hours in a row)</li>
    <li className='description'>feeling weakness, nausea, vomitting, diarrhea {'>'} 24 hours after misoprostol. </li>
    </ul>

    <p className='expectations-title'>follow up</p>
    <ul>
    <li className='description'>use sanitary pads, not tampons, for 48 hours, then change tampons frequently.</li>
    <li className='description'>if you plan on having sex, please use condoms for 7 days.</li>
    <li className='description'>call the doctor if you do not bleed within 24 hours of taking misoprostol.</li>
    <li className='description'>you must go to your follow-up appointment that was scheduled for you. during this appointment, the doctor will do a follow-up ultrasound to make sure everything went okay!</li>
    </ul>

    
    <Link to="/instructions">
      <button type="button">
      back
      </button>
    </Link>
    </div>
    </>
  )
}

export default OkayNotOkay
