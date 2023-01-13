
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Mife () {
  const [date, setDate] = useState(new Date());
  // const [startRange, setStartRange] = useState('')
  // const [endRange, setEndRange] = useState('')

  
// function addEightHours(date, hours) {
//   date.setHours(date.getHours() + hours);

//   return date;
// }
// const start = addEightHours(date, 8);
// console.log(start);

function addTwentyFourHours(date, hours) {
  date.setHours(date.getHours() + hours);

  return date;
}
const end = addTwentyFourHours(date, 24);
console.log(end);


  return (
  <>
  <p>what time do you plan on taking mifepristone?</p>
  <p>(the first pill)</p>
  <DatePicker 
  selected={date}
  onChange={(date) => setDate(date)}
  showTimeSelect
  dateFormat="Pp"/>
  <p>based on your input, you may take the misoprostol between:</p>
  <div>Selected start date={date ? date.toString() : null}</div>
  {/* <p>start:{start}</p> */}
  {/* <p>end: {end}</p> */}

  </>
  )
}
 
export default Mife