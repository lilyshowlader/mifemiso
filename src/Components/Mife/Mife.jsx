
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Mife () {
  // need a date picker here 
  const [startDate, setStartDate] = useState(new Date());
  return (
  <>
  <p>what time do you plan on taking mifepristone?</p>
  <p>(the first pill)</p>
  <DatePicker 
  selected={startDate}
  onChange={(date) => setStartDate(date)}
  showTimeSelect
  dateFormat="Pp" />
  
  </>
  )
}

export default Mife