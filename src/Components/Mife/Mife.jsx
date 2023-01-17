import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
function Mife () {
  const initialDate = new Date()
  const [twentyFourHours, setTwentyFourHours] = useState(new Date());
  const [eightHours, setEightHours] = useState(new Date())


  // function below to add eight hours to initialDate
  function addEightHours(initialDate, hours) {
    eightHours.setHours(eightHours.getHours() + hours);
    return eightHours;
  }
  const start = addEightHours(eightHours, 8);

  // function below to add twenty four hours to initialDate
  function addTwentyFourHours(initialDate, hours) {
    twentyFourHours.setHours(twentyFourHours.getHours() + hours)
    return twentyFourHours;
  }
  const end = addTwentyFourHours(twentyFourHours, 24);

  return (
  <>
  <p>what time do you plan on taking mifepristone?</p>
  <p>(the first pill)</p>
  <DatePicker 
  selected={initialDate}
  onChange={(initialDate) =>{setEightHours(initialDate); setTwentyFourHours(initialDate)}}
  showTimeSelect
  dateFormat="Pp"/>
  <p>based on your input, you may take the misoprostol between:</p>
  <p>start:{start.toString()}</p>
  <p> and </p>
  <p>end: {end.toString()}</p>
  <Link to="/instructions">
      <button type="button">
      click here to continue
      </button>
  </Link>
  <Link to="/pilldescription">
      <button type="button">
      back
      </button>
  </Link>
  </>
  )
}
 
export default Mife                     

