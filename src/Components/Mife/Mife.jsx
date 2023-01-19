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
    newDate.setHours(date.getHours() + 8);
    newDate.setMinutes(date.getMinutes());
    return newDate;
  }

  // function to add 24 hours to the selectedDate
  function calculateEndDate(date) {
    const newDate = new Date(date);
    newDate.setFullYear(date.getFullYear());
    newDate.setMonth(date.getMonth());
    newDate.setDate(date.getDate());
    newDate.setHours(date.getHours() + 24);
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
      <p>what time do you plan on taking mifepristone?</p>
      <p>(the first pill)</p>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        dateFormat="Pp"
      />
      <p>based on your input, you may take the misoprostol between:</p>

      <p> start:{" "}
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

      <p>
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
      <Link to="/instructions">
        <button type="button">click here to continue</button>
      </Link>
      <Link to="/pilldescription">
        <button type="button">back</button> 
        </Link>

        </>
  );
}

export default Mife;