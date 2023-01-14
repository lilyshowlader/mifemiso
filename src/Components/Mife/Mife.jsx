

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
function Mife () {
  const [date, setDate] = useState(new Date());
  const [nextDate, setNextDate] = useState(new Date())

  function addTwentyFourHours(date, hours) {
    date.setHours(date.getHours() + hours);

    return date;
  }
  const end = addTwentyFourHours(date, 24);
  console.log(end)
  

  function addEightHours(date, hours) {
    nextDate.setHours(nextDate.getHours() + hours);

    return nextDate;
  }
  const start = addEightHours(nextDate, 8);
  console.log(start);

  return (
  <>
  <p>what time do you plan on taking mifepristone?</p>
  <p>(the first pill)</p>
  <DatePicker 
  selected={date}
  onChange={(date) =>{setDate(date); setNextDate(date)}}
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
