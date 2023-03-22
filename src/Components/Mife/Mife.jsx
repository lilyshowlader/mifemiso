import React, { useMemo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { addTime, useMifeDate } from "../../utils/useMifeDate";

function Mife() {
  const { date, setDate } = useMifeDate();
  const { startDate, endDate } = useMemo(() => ({
    startDate: addTime(date, 6, "hours"),
    endDate: addTime(date, 72, "hours")
  }), [date]);

  // onChange event handler for the datepicker
  const handleDateChange = (date) => {
    setDate(date);
  };

  console.log(date)
  return (
    <div className='container'>
      <div className='title-container'>
      <p className='mife-step-one'>step one</p>
      <p className='route'>vaginal route</p>
      </div>
      <p>what time do you plan on taking mifepristone?</p>
      <p>(the first pill)</p>
      <DatePicker
        selected={date}
        onChange={handleDateChange}
        showTimeSelect
        dateFormat="Pp"
      />


      <p className='suggestion'>when you take mifepristone, you can take the next set of pills anytime between 6-72 hours later. we suggest that you plan to take the next set of pills at a time when you have no other obligations and can relax.</p>

      <p className='mife-input'>based on your input,<br></br> you may take the next set of pills between:</p>

      <p className='time'> <span style={{ fontWeight: "bolder" }}>start</span>:{" "}
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
      <span style={{ fontWeight: "bolder" }}>end</span>:{" "}
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
        <Link to="/pilldescription">
          <button type="button">back</button>
        </Link>
        <Link to="/instructions">
          <button type="button">continue</button>
        </Link>
      </div>
    </div>
  );
}

export default Mife;