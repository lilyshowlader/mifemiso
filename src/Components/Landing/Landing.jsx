import { useState } from "react";
import { Navigate } from "react-router-dom"
import 'animate.css';

function Landing () {
  const [moveToNext, setMoveToNext] = useState(false);

  const animateOut = () => {
    document.querySelectorAll(".animateOut").forEach(el => {
      el.className = el.className.split(" ").filter(name => !name.includes("In") && !name.includes("delay-")).concat("animate").join(" animate__fadeOut")
    });

    setTimeout(() => setMoveToNext(true), 2000);
  }

  if(moveToNext) {
    return <Navigate to="/pilldescription" />
  }

  return (
    <>
    <div className='landing-container'>
    <div className='logo'>mifemiso</div>
    <div className="animate__animated animate__fadeInDown animateOut">we'll walk you through.</div>
    <button onClick={animateOut} type="button" className='landingbutton animate__animated animate__fadeIn animate__delay-1s animateOut'>
    show me
    </button>
    <p className='disclaimer animate__animated animate__fadeIn animate__delay-1s animateOut'>please consult with your <br></br>doctor before using this site.</p>
    </div>
    </>
  )
}

export default Landing