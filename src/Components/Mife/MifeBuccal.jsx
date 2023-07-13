import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

function MifeBuccal() {
  // TODO: update this to use react context
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // function to add 8 hours to the selectedDate
  function calculateStartDate(date) {
    const newDate = new Date(date);
    newDate.setFullYear(date.getFullYear());
    newDate.setMonth(date.getMonth());
    newDate.setDate(date.getDate());
    newDate.setHours(date.getHours() + 24);
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


  console.log(selectedDate)
  return (
    <div className='container'>
      <div className='title-container'>
      <p className='mife-step-one'>step one</p>
      <p className='route'>buccal route</p>
      </div>
      <p>what time do you plan on taking mifepristone?</p>
      <img src='https://i.imgur.com/TOSVkTZ.png' alt='mife'></img>
      <p>(the first pill)</p>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        dateFormat="Pp"
      />


      <p className='suggestion'>when you take mifepristone, you can take the next set of pills anytime between 24-72 hours later. we suggest that you plan to take the next set of pills at a time when you have no other obligations and can relax.</p>

      <p className='mife-input'>based on your input,<br></br> you may take the next set of pills between:</p>

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

      <div className='buttons-container'>
        <Link to="/buccalinstructions">
          <button type="button">continue</button>
        </Link>
        <Link to="/pilldescription">
          <button type="button">back</button>
        </Link>
      </div>
    </div>
  );
}

export default MifeBuccal;