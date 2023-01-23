import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

function Mife() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // function to add 8 hours to the selectedDate
  function calculateStartDate(date) {
    const newDate = new Date(date);
    newDate.setFullYear(date.getFullYear());
    newDate.setMonth(date.getMonth());
    newDate.setDate(date.getDate());
    newDate.setHours(date.getHours() + 6);
    newDate.setMinutes(date.getMinutes());
    return newDate;
  }

  // function to add 24 hours to the selectedDate
  function calculateEndDate(date) {
    const newDate = new Date(date);
    newDate.setFullYear(date.getFullYear());
    newDate.setMonth(date.getMonth());
    newDate.setDate(date.getDate());
    newDate.setHours(date.getHours() + 72);
    newDate.setMinutes(date.getMinutes());
    return newDate;
  }

  // onChange event handler for the datepicker
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setStartDate(calculateStartDate(date));
    setEndDate(calculateEndDate(date));
  };

  return (
    <>
      <div className='mife-container'>
      <p className='mife-step-one'>step one</p>
      <p>what time do you plan on taking mifepristone?</p>
      <p>(the first pill)</p>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        dateFormat="Pp"
      />
      <p className='mife-input'>based on your input,<br></br> you may take the misoprostol between:</p>

      <p className='time'> start:{" "}
        {startDate ? startDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }) : "please select a date"}
      </p>

      <p> and </p>

      <p className='time'>
        end:{" "}
        {endDate ? endDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        }) : "please select a date"}
      </p>
      <p className='mife-instruction'>take the mifepristone at a time that is right for you. most women do not feel different after taking it, however, some women do experience some spotting or bleeding.</p>
      <Link to="/instructions">
        <button type="button">continue</button>
      </Link>
      <Link to="/pilldescription">
        <button type="button">back</button> 
        </Link>
      </div> 
    </>
  );
}

export default Mife;