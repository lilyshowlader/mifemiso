import { Navigate } from "react-router-dom";
import useAnimateOut from "../../utils/useAnimateOut";

function Disclaimer () {
  const [moveToNext, animateOut] = useAnimateOut();

  if(moveToNext) {
    return <Navigate to="/mifemiso" />
  }

  return (
  <>
    <div className='landing-container container'>
      <div className='logo animate__animated animate__fadeInDown'>mifemiso</div>
      <p className='disclaimer animate__animated animate__fadeIn animate__delay-1s animateOut'>disclaimer: <br></br>this app was created as a personal portfolio project to demonstrate the concept of how technology and software can be used to help simplify the instructions for the medical abortion process.  this app does not replace consultation with a doctor and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. all images on this app are not my own and are used solely for demonstration purposes. proper credit and ownership belong to the original creators.</p>
      <button onClick={animateOut} type="button" className='landingbutton animate__animated animate__fadeIn animate__delay-1s animateOut'>
      I understand
      </button>
    </div>
  </>
  );
}

export default Disclaimer;
