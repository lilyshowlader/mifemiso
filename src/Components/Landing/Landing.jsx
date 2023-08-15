import { Navigate } from "react-router-dom"
import 'animate.css'
import useAnimateOut from "../../utils/useAnimateOut"

function Landing () {
  const [moveToNext, animateOut] = useAnimateOut();

  if(moveToNext) {
    return <Navigate to="/pilldescription" />
  }

  return (
    <>
    <div className='container landing-container animateOut'>
    <div className='logo'>mifemiso</div>
    <div className="animate__animated animate__fadeInDown">we'll walk you through.</div>
    <button onClick={animateOut} type="button" className='landingbutton animate__animated animate__fadeIn animate__delay-1s'>
    let's go
    </button>
    <p className='disclaimer animate__animated animate__fadeIn animate__delay-1s'>please consult with your <br></br>doctor before using this site.</p>
    </div>
    </>
  )
}

export default Landing
